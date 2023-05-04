document.addEventListener('DOMContentLoaded', () => {
	const rotate = document.querySelectorAll('.rotator');
	let delay = 0;
	function rotator(el) {
		el.forEach(element => {
			const rotateText = Array.from(element.querySelectorAll(".rotator__case"));
			let item = rotateText.find(item => item.classList.contains("rotator__case_active"));
			let index = rotateText.indexOf(item);
			item.classList.remove("rotator__case_active");
			let nextEl = rotateText[index].nextElementSibling;

			if (index < rotateText.length - 1) {
				nextEl.classList.add("rotator__case_active");
				nextEl.style.color = nextEl.dataset.color;
				delay = nextEl.dataset.speed;
			} else {
				rotateText[0].classList.add("rotator__case_active");
				rotateText[0].style.color = rotateText[0].dataset.color;
				delay = rotateText[0].dataset.speed;
			}
		});
		setTimeout(rotator, delay, rotate);
	}

	setTimeout(rotator, delay, rotate);
});