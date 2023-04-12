const elemsMenu = document.querySelectorAll('.menu__link');

document.addEventListener('click', function (target) {
	let link = target.target;
	if (link.classList.contains('menu__link') && link.parentElement.querySelector('.menu.menu_sub')) {
		target.preventDefault();
		document.querySelectorAll('.menu.menu_sub').forEach((item) => { item.classList.remove('menu_active'); })
		link.parentElement.querySelector('.menu.menu_sub').classList.add('menu_active');
	} else {
		document.querySelectorAll('.menu.menu_sub').forEach((item) => { item.classList.remove('menu_active'); })
	}
})


