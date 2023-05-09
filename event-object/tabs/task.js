
function navigation(id) {
	const navTabs = document.getElementById(id);
	const navs = navTabs.querySelectorAll('.tab');
	const tabs = navTabs.querySelectorAll('.tab__content');

	navs.forEach(element => {
		element.addEventListener('click', (event) => {
			navTabs.querySelector('.tab.tab_active').classList.remove('tab_active');
			event.target.classList.add("tab_active");
			tabs.forEach(element => {
				element.classList.remove('tab__content_active');
			})
			tabs[Array.from(navs).indexOf(event.target)].classList.add('tab__content_active');
		})
	})
}

navigation('tabs1');