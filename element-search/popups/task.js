const modal = document.getElementById('modal_main');
const modalSuc = document.getElementById('modal_success');
const btnClose = document.querySelectorAll('.modal__close');

modal.classList.add('modal_active');

btnClose.forEach((btn) => {
	btn.addEventListener('click', function (element) {
		element.target.closest('.modal').classList.remove('modal_active');
	})
})

document.querySelector('.modal__close.show-success').onclick = function () {
	modalSuc.classList.add('modal_active');
	if (modal.classList.contains('modal_active')) {
		modal.classList.remove('modal_active');
	}
}