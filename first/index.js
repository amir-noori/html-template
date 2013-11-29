

function showSubMenu()
{
    document.getElementById(this.id + 'SubMenu').style.display = 'block';
}

function hideSubMenu()
{
	document.getElementById(this.id + 'SubMenu').style.display = 'none';
}

function init()
{
    var tabs = document.getElementsByClassName('headerMenu');
    for(var i = 0 ; i < tabs.length ; i++)
	{
		(tabs[i]).onmouseover = showSubMenu;
		(tabs[i]).onmouseleave = hideSubMenu;
	}
}
document.onload = init();