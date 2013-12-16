$(".accordionTabHead").click(function(){
	
	//$(this).toggle('slow');
	
	$(this).next('.accordionTabContent').toggle('slow' , function(){
		if($(this).css('display') == 'block')
			$(this).parent().css('border-bottom' , 'solid 1px #111');
		else
			$(this).parent().css('border-bottom' , 'solid 0px #111');
	});
});


function strech(i , element)
{        	
	setTimeout(function(){
        element.style.width = (150 + i*200) + 'px';
    } , i*1000);
}
function compress(i , element)
{        	
	setTimeout(function(){
        element.style.width = (300 - i*150) + 'px';
    } , i*1000);
}

function strechInput(id , which)
{
	var i;
	var element = document.getElementById(id);
	if(which == 's')
	{
	   	for(i = 0.01 ; i < 1 ; i += 0.01)
    	{
    	    strech(i , element);
    	} 
	}
	if(which == 'c')
	{
	    for(i = 0.01 ; i < 1 ; i += 0.01)
    	{
    	    compress(i , element);
    	} 
	}

}


function tabClicked()
{
    var contentArea = document.getElementById('tabContentArea' + (this.id).substr(3 , this.id.length));
    (document.getElementsByClassName('chosenTab')[0]).setAttribute('class' , 'tab');
    this.setAttribute('class' , 'chosenTab , tab');
	$('.contentAreaChosen').css('display' , 'none');

	(document.getElementsByClassName('contentAreaChosen')[0]).setAttribute('class' , 'contentArea');
	
    contentArea.setAttribute('class' , 'contentArea , contentAreaChosen');   
	$('.contentAreaChosen').fadeIn();
	
}

var html = $('#registerForm').html();
function register(val)
{
	if(val == 'back')
		$('#registerForm').html(html);
	else
	{
		$('#registerForm').html('<div class="waitImg"><img src="./wait.gif"></div>');
		setTimeout(function(){
			$('#registerForm').html('<div class="waitImg">You Are Registerd<br><br><a onclick="register(\'back\')">Go Back</a></div>');
			
		} , 2000);
	}
}


function init()
{
    var tabs = document.getElementsByClassName('tab');
    for(var i = 0 ; i < tabs.length ; i++)
	{
		(tabs[i]).onclick = tabClicked;
	}
	$('.contentAreaChosen').css('display' , 'block');
	
	$('.headerSubSubMenu').mouseleave(function(){
		$(this).fadeOut();
	});
	
	var headerSubMenuList = $('.headerSubMenuList');
	headerSubMenuList.mouseover(function(e){
		var subSubMenu = '#' + 'headerSubSubMenu_' + e.target.id.substr(14 , e.target.id.length);
		$(subSubMenu).fadeIn();
	});
	headerSubMenuList.mouseleave(function(e){
		var subSubMenu = $('#' + 'headerSubSubMenu_' + e.target.id.substr(14 , e.target.id.length));
		var overSubSubMenu = false;
		subSubMenu.mouseover(function(){
			overSubSubMenu = true;
		});
		setTimeout(function(){
			if(!overSubSubMenu)
				subSubMenu.fadeOut();
		}, 300);
		
	});
	
	
	var topRightMenuDataBox = $('.topRightMenuDataBox');
	var topSideMessageWrapper = $('.topSideMessageWrapper');
	if(topSideMessageWrapper.length > 0)
	{
		if(topSideMessageWrapper.length == 1)
			topRightMenuDataBox.css('margin-top' , '-170px');
		else
			topRightMenuDataBox.css('margin-top' , -(170 + (topSideMessageWrapper.length-1)*115) + 'px');
	}
	else
		topRightMenuDataBox.css('margin-top' , '-88px');
	
	$('.topRightIcon').click(function(e){
		$('.topRightMenuDataBox').fadeOut();
		var data = '#' + e.target.id + 'Data';
		data = $(data);
		if(data.css('display') == 'block')
			data.fadeOut();
		else	
			data.fadeIn();
			
		$(document).click(function(e){
			if($(e.target).attr('class') != 'topRightIconImg')
			$('.topRightMenuDataBox').fadeOut();	
		});	
	});
	
	$('.topMessageClose').click(function(){
		if($(this).closest('.topSideMessageWrapper').attr('class') == 'topSideMessageWrapper , firstTopSideMessageWrapper')
			$(this).closest('.topSideMessageWrapper').next('.topSideMessageWrapper').attr('class' , 'topSideMessageWrapper , firstTopSideMessageWrapper')
		$(this).closest('.topSideMessageWrapper').fadeOut(function(){
			$(this).closest('.topSideMessageWrapper').remove();
			
		});
		
		setTimeout(function(){
			setTimeout(function(){
				var topRightMenuDataBox = $('.topRightMenuDataBox');
				var topSideMessageWrapper = $('.topSideMessageWrapper');
				if(topSideMessageWrapper.length > 0)
				{
					if(topSideMessageWrapper.length == 1)
						topRightMenuDataBox.css('margin-top' , '-170px');
					else
						topRightMenuDataBox.css('margin-top' , -(170 + (topSideMessageWrapper.length-1)*115) + 'px');
				}
				else
					topRightMenuDataBox.css('margin-top' , '-88px');
					
			} , 200);
			
		} , 300)
	});
	
	
	$('.editInfoBtn').click(function(){
		var editInfoBtn = $(this);
		$(this).parent().parent().parent().parent('.editInfoHeader').next('.editInfoContent').toggle('slow' , function(){
			if(editInfoBtn.text() == 'EDIT')
				editInfoBtn.text('CLOSE'); 
			else
				editInfoBtn.text('EDIT');
		});
	});
	
	$('.topFormClose img').click(function(){
		$('#topFormContainer').fadeOut();
		$('#parentContainer').attr('class' , '');
	});	
	
	
	/*
		top form close icon
	*/
	$('.topMessageClose').click(function(){	
		$(this).closest('.topFormMessageWrapper').next('.topFormMessageWrapper').attr('class' , 'topFormMessageWrapper')
		$(this).closest('.topFormMessageWrapper').fadeOut(function(){
			$(this).closest('.topFormMessageWrapper').remove();
		});
	});
	/*******/
	
	
	/*
		show overlay form
	*/
	$('.showOverLayFrom').click(function(){	
		$('#topFormContainer').fadeIn();
		$('#parentContainer').attr('class' , 'parentContainerDisable');
	});
	/*******/
	
	/*
		accordionInfoTable
	*/
	$('.accordionInfoTableExpand').click(function(){	
		var accordionInfoTableContent = $(this).parent().next('tr').children('.accordionInfoTableContent');
		var THIS = $(this);
		if(accordionInfoTableContent.css('display') == 'none'){
			accordionInfoTableContent.fadeIn();
			THIS.html('-');
			THIS.css('font-size' , '60px');
		}
		else{
			accordionInfoTableContent.fadeOut();
			THIS.html('+');
			THIS.css('font-size' , '42px');
		}
	});
	/*******/
}
document.onload = init();





