const button = document.querySelector(".dropdown__value");
const menuLinks = Array.from(document.querySelectorAll(".dropdown__link"));

function closeDrop() {
	document.querySelector(".dropdown__list").classList.toggle("dropdown__list_active");
}

function changeName(event) {
	closeDrop();
	event.preventDefault();
	let text = event.target.textContent;
	button.textContent = text;
}

button.addEventListener("click", closeDrop);
menuLinks.forEach(item => {
	item.addEventListener("click", changeName);
});