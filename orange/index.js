

function init(){
	$('.leftSideMenu').click(function(){
		$(this).next('.leftSideMenuContent').toggle('slow');
	});
}

document.onload = init();