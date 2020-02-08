# 算法

编写算法，准备用 jest 来测试的时候，发现 jest 运行没有反应。以为使用方式有误，找了半天没有找到原因。

后面 google 了一下，发现有同样的问题

https://stackoverflow.com/questions/55191638/jest-doesnt-run-hangs-indefinitely

```bash
# 系统信息
# Mac 10.15.1
# node v11.14.0
# npm 6.7.0
# jest 24.9.0
# 解决方案,卸载再安装这个就可以了
brew uninstall watchman
brew install watchman
```
