/*
啊，你居然找到这里了Σ(ﾟДﾟ)
我这像shit一样的代码，您还是别往下看了罢(｡ŏ﹏ŏ)
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
.
好吧，轻点骂(゜-゜)
*/
//隐藏进度条
/*
window.onload = function (){
	document.getElementById("pgs").style.display = "none";
}
*/
//网络请求
var httpRequest = new XMLHttpRequest();
//第一步：建立所需的对象
httpRequest.open('GET', 'https://v1.hitokoto.cn/', true);
//第二步：打开连接  将请求参数写在url中
httpRequest.send();
//第三步：发送请求  将请求参数写在URL中
/*
*         * 获取数据后的处理程序
*/
httpRequest.onreadystatechange = function (){
	if (httpRequest.readyState == 4 && httpRequest.status == 200){
		var json_all = httpRequest.responseText;
		//获取到json字符串，还需解析
		console.log(json_all);
		var obj = JSON.parse(json_all);
		//打印测试是否正常
		console.log(obj.id);
		console.log(obj.uuid);
		console.log(obj.hitokoto);
		console.log(obj.type);
		console.log(obj.from);
		console.log(obj.from_who);
		var from = obj.from;
		var who = obj.from_who;
		document.getElementById("word").innerHTML = obj.hitokoto;
		if (from == null){
			console.log("唉，tnnd是null(来源)");
		}
		else{
			console.log("唉，tnnd不是null了(来源)");
			document.getElementById("from").innerHTML = "来自：" + obj.from;
		}
		if (who == null){
			console.log("唉，tnnd是null(写者)");
		}
		else{
			console.log("唉，tnnd不是null了(写者)");
			document.getElementById("fromwho").innerHTML = "写者：" + obj.from_who;
		}
		document.getElementById("input").innerHTML = obj.hitokoto + "\n\n" + "来自：" + obj.from + "\n" + "写者：" + obj.from_who;
		document.getElementById("henduodezi").style.display="none";
		document.getElementById("input").style.display="none";
		$(function(){
			var copytext = document.getElementById("input").value;
			console.log(copytext);
			$("#copy").click(function(){
				$.copy({
					content:
					copytext,
					//自定义复制内容，默认'请配置复制内容'
					callback:
					function(){
						//自定义复制成功回调函数，常用于复制成功提示，不配置callback，则不显示
						alert('复制成功(≧▽≦)');
					}
				}
				);
			}
		)}
		);
	}
};

/*
{
	"id":
	7132,	"uuid":
	"3a62e87f-e7d9-4549-9b51-4a8258b275aa",	"hitokoto":
	"苟富贵，毋相忘。",	"type":
	"d",	"from":
	"史记",	"from_who":
	"司马迁",	"creator":
	"伊稚斜",	"creator_uid":
	8593,	"reviewer":
	1,	"commit_from":
	"web",	"created_at":
	"1614222878",	"length":
8}
*/
function reload(){
	//显示进度条，隐藏界面内文本
	//	document.getElementById("words").style.display="none";
	//	document.getElementById("pgs").style.display="inline";
	//网络请求
	var httpRequest = new XMLHttpRequest();
	//第一步：建立所需的对象
	httpRequest.open('GET', 'https://v1.hitokoto.cn/', true);
	//第二步：打开连接  将请求参数写在url中
	httpRequest.send();
	//第三步：发送请求  将请求参数写在URL中
	/*
	*         * 获取数据后的处理程序
	*/
	httpRequest.onreadystatechange = function (){
		if (httpRequest.readyState == 4 && httpRequest.status == 200){
			var json_all = httpRequest.responseText;
			//获取到json字符串，还需解析
			console.log(json_all);
			var obj = JSON.parse(json_all);
			//打印测试是否正常
			console.log(obj.id);
			console.log(obj.uuid);
			console.log(obj.hitokoto);
			console.log(obj.type);
			console.log(obj.from);
			console.log(obj.from_who);
			var from = obj.from;
			var who = obj.from_who;
			document.getElementById("word").innerHTML = obj.hitokoto;
			if (from == null){
				console.log("唉，tnnd是null(来源)");
			}
			else{
				console.log("唉，tnnd不是null了(来源)");
				document.getElementById("from").innerHTML = "来自：" + obj.from;
			}
			if (who == null){
				console.log("唉，tnnd是null(写者)");
			}
			else{
				console.log("唉，tnnd不是null了(写者)");
				document.getElementById("fromwho").innerHTML = "写者：" + obj.from_who;
			}
			document.getElementById("input").innerHTML = obj.hitokoto + "\n\n" + "来自：" + obj.from + "\n" + "写者：" + obj.from_who;
			document.getElementById("henduodezi").style.display="none";
			document.getElementById("input").style.display="none";
		}
	};
	//	document.getElementById("wrods").style.display="inline";
	//	document.getElementById("pgs").style.display="none";
}
