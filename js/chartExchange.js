$(document).ready(function(){
	$("#bing").click(function(){
		$("#circle").show();
		$("#circle1").hide();
		})
		$("#huan").click(function(){
		$("#circle").hide();
		$("#circle1").show();
		})	;

	$("#lines").click(function(){
		$("#line").show();
		$("#bar").hide();
		})
		$("#bars").click(function(){
		$("#line").hide();
		$("#bar").show();
		});
		});
		


window.onresize = function() {
	location.reload()
    }
var aqiData = [
	[15, 32, 56, 200, 2, 11, 30, 500, 225, 223, 50, 21, 48, 45, 56, 112, 452, 458, 55, 4, 11, 222, 10, 22, 23, 54, 288, 100, 150, 35, 254],
	[22, 23, 444, 120, 220, 122, 225, 188, 25, 2, 20, 100, 208, 20, 10, 200, 345, 108, 55, 204, 115, 520, 10, 220, 123, 104, 288, 155, 225, 225, 144],
	[105, 157, 147, 157, 154, 208, 63, 131, 323, 304, 432, 186, 452, 375, 355, 353, 78, 96, 34, 53, 55, 37, 263, 178, 64, 52, 200, 67, 264, 56, 123],
	[415, 157, 17, 157, 154, 208, 263, 131, 323, 304, 332, 286, 452, 375, 355, 353, 278, 296, 134, 253, 355, 137, 263, 178, 64, 52, 200, 267, 224, 256, 123],
	[115, 115, 147, 111, 154, 208, 116, 131, 133, 304, 132, 186, 452, 375, 355, 353, 278, 296, 234, 253, 255, 237, 263, 178, 64, 52, 200, 117, 64, 56, 23],
	[410, 157, 117, 57, 14, 208, 63, 11, 23, 434, 232, 38, 442, 175, 355, 353, 83, 196, 14, 353, 355, 327, 363, 178, 64, 52, 200, 267, 264, 26, 223],
	[22, 2, 444, 120, 220, 122, 225, 88, 5, 2, 20, 100, 208, 20, 10, 20, 345, 108, 55, 204, 115, 520, 10, 220, 123, 104, 28, 155, 25, 225, 14],
	[105, 157, 17, 157, 154, 208, 63, 131, 323, 304, 332, 86, 452, 375, 35, 353, 78, 96, 34, 53, 55, 37, 63, 178, 64, 52, 100, 67, 264, 56, 23],
	[415, 157, 17, 157, 154, 208, 23, 131, 323, 304, 332, 286, 45, 375, 355, 353, 278, 296, 34, 53, 55, 37, 263, 178, 64, 52, 200, 267, 24, 256, 123],
	[15, 15, 147, 1, 154, 208, 6, 11, 33, 304, 32, 86, 352, 375, 55, 353, 78, 96, 34, 53, 55, 3, 263, 178, 64, 52, 200, 7, 264, 56, 123],
	[410, 157, 117, 157, 14, 208, 163, 111, 323, 434, 332, 38, 42, 175, 355, 353, 13, 196, 134, 253, 155, 327, 23, 178, 64, 52, 200, 26, 264, 226, 223],
	[110, 357, 317, 157, 224, 208, 263, 211, 323, 434, 332, 138, 242, 2175, 355, 353, 213, 196, 134, 453, 455, 427, 23, 478, 464, 452, 400, 446, 464, 426, 423],				
];
var aqiBad=0;
var aqiMedium=0;
var aqiGood=0;
for (j = 0; j < 12; j++) {
	for (i = 0, l = aqiData[j].length; i < l; i++) {
		aqi=aqiData[j][i];
		if(aqi<200){
			aqiGood++;
		}else{
			if(aqi<300){
				aqiMedium++;
			}else{
				aqiBad++;
			}
		}	
	}
}//获得各项天气的总天数
/*var sum=new Array();
var avg=new Array();
for(j=0;j<12;j++){
   for(i=0;i<30;i++){
	sum[j]+=aqiData[j][i];	  
   }
   avg[j]=sum[j]/30;
}*///平均数和总数获取失败
var color=["#5fd5f3","#ffb981","#b6a2de"];
var data=[aqiGood,aqiMedium,aqiBad];
var annotation=["AQI<200","200<AQI<300","AQI>300","AQI<200","AQI>200"]
function drawCircle(){//开始画饼图
	var canvas = document.getElementById("circle");  
    var ctx = canvas.getContext("2d");  
    var startPoint = 1.5 * Math.PI;
    for(i=0;i<data.length;i++){
    	ctx.fillStyle = color[i];  
        ctx.strokeStyle = color[i];  
        ctx.beginPath();  
        ctx.moveTo(200,100);  
        ctx.arc(200,100,100,startPoint,startPoint-Math.PI*2*(data[i]/360),true);   
        ctx.stroke();  
        startPoint -= Math.PI*2*(data[i]/360);//大饼图完成
        ctx.moveTo(30,210+30*i); //下面的小圆及其注释 
        ctx.arc(30,210+30*i,10,startPoint,startPoint-Math.PI*2,true);  
        ctx.fill(); 
        ctx.font="16px 微软雅黑";
        ctx.fillStyle="black";
        ctx.fillText(annotation[i],50,220+30*i);
        ctx.fillText(data[i]+"天",200,220+30*i );//计算总天数
        ctx.fillText("占比"+Math.round(data[i] / 365 * 100).toFixed(0)+"%",280,220+30*i); //计算百分比 
    }   
}
drawCircle();
var colort=["#5fd5f3","#ededed","#ededed","coral"]
//开始画环形图
function drawAnnular(){//先画一个饼图，与上面方法一样
	var canvas = document.getElementById("circle1");  
    var ctx = canvas.getContext("2d");  
    var startPoint = 1.5 * Math.PI;
    for(i=0;i<2;i++){//左边的小环
    	ctx.fillStyle = colort[i];  
        ctx.strokeStyle = colort[i];  
        ctx.beginPath();  
        ctx.moveTo(100,100);  
        ctx.arc(100,100,60,startPoint,startPoint-Math.PI*2*(data[0]/360),true);   
        ctx.stroke();  
        startPoint -= Math.PI*2*(data[0]/360);
        ctx.moveTo(30,210+40*i);  
        ctx.arc(30,210+40*i,10,startPoint,startPoint-Math.PI*2,true);  
        ctx.fill();
        ctx.font="16px 微软雅黑";
        ctx.fillStyle="black";
        ctx.fillText(annotation[3],50,220);
        ctx.fillText(data[1]+data[2]+"天",200,220);
        ctx.fillText("占比"+Math.round((data[1]+data[2]) / 365 * 100).toFixed(0)+"%",280,220);
        
    }
    for(i=0;i<2;i++){//右边的小环
    	ctx.fillStyle = colort[i+2];  
        ctx.strokeStyle = colort[i+2];  
        ctx.beginPath();  
        ctx.moveTo(300,100);  
        ctx.arc(300,100,60,startPoint,startPoint-Math.PI*2*(data[0]/360),true);   
        ctx.stroke();  
        startPoint += Math.PI*2*(data[0]/360);
        ctx.moveTo(30,250);  
        ctx.arc(30,250,10,startPoint,startPoint-Math.PI*2,true);  
        ctx.fill();
        ctx.font="16px 微软雅黑";
        ctx.fillStyle="black";
        ctx.fillText(annotation[4],50,260);
        ctx.fillText(data[0]+"天",200,260);
        ctx.fillText("占比"+Math.round(data[0] / 365 * 100).toFixed(0)+"%",280,260);
        
    }
    //在两个小饼图中间再画两个白色的小饼图，形成环
        ctx.fillStyle = "#FFFFFF";  
        ctx.strokeStyle = "#FFFFFF";  
        ctx.beginPath();  
        ctx.moveTo(100,100);
        ctx.arc(100,100,40,startPoint,startPoint-Math.PI*2,true);
        ctx.moveTo(300,100)
        ctx.arc(300,100,40,startPoint,startPoint-Math.PI*2,true);
        ctx.fill();
        ctx.font="26px 微软雅黑";
        ctx.fillStyle="#CCCCCC";
        ctx.fillText(Math.round(data[0] / 365 * 100).toFixed(0)+"%",274,110);
        ctx.fillText(Math.round((data[1]+data[2]) / 365 * 100).toFixed(0)+"%",74,110)
}
drawAnnular();
var month = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"];
//折线图画布中的虚线
function FORM(){
	    var wire=document.getElementById("line");
		var cxt=wire.getContext("2d");
		//横方向的虚线
  for(j=20;j<260;j=j+40){ 
	for(i=10;i<360;i=i+20){
		cxt.moveTo(10+i,10+j);
		cxt.lineTo(20+i,10+j);
		cxt.strokeStyle="#CCCCCC"
		cxt.stroke();
	}
  }
  for(j=10;j<360;j=j+30){ 
	for(i=10;i<260;i=i+20){
		cxt.moveTo(15+j,10+i);
		cxt.lineTo(15+j,20+i);
		cxt.strokeStyle="#CCCCCC"
		cxt.stroke();
	}
  }
      //  纵方向的虚线
  for(i=0;i<12;i++){
  	    cxt.font="14px 微软雅黑";
        cxt.fillStyle="#666666";
        cxt.fillText(month[i],20+i*30,290);
        cxt.fillText(100,0,200);
        cxt.fillText(200,0,120);
        cxt.fillText(300,0,40);
        cxt.fillText("AQI(空气质量)",0,20)
        
  }
        cxt.moveTo(10,270);
		cxt.lineTo(380,270);
		cxt.strokeStyle="#CCCCCC"
		cxt.stroke();
}
FORM();
var avg=[56,200,126,245,156,89,188,256,216,169,154,68];//由于平均数未能计算出来，故暂时用此组数代替
//开始画折线图
function Line(){
	var wire=document.getElementById("line");
	var cxt=wire.getContext("2d");
	for(i=0;i<12;i++){
		cxt.moveTo(26+i*30,280-avg[i]);
		cxt.lineTo(26+(i+1)*30,280-avg[i+1]);
		cxt.stroke();
	}
}
Line()
//条形图画布中的虚线
function FORM1(){
	    var wire=document.getElementById("bar");
		var cxt=wire.getContext("2d");
  for(j=20;j<260;j=j+40){ 
	for(i=10;i<360;i=i+20){
		cxt.moveTo(10+i,10+j);
		cxt.lineTo(20+i,10+j);
		cxt.strokeStyle="#CCCCCC"
		cxt.stroke();
	}
  }
  for(j=10;j<360;j=j+30){ 
	for(i=10;i<260;i=i+20){
		cxt.moveTo(15+j,10+i);
		cxt.lineTo(15+j,20+i);
		cxt.strokeStyle="#CCCCCC"
		cxt.stroke();
	}
  }
  for(i=0;i<12;i++){
  	    cxt.font="14px 微软雅黑";
        cxt.fillStyle="#666666";
        cxt.fillText(month[i],20+i*30,290);
        cxt.fillText(100,0,200);
        cxt.fillText(200,0,120);
        cxt.fillText(300,0,40);
        cxt.fillText("AQI(空气质量)",0,20)
        
  }
        cxt.moveTo(10,270);
		cxt.lineTo(380,270);
		cxt.strokeStyle="#CCCCCC"
		cxt.stroke();
}
FORM1();
//开始画条形图
function Bar(){
	 var wire=document.getElementById("bar");
	 var cxt=wire.getContext("2d");
	 for(i=0;i<12;i++){
	 	cxt.fillStyle="aquamarine";
	 	cxt.fillRect(26+i*30,270,20,-avg[i])
	 }
}
Bar();
