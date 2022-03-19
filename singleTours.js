const high = document.querySelector(".high");
const desc = document.querySelector(".desc");
const gall = document.querySelector(".gall");

const highlight = document.querySelector(".highlights");
const description = document.querySelector(".description");
const gallery = document.querySelector(".gallery");

high.addEventListener("click", (e) => {
	highlight.classList.remove("hidden");
	gallery.classList.add("hidden");
	description.classList.add("hidden");
});
desc.addEventListener("click", (e) => {
	description.classList.remove("hidden");
	highlight.classList.add("hidden");
	gallery.classList.add("hidden");
});
gall.addEventListener("click", (e) => {
	gallery.classList.remove("hidden");
	description.classList.add("hidden");
	highlight.classList.add("hidden");
});
