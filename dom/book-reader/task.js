document.addEventListener('DOMContentLoaded', () => {
	const fontList = document.querySelectorAll('.font-size');
	const bookArea = document.getElementById('book');
	fontList.forEach(element => {
		element.addEventListener('click', (event) => {
			event.preventDefault()
			document.querySelector('.font-size_active').classList.remove('font-size_active')
			element.classList.add('font-size_active');
			if (element.dataset.size) {
				if (element.dataset.size === 'small') {
					bookArea.classList.add('book_fs-small');
				}
				if (element.dataset.size == 'big') {
					bookArea.classList.add('book_fs-big');
				}
			} else {
				bookArea.classList.remove('book_fs-small');
				bookArea.classList.remove('book_fs-big');
			}
		})
	})
})