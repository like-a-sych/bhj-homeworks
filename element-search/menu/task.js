const elemsMenu = document.querySelectorAll('.menu__link');

document.addEventListener('click', function (event) {
	let link = event.target;
	if (link.classList.contains('menu__link') && link.parentElement.querySelector('.menu.menu_sub')) {
		event.preventDefault();
		if (link.parentElement.querySelector('.menu.menu_sub').classList.contains('menu_active')) {
			document.querySelectorAll('.menu.menu_sub').forEach((item) => { item.classList.remove('menu_active'); })
		} else {
			link.parentElement.querySelector('.menu.menu_sub').classList.add('menu_active');
		}
	} else {
		document.querySelectorAll('.menu.menu_sub').forEach((item) => { item.classList.remove('menu_active'); })
	}
})


