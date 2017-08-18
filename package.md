package 安装

---

> 环境 node v8.2.1  npm 5.3.0  ubuntu 16.04  文档使用liunx例举

## npm init
```
mkdir package

cd package/

npm init

```

> 新建一个文件夹在文件夹内初始化本地仓库 npm init 一直回车即可

## npm install
```
vim package.json

npm install
```
> 编辑package.json文件夹 书写格式自查文档  保存退出 执行:npm install 

> 不出报错就成功了 如果出现报错有可能使npm 或node版本太低 liunx注意是否是权限问题

## webpack.mix.js 编辑编译目录
> 保存退出
```
npm run watch
```
> 执行玩之后查看编译文件存在即成功
> npm run watch 是本地测试命令 上线时 npm run production 即可编译打包

