
function navigation(id) {
	const navTabs = document.getElementById(id);
	const navs = navTabs.querySelectorAll('.tab');
	const tabs = navTabs.querySelectorAll('.tab__content');

	navTabs.addEventListener('click', () => {
		if (!(event.target.classList.contains('tab_active'))) {
			let index = Array.from(navs).indexOf(event.target);
			navTabs.querySelector('.tab.tab_active').classList.remove('tab_active');
			navTabs.querySelector('.tab__content.tab__content_active').classList.remove('tab__content_active');
			event.target.classList.add('tab_active')
			tabs[index].classList.add('tab__content_active')
		}
	})
}

navigation('tabs1');