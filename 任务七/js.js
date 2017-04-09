// JavaScript Document
;(function(){
	var scoreFun=function(score){
		var _this_=this;//保存this
		_this_.score={//设置默认值小明，小红，小亮的成绩默认为null,表格的行数，表格的列数为null
			xm:null,
			xh:null,
			xl:null,
			rowss:null,//行数
			rc:null,//列数
			scoreUp:null,
			scoreDown:null
			}
		//扩展
		if(score && typeof score==="object"){
			_this_=extendScore(_this_.score,score);
			}
		function extendScore(score,prescore){//第一个参数：默认值，第二个参数：实例中设置的
			var pre;
			for(pre in prescore){
				if(prescore.hasOwnProperty(pre)){//如果存在实例
					score[pre]=prescore[pre];//将实例中的数赋值给默认值
					console.log(score[pre]);
					}
			
			   }
			   return score;
			}
			
		this.creat();//渲染
		
		}
	scoreFun.prototype={
		 creat:function(){
			 var _this_=this,
			      score=this.score;
				  console.log(score);
			 if(score.rowss&&score.rc&&score.scoreUp){
				 this.ups(score.rowss,score.rc);
				 }
			 if(score.rowss&&score.rc&&score.scoreDown){
				 this.down(score.rowss,score.rc);
				 }
			 },
	     ups:function(rowss,rc){
			 for(var i=0;i<rowss.length;i++){//冒泡排序
				 for(var j=1;j<rowss.length-i-1;j++){
					 if(rowss[j].cells[rc].innerHTML>rowss[j+1].cells[rc].innerHTML){//判断每列中的数字从改变每行中的值
						 var temp=rowss[j].innerHTML;
						 rowss[j].innerHTML=rowss[j+1].innerHTML;
						 rowss[j+1].innerHTML=temp;
						 }//if
					 }//for(j)
				 
				 }//for(i)
				 return rowss//将数组return出去
			 },//up函数
			 
		down:function(rowss,rc){
			 for(var i=0;i<rowss.length;i++){//冒泡排序
				 for(var j=0;j<rowss.length-i-1;j++){
					 if(rowss[j].cells[rc].innerHTML<rowss[j+1].cells[rc].innerHTML){//判断每列中的数字从改变每行中的值
						 var temp=rowss[j].innerHTML;
						 rowss[j].innerHTML=rowss[j+1].innerHTML;
						 rowss[j+1].innerHTML=temp;
						 }//if
					 }//for(j)
				 
				 }//for(i)
				 return rowss//将数组return出去
			 }//up函数
		
		}//原型方法函数
	
	window.scoreFun=scoreFun;
	scorefun=function(score){
		return new scoreFun(score);
		}
	})()