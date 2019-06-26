window.onload=function(){
	waterfall('main','box');
	var dataInt={'data':[{"src":'16.png'},{"src":'17.png'},{"src":'18.png'},{"src":'1.png'},{"src":'2.png'},{"src":'3.png'},{"src":'4.png'},{"src":'5.png'},{"src":'6.png'},{"src":'7.png'},{"src":'8.png'},{"src":'9.png'},{"src":'10.png'},{"src":'11.png'},{"src":'12.png'}]}
	window.onscroll=function(){
		if(checkScrollSlide){
			var oPrent=document.getElementById('main');
			for(var i=0; i<dataInt.data.length;i++){
				var oBox=document.createElement('div');
				oBox.className='box';
				oPrent.appendChild(oBox);
				var oPic=document.createElement('div');
				oPic.className='pic';
				oBox.appendChild(oPic);
				var oImg=document.createElement('img');
				oImg.src="image/"+dataInt.data[i].src;
				oPic.appendChild(oImg);
			}
			waterfall('main','box');
		}
	}
}

function waterfall(parent,box){
	var  oPrent=document.getElementById(parent);
	var oBoxs=getByClass(oPrent,box);
	var oBoxW=oBoxs[0].offsetWidth;
	var cols=Math.floor(document.documentElement.clientWidth/oBoxW);
	oPrent.style.cssText='width:'+oBoxW*cols+'px;margin:0 auto';
	var hArr=[];
	for(var i=0;i<oBoxs.length;i++){
		if(i<cols){
			hArr.push(oBoxs[i].offsetHeight);
		}else{
			var minH=Math.min.apply(null,hArr);
			var index=getMinhIndex(hArr,minH);
			oBoxs[i].style.position='absolute';
			oBoxs[i].style.top=minH+'px';
			oBoxs[i].style.left=oBoxs[index].offsetLeft+'px';
			hArr[index]+=oBoxs[i].offsetHeight;
			
		} 
	}
	console.log(hArr);
};

function getByClass(parent,clsName){
	var boxArr=new Array(),
	oElements=parent.getElementsByTagName('*');
	for (var i=0;i<oElements.length;i++){
		if(oElements[i].className==clsName){
			boxArr.push(oElements[i]);
		}
	}
	return boxArr;
}

function getMinhIndex(arr,val){
	for(var i in arr){
		if(arr[i]==val){
			return i;
		}
	}
}
function checkScrollSlide(){
	var oParent=document.getElementById('main');
	var oBox=getByClass(oParent,'box');
	var lastBoxH=oBoxs[oBoxs.length-1].offsetTop+Math.floor(oBoxs[oBoxs.length-1].offsetHeight/2);
	var scroolTop=docuemnt.body.scrollTop || document.documentElement.scrollTop;
	var height=document.body.clientHeight || document.documentElement.clientHeight;
	return(lastBoxH<scroolTop+height)?true:false;
}
