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

function init()
{
    var tabs = document.getElementsByClassName('tab');
    for(var i = 0 ; i < tabs.length ; i++)
	{
		(tabs[i]).onclick = tabClicked;
	}
	$('.contentAreaChosen').css('display' , 'block');
}
document.onload = init();