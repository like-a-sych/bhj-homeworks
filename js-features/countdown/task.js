const initialValue = document.getElementById("timer");
let timer = initialValue.innerHTML;

function getWinner() {
	const date = new Date(timer * 1000).toISOString().substr(11, 8);
	if (timer <= 0) {
		timer = 10;
		return alert(`Вы победили в конкурсе!`);

	} else {
		timer -= 1;
		initialValue.innerHTML = date;
	}
}

setInterval(getWinner, 1000);