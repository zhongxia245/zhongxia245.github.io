---
title: 2001 - 服务器 MongoDB 数据库定时备份
date: 2020-01-05 11:36:23
---

# 服务器 MongoDB 数据库定时备份

个人项目学习使用，购买了一台阿里云服务器，并部署了几个小项目，数据库采用 MongoDB，为了避免服务器挂掉，数据丢失，因此对数据做一个定时备份。



## 一、数据库备份实现

定时备份大概分为几个步骤

1. 导出线上 mongoose 数据, 并打成 tar 包
2. 编写shell 脚本，完成导出，打包操作
3. 设置定时任务，每天凌晨2点备份数据
4. 同步一份数据库数据到 OSS 上（这里用七牛）



### 1、导出数据，打成 tar 包

导出数据虽然比较简单，但是为了避免出错，建议现在本地跑一下这个命令，然后在到服务器去运行。

```bash
# -h 连接的数据库地址， -d 数据库名称，-o 导出路径， -u 用户名， -p 密码
mongodump -h 127.0.0.1:27017 -d UserSystem -o ./backup -u demo -p demo 

# 把数据库文件打包
tar zcvf ./UserSystem UserSystem.tar.gz

# 删除目录
rm -rf ./UserSystem
```



### 2、编写 shell 脚本

每次进入服务器都需要执行导出命令，再打包，很麻烦，因此编写一个 shell 脚本。下次备份只需要执行脚本即可。

```bash
# tasks/backup.sh

#!/bin/sh

backUpFolder=/home/zhongxia/backup
# 备份文件名带上日期信息，避免重名，并方便识别
dateNow=`date +%Y_%m_%d_%H%M`
backFileName=egg_cnode_$dateNow

# 进入备份文件夹
cd $backUpFolder

#创建备份目录
mkdir -p $backFileName

# 导出 dbName 数据库
mongodump -h 127.0.0.1:27017 -d dbName -o $backFileName -u demo -p '123321'

# 压缩导出的数据
tar zcvf $backFileName.tar.gz $backFileName

# 删除文件夹，只保留备份的压缩包
rm -rf $backFileName
```

写好了脚本，这里执行即可。

```bash
# 执行脚本
sh backup.sh

# 可能存在问题，你的登录用户没有操作备份文件夹的权限
# 这里只是举个最简单粗暴的解决方案
chmod 777 /home/zhongxia/backup
```



### 3、设置定时任务

备份文件，还需要每次手动进入服务器，执行 shell 脚本还是麻烦，并且还会经常忘记。

因此设置一个定时任务，自己跑，省时省力。

```bash
# 设置定时任务，执行命令会进去一个配置文件中去
crontab -e 

# 定时配置文件可能有默认的一些参考，可能是空的。（我机器上是空的）
# 加上一条定时任务

# 分 小时 日 月 星期几 command
# 每天两点定时备份egg_cnode 数据库
00 02 ** ** ** sh /home/zhongxia/task/backup.sh
```



> 00 02 ** ** ** 表示 每天凌晨2天执行， 这个不清楚可以网上搜索下 crontab 如何配置，这里就不多介绍了，因为平时用的少，也不太熟悉，不误人子弟了。



### 4、上传到七牛

数据库备份，本来就是怕服务器挂掉了，数据没有了。现在备份出来的数据还都存在服务器上。这样比没有备份，好不到哪里去，五十步笑百步。

因此可以上传到 OSS， 或者其他可以存储的地方, 这里以 七牛为例。



#### 4.1、编写脚本，上传文件到七牛私有空间

作为一个前端，JS 是最拿手的了，那么就用 node 来上传七牛吧。

```js
// upload_qiniu.js

const qiniu = require("qiniu");

// 设置你的空间名称，AK 和 SK， 这个在七牛控制台的密钥管理可以找到
var bucket = "<bucket>";
var accessKey = "<accessKey>";
var secretKey = "<secretKey>";

var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
var options = {
  scope: bucket
};
var putPolicy = new qiniu.rs.PutPolicy(options);

var uploadToken = putPolicy.uploadToken(mac);
var config = new qiniu.conf.Config();

// 从环境变量获取需要备份的文件名和目录
// 这么写，是为了方便在 shell 脚本中执行
var params = process.env.NODE_ENV.split("@");
var fileName = params[0] + ".tar.gz";
var localFile = params[1] + "/" + fileName;

var formUploader = new qiniu.form_up.FormUploader(config);

formUploader.putFile(uploadToken, fileName, localFile, null, function(
  respErr,
  respBody,
  respInfo
) {
  if (respErr) {
    throw respErr;
  }
  if (respInfo.statusCode == 200) {
    console.log(respBody);
  } else {
    console.log(respInfo.statusCode);
    console.log(respBody);
  }
});
```



#### 4.2、shell 脚本增加一个上传功能

```shell
# ... 上面代码省略, 把命令添加在脚本最后面

# 上传七牛
export NODE_ENV=$backFileName@$backUpFolder && node /home/zhongxia/task/upload_qiniu.js
```



#### 4.3、验证一下

```bash
# 跑下脚本，看是否可行
sh backup.sh 
```

如果没有报错，并且七牛控制台也可以看到，那就 ok 了。





## 二、补充内容

### 1、创建 mongo 用户去备份

可以创建一个**只有读写要备份数据库**的用户，去备份数据。主要还是为了控制用户的权限。

> 个人项目的话，怎么开心怎么来就行。

```bash
mongo
# 登录 root
db.auth({user:'root',pwd:'123123123'})

show databases;
use UserSystem;

#  创建用户
db.createUser({user:'backup_user',pwd:'123456',roles:[{role:'readWrite',db:'UserSystem'}]});

#  退出重新登录
exit 
mongo -u backup_user -p 123456

```



### 2、备份多个数据库，建议编写多个脚本

备份多个数据库为什么要写多个脚本呢，一个脚本处理所有，不行吗？当然是可以的。

不过写多个脚本，可以避免有一个数据库备份出错，所有的数据库都出错的原因。当然定时任务也可以各自配置，互相不影响。



### 3、七牛的私有空间文件如何下载？

使用七牛提供的默认临时域名，无法下载私有空间的文件。需要绑定一个自定义域名。

如何绑定域名，看 [七牛官方文档](https://developer.qiniu.com/fusion/kb/1322/how-to-configure-cname-domain-name) ， 如何设置 DNS 解析，可以去 [DNSPod](https://www.dnspod.cn/) 的管理控制台=》DNS 管理 来添加一条 CNAME 记录解析。

之后就可以登录七牛控制台直接下载备份的数据库文件了。



### 4、如何把备份文件导入mongo 数据库

```bash
# 解压 tar 包
tar xvf UserSystem.tar.gz

# 把当前目录的 UserSytem备份文件，导出到 user-system 数据库中
# 使用方式跟导出数据库文件一样
mongorestore -h 127.0.0.1:27017 -d user-system ./UserSystem -u demo -p 123123
```

> 导出导入单表的话，可以查下 `mongoexport`   `mongoimport` 这两个命令。 



### 5、如何把本地文件上传到服务器

七牛下载下来的数据库备份在本地，需要先上传到服务器才能备份。

> 具体可以看下 [Linux scp命令](https://www.runoob.com/linux/linux-comm-scp.html)

```bash
# 从本地复制到服务器
scp local_file remote_username@remote_ip:remote_folder

# 从服务器到本地
# 就是把scp 后面的两个参数换下位置而已
scp remote_username@remote_ip:remote_folder /home/space/music

# 如果你服务器的端口不是 22，而是9999
scp -P 9999 local_file remote_username@remote_ip:remote_folder
```



