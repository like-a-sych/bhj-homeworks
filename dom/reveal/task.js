document.addEventListener('DOMContentLoaded', () => {
	const div = document.querySelectorAll('.reveal');
	function isVisible(el) {
		const { top, bottom } = el.getBoundingClientRect();
		if (bottom < 0) {
			return false
		}
		if (top > window.innerHeight) {
			return false
		}
		return true
	}
	document.addEventListener('scroll', (e) => {
		div.forEach(element => {

			if (isVisible(element) === true) {
				element.classList.add('reveal_active')
			} else {
				element.classList.remove('reveal_active')
			}
		})
	})
})