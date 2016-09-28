//stackoverflow的代码背景色黑色每次都不方便看，于是改成白色
//补充：因为原样式中有设置!important，优先级最高，如果简单的设置style.backgroundColor是不会起作用的
//而且!important写在那里面是不起作用的，所以需要使用setAttribute的方法
var a = document.getElementsByClassName("ch-inject");[].forEach.call(a,function(ele){ele.getElementsByTagName("code")[0].setAttribute("style","background-color:#fff !important")});
//json-server启动命令
json-server --watch xxx.json --port 9090
//webpack-dev-server解决跨域测试ajax的问题
devServer: {
	proxy: {
		'/gm/api/*': {
			target: 'http://localhost:9090',
			secure: false
		}
	}
}