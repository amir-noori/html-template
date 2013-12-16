$('.mainTopNav td').mouseover(function(){
	$(this).children('.mainTopNavInfo').css('display' , 'block');
	$(this).children('.mainTopNavInfo').css('opacity' , '1');
	
	$(this).mouseout(function(){
		$(this).children('.mainTopNavInfo').css('display' , 'none');
	});
});

$('.headerMenuItem').mouseover(function(){
	$(this).children('ul').css('display' , 'block');
	$(this).children('ul').css('z-index' , '20');
	$(this).mouseout(function(){
		$(this).children('ul').css('display' , 'none');
	});
});



function init(){
	var headerMenuItem = document.getElementsByClassName('headerMenuItem');
	for(var i = 0 ; i < headerMenuItem.length ; i++)
	{
		try{
			var ul = (headerMenuItem[i]).getElementsByTagName('ul')[0];
			ul.style.width = (headerMenuItem[i]).offsetWidth + 'px';
			ul.style.marginLeft = '-20px';
			
		}
		catch(e)
		{}
	}
	
	//chat
	
	$('.minimizeChat').click(function(){
		if($(this).parent().parent().parent().parent().parent().css('height') == '400px'){
			$(this).parent().parent().parent().parent().parent().css('height' , '25px');

			$(this).html('+');
			$(this).css('font-size' , '50px');
			$(this).parent().parent().parent().css('margin-top' , '0px');
		}
		else{
			$(this).parent().parent().parent().parent().parent().css('height' , '400px');
			$(this).parent().parent().parent().parent().parent().css('margin-top' , '00px');

			$(this).html('-');
			$(this).css('font-size' , '100px');
			$(this).parent().parent().parent().css('margin-top' , '-40px');
		}
	});
	
	//chat end

}


document.onload = init();