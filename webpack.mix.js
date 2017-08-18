//引入laravle-mix 重要
const { mix } = require('laravel-mix');

//编译目录把assets/js/WebSocket.js编译到 public/static/js/WebSocket.js
//js编译微js
//less编译为css文件 注意编写格式如果没有安装less则需要安装less
//正式环境引入编译后的文件即可 <script src="/public/static/js/WebSocket.js">
mix.js('assets/js/WebSocket.js', 'public/static/js/WebSocket.js')
	.js('src/router.js', 'public/pages/js/router.js')
	.less('assets/less/index.less', 'public/static/css/index.css')
