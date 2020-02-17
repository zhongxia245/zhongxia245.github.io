(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{222:function(s,e,a){"use strict";a.r(e);var r=a(0),t=Object(r.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("介绍 docker 的一些基础命令，以及几个简单的小例子，帮助快速入门。后面就介绍一下， 如何使用 docker 来进行部署微服务。")]),s._v(" "),a("h2",{attrs:{id:"docker-架构图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-架构图"}},[s._v("#")]),s._v(" docker 架构图")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://ws4.sinaimg.cn/large/006tKfTcgy1flpums8f2nj30ed0awmyj.jpg",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"零、学习文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#零、学习文章"}},[s._v("#")]),s._v(" 零、学习文章")]),s._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"http://www.runoob.com/docker/docker-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("《Docker 教程 | 菜鸟教程》"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://blog.csphere.cn/archives/22",target:"_blank",rel:"noopener noreferrer"}},[s._v("《一小时 Docker 教程》"),a("OutboundLink")],1)])]),s._v(" "),a("blockquote",[a("p",[s._v("下面这些内容，来源于 "),a("a",{attrs:{href:"https://blog.csphere.cn/archives/22",target:"_blank",rel:"noopener noreferrer"}},[s._v("《一小时 Docker 教程》"),a("OutboundLink")],1),s._v("。")])]),s._v(" "),a("h2",{attrs:{id:"一、docker-基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、docker-基础"}},[s._v("#")]),s._v(" 一、Docker 基础")]),s._v(" "),a("p",[s._v("这篇基础文章是方便用户在使用 cSphere 平台之前,了解 docker 基础知识。")]),s._v(" "),a("p",[s._v("针对已经有一定的 Linux 基础知识的用户。")]),s._v(" "),a("h3",{attrs:{id:"_1-1-docker-是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-docker-是什么"}},[s._v("#")]),s._v(" 1.1 Docker 是什么")]),s._v(" "),a("p",[s._v("Docker 是一个改进的容器技术。具体的“改进”体现在，Docker 为容器引入了镜像，使得容器可以从预先定义好的模版（images）创建出来，并且这个模版还是分层的。")]),s._v(" "),a("p",[s._v("Docker 经常被提起的特点：")]),s._v(" "),a("ul",[a("li",[s._v("轻量，体现在内存占用小，高密度")]),s._v(" "),a("li",[s._v("快速，毫秒启动")]),s._v(" "),a("li",[s._v("隔离，沙盒技术更像虚拟机")])]),s._v(" "),a("h3",{attrs:{id:"_1-2-docker-技术的基础："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-docker-技术的基础："}},[s._v("#")]),s._v(" 1.2 Docker 技术的基础：")]),s._v(" "),a("ul",[a("li",[s._v("namespace，容器隔离的基础，保证 A 容器看不到 B 容器. 6 个名空间：User,Mnt,Network,UTS,IPC,Pid")]),s._v(" "),a("li",[s._v("cgroups，容器资源统计和隔离。主要用到的 cgroups 子系统：cpu,blkio,device,freezer,memory")]),s._v(" "),a("li",[s._v("unionfs，典型：aufs/overlayfs，分层镜像实现的基础")])]),s._v(" "),a("h3",{attrs:{id:"_1-3-docker-组件："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-docker-组件："}},[s._v("#")]),s._v(" 1.3 Docker 组件：")]),s._v(" "),a("ul",[a("li",[s._v("docker Client 客户端————>向 docker 服务器进程发起请求，如:创建、停止、销毁容器等操作")]),s._v(" "),a("li",[s._v("docker Server 服务器进程—–>处理所有 docker 的请求，管理所有容器")]),s._v(" "),a("li",[s._v("docker Registry 镜像仓库——>镜像存放的中央仓库，可看作是存放二进制的 scm")])]),s._v(" "),a("h3",{attrs:{id:"_1-4-docker-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-docker-安装"}},[s._v("#")]),s._v(" 1.4 Docker 安装")]),s._v(" "),a("ul",[a("li",[s._v("Docker 的安装非常简单，支持目前所有主流操作系统，从 Mac 到 Windows 到各种 Linux 发行版具体参考： "),a("a",{attrs:{href:"https://docs.docker.com/installation/",target:"_blank",rel:"noopener noreferrer"}},[s._v("docker 安装"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"二、docker-常见命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、docker-常见命令"}},[s._v("#")]),s._v(" 二、Docker 常见命令")]),s._v(" "),a("h3",{attrs:{id:"_2-1-容器相关操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-容器相关操作"}},[s._v("#")]),s._v(" 2.1 容器相关操作")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker create # 创建一个容器但是不启动它\ndocker run # 创建并启动一个容器\ndocker stop # 停止容器运行，发送信号SIGTERM\ndocker start # 启动一个停止状态的容器\ndocker restart # 重启一个容器\ndocker rm # 删除一个容器\ndocker kill # 发送信号给容器，默认SIGKILL\ndocker attach # 连接(进入)到一个正在运行的容器\ndocker wait # 阻塞到一个容器，直到容器停止运行\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"_2-2-获取容器相关信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-获取容器相关信息"}},[s._v("#")]),s._v(" 2.2 获取容器相关信息")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker ps # 显示状态为运行（Up）的容器\ndocker ps -a # 显示所有容器,包括运行中（Up）的和退出的(Exited)\ndocker inspect # 深入容器内部获取容器所有信息\ndocker logs # 查看容器的日志(stdout/stderr)\ndocker events # 得到docker服务器的实时的事件\ndocker port # 显示容器的端口映射\ndocker top # 显示容器的进程信息\ndocker diff # 显示容器文件系统的前后变化\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"_2-3-导出容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-导出容器"}},[s._v("#")]),s._v(" 2.3 导出容器")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker cp # 从容器里向外拷贝文件或目录\ndocker export # 将容器整个文件系统导出为一个tar包，不带layers、tag等信息\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"_2-4-执行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-执行"}},[s._v("#")]),s._v(" 2.4 执行")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker exec # 在容器里执行一个命令，可以执行bash进入交互式\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_2-5-镜像操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-镜像操作"}},[s._v("#")]),s._v(" 2.5 镜像操作")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker images # 显示本地所有的镜像列表\ndocker import # 从一个tar包创建一个镜像，往往和export结合使用\ndocker build # 使用Dockerfile创建镜像（推荐）\ndocker commit # 从容器创建镜像\ndocker rmi # 删除一个镜像\ndocker load # 从一个tar包创建一个镜像，和save配合使用\ndocker save # 将一个镜像保存为一个tar包，带layers和tag信息\ndocker history # 显示生成一个镜像的历史命令\ndocker tag # 为镜像起一个别名\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"_2-6-镜像仓库-registry-操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-镜像仓库-registry-操作"}},[s._v("#")]),s._v(" 2.6 镜像仓库(registry)操作")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker login # 登录到一个registry\ndocker search # 从registry仓库搜索镜像\ndocker pull # 从仓库下载镜像到本地\ndocker push # 将一个镜像push到registry仓库中\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"三、常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、常用命令"}},[s._v("#")]),s._v(" 三、常用命令")]),s._v(" "),a("ol",[a("li",[s._v("获取 Container IP 地址（Container 状态必须是 Up）")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker inspect id | grep IPAddress | cut -d '\"' -f 4\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("获取端口映射")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker inspect -f '{{range $p, $conf := .NetworkSettings.Ports}} {{$p}} -> {{(index $conf 0).HostPort}} {{end}}' id\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("获取环境变量")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker exec container_id env\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("杀掉所有正在运行的容器")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker kill $(docker ps -q)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"5"}},[a("li",[s._v("删除老的(一周前创建)容器")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker ps -a | grep 'weeks ago' | awk '{print $1}' | xargs docker rm\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"6"}},[a("li",[s._v("删除已经停止的容器")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker rm `docker ps -a -q`\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"7"}},[a("li",[s._v("删除所有镜像，小心")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker rmi $(docker images -q)\nDockerfile\nDockerfile是docker构建镜像的基础，也是docker区别于其他容器的重要特征，正是有了Dockerfile，docker的自动化和可移植性才成为可能。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"四、dockerfile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、dockerfile"}},[s._v("#")]),s._v(" 四、Dockerfile")]),s._v(" "),a("p",[s._v("不论是开发还是运维，学会编写 Dockerfile 几乎是必备的，这有助于你理解整个容器的运行。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('FROM , 从一个基础镜像构建新的镜像\nFROM ubuntu\nMAINTAINER , 维护者信息\nMAINTAINER William <wlj@nicescale.com>\nENV , 设置环境变量\nENV TEST 1\nRUN , 非交互式运行shell命令\nRUN apt-get -y update\nRUN apt-get -y install nginx\nADD , 将外部文件拷贝到镜像里,src可以为url\nADD http://nicescale.com/  /data/nicescale.tgz\nWORKDIR /path/to/workdir, 设置工作目录\nWORKDIR /var/www\nUSER , 设置用户ID\nUSER nginx\nVULUME <#dir>, 设置volume\nVOLUME [‘/data’]\nEXPOSE , 暴露哪些端口\nEXPOSE 80 443\nENTRYPOINT [‘executable’, ‘param1’,’param2’]执行命令\nENTRYPOINT ["/usr/sbin/nginx"]\nCMD [“param1”,”param2”]\nCMD ["start"]\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("p",[s._v("docker 创建、启动 container 时执行的命令，如果设置了 ENTRYPOINT，则 CMD 将作为参数")]),s._v(" "),a("h2",{attrs:{id:"五、dockerfile-最佳实践"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、dockerfile-最佳实践"}},[s._v("#")]),s._v(" 五、Dockerfile 最佳实践")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("尽量将一些常用不变的指令放到前面")])]),s._v(" "),a("li",[a("p",[s._v("CMD 和 ENTRYPOINT 尽量使用 json 数组方式")])]),s._v(" "),a("li",[a("p",[s._v("通过 Dockerfile 构建 image\ndocker build csphere/nginx:1.7 .")])]),s._v(" "),a("li",[a("p",[s._v("镜像仓库 Registry\n镜像从 Dockerfile build 生成后，需要将镜像推送(push)到镜像仓库。企业内部都需要构建一个私有 docker registry，这个 registry 可以看作二进制的 scm，CI/CD 也需要围绕 registry 进行。")])]),s._v(" "),a("li",[a("p",[s._v("部署 registry")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mkdir /registry\ndocker run  -p 80:5000  -e STORAGE_PATH=/registry  -v /registry:/registry  registry:2.0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("推送镜像保存到仓库")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("假设192.168.1.2是registry仓库的地址：\n\ndocker tag  csphere/nginx:1.7 192.168.1.2/csphere/nginx:1.7\ndocker push 192.168.1.2/csphere/nginx:1.7\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"六、几个简单小例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六、几个简单小例子"}},[s._v("#")]),s._v(" 六、几个简单小例子")]),s._v(" "),a("h3",{attrs:{id:"_6-1-创建并拉取-busybox"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-创建并拉取-busybox"}},[s._v("#")]),s._v(" 6.1 创建并拉取 busybox")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# docker run -it --name con01 busybox:latest\n/ # ip addr    #容器里执行\n1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default\nlink/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\ninet 127.0.0.1/8 scope host lo\n   valid_lft forever preferred_lft forever\nSegmentation fault (core dumped)\n/ # ping www.csphere.cn\nPING www.csphere.cn (117.121.26.243): 56 data bytes\n64 bytes from 117.121.26.243: seq=0 ttl=48 time=3.139 ms\n64 bytes from 117.121.26.243: seq=1 ttl=48 time=3.027 ms\n^C\n--- www.csphere.cn ping statistics ---\n2 packets transmitted, 2 packets received, 0% packet loss\nround-trip min/avg/max = 3.027/3.083/3.139 ms\nexit    #退出容器\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h3",{attrs:{id:"_6-2-创建测试容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-创建测试容器"}},[s._v("#")]),s._v(" 6.2 创建测试容器")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker run -d --name con03 csphere/test:0.1\nefc9bda4a2ff2f479b18e0fc4698e42c47c9583a24c93f5ce6b28a828a172709\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"_6-3-登陆到-con03-中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-登陆到-con03-中"}},[s._v("#")]),s._v(" 6.3 登陆到 con03 中")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# docker exec -it con03 /bin/bash\n[root@efc9bda4a2ff /]# exit\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"_6-4-停止-con03"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-停止-con03"}},[s._v("#")]),s._v(" 6.4 停止 con03")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# docker stop con03\ncon03\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"_6-5-开启-con03"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-5-开启-con03"}},[s._v("#")]),s._v(" 6.5 开启 con03")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# docker start con03\ncon03\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"_6-6-删除-con03"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-6-删除-con03"}},[s._v("#")]),s._v(" 6.6 删除 con03")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('# docker ps -a\nCONTAINER ID        IMAGE                    COMMAND                CREATED             STATUS                      PORTS                                             NAMES\nefc9bda4a2ff        csphere/test:0.1         "/usr/local/bin/run    4 minutes ago       Up 17 seconds                                                                 con03\n99aa6ee25adc        busybox:latest           "/bin/sh"              14 minutes ago      Exited (0) 12 minutes ago                                                     con02\n831c93de9b9f        busybox:latest           "/bin/sh"              2 hours ago         Up 27 minutes                                                                 con01\n# docker rm con02     #容器停止的状态\n# docker rm -f con03  #容器开启的状态\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"七、镜像操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#七、镜像操作"}},[s._v("#")]),s._v(" 七、镜像操作")]),s._v(" "),a("h3",{attrs:{id:"_7-1-从-docker-hub-官方镜像仓库拉取镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-从-docker-hub-官方镜像仓库拉取镜像"}},[s._v("#")]),s._v(" 7.1 从 docker hub 官方镜像仓库拉取镜像")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# docker pull busybox:latest\natest: Pulling from busybox\ncf2616975b4a: Pull complete\n6ce2e90b0bc7: Pull complete\n8c2e06607696: Already exists\nbusybox:latest: The image you are pulling has been verified. Important: image verification is a tech preview feature and should not be relied on to provide security.\nDigest: sha256:38a203e1986cf79639cfb9b2e1d6e773de84002feea2d4eb006b52004ee8502d\nStatus: Downloaded newer image for busybox:latest\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"_7-2-从本地上传镜像到镜像仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-从本地上传镜像到镜像仓库"}},[s._v("#")]),s._v(" 7.2 从本地上传镜像到镜像仓库")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker push 192.168.1.2/csphere/nginx:1.7\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_7-3-查找镜像仓库的某个镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-3-查找镜像仓库的某个镜像"}},[s._v("#")]),s._v(" 7.3 查找镜像仓库的某个镜像")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# docker search centos/nginx\nNAME                                     DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED\njohnnyzheng/centos-nginx-php-wordpress                                                   1                    [OK]\nsergeyzh/centos6-nginx                                                                   1                    [OK]\nhzhang/centos-nginx                                                                      1                    [OK]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"_7-4-查看本地镜像列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-4-查看本地镜像列表"}},[s._v("#")]),s._v(" 7.4 查看本地镜像列表")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# docker images\nTAG                 IMAGE ID            CREATED             VIRTUAL SIZE\ndocker.io/csphere/csphere   0.10.3              604c03bf0c9e        3 days ago          62.72 MB\ndocker.io/csphere/csphere   latest              604c03bf0c9e        3 days ago          62.72 MB\ncsphere/csphere             0.10.3              604c03bf0c9e        3 days ago          62.72 MB\nregistry                    2.0                 2971b6ce766c        7 days ago          548.1 MB\nbusybox                     latest              8c2e06607696        3 weeks ago         2.43 MB\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"_7-5-删除镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-5-删除镜像"}},[s._v("#")]),s._v(" 7.5 删除镜像")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker rmi busybox:latest        #没有容器使用此镜像创建，如果有容器在使用此镜像会报错：Error response from daemon: Conflict, cannot delete 8c2e06607696 because the running container 831c93de9b9f is using it, stop it and use -f to force\nFATA[0000] Error: failed to remove one or more images\ndocker rmi -f busybox:latest     #容器使用此镜像创建，此容器状态为Exited\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"_7-6-查看构建镜像所用过的命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-6-查看构建镜像所用过的命令"}},[s._v("#")]),s._v(" 7.6 查看构建镜像所用过的命令")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('# docker history busybox:latest\nIMAGE               CREATED             CREATED BY                                      SIZE\n8c2e06607696        3 weeks ago         /bin/sh -c #(nop) CMD ["/bin/sh"]               0 B\n6ce2e90b0bc7        3 weeks ago         /bin/sh -c #(nop) ADD file:8cf517d90fe79547c4   2.43 MB\ncf2616975b4a        3 weeks ago         /bin/sh -c #(nop) MAINTAINER Jérôme Petazzo     0 B\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])])}),[],!1,null,null,null);e.default=t.exports}}]);