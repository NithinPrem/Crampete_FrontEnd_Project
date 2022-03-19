const getStartedBtn = document.querySelector(".btnpos");
const popup = document.querySelector(".customPopup");
const close = document.querySelector(".fa-square-xmark ");

getStartedBtn.addEventListener("click", (e) => {
	// console.log(5);
	popup.classList.toggle("hidden");
});

close.addEventListener("click", (e) => {
	popup.classList.toggle("hidden");
});
