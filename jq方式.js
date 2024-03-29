$(window).on('load',function(){
	waterfall();
	var dataInt={'data':[{"src":'1.png'},{"src":'2.png'},{"src":'3.png'},{"src":'5.png'},{"src":'6.png'},{"src":'8.png'},{"src":'9.png'},{"src":'4.png'},{"src":'10.png'},{"src":'11.png'},{"src":'12.png'},{"src":'4.png'},{"src":'13.png'},{"src":'14.png'},{"src":'15.png'}]}
	$(window).on('scroll',function(){
		if(checkScrollSlide){
			$.each(dataInt.data,function(key,value) {
				var oBox=$('<div>').addClass('box').appendTo($('#main'));
				var oPic=$('<div>').addClass('pic').appendTo($(oBox));
				var oImg=$('<img>').attr('src','image/'+$(value).attr('src')).appendTo($(oPic));
				
			});
			waterfall();
		}
	})
})
function waterfall(){
	var $boxs=$('#main>div');
	var w=$boxs.eq(0).outerWidth();
	var cols=Math.floor($(window).width()/w);
	$('#main').width(w*cols).css('margin','0 auto');
	var hArr=[];
	$boxs.each(function(index,value){
		var h=$boxs.eq(index).outerHeight();
		if(index<cols){
			hArr[index]=h;
		}else{
			var minH=Math.min.apply(null,hArr);
			var minHIndex=$.inArray(minH,hArr);
			$(value).css({
				'position':'absolute',
				'top':minH+'px',
				'left':minHIndex*w+'px'
			})
			hArr[minHIndex]+=$boxs.eq(index).outerHeight();
		}
	})
}
function checkScrollSlide(){
	var $lastBox=$('#main>div').last();
	var lastBoxDis=$lastBox.offset().top+Math.floor($lastBox.outerHeight()/2);
	var scrollTop=$(window).scrollTop();
	var documentH=$(window).height();
	return (lastBoxDis<scrollTop+documentH)?true:false;
}
