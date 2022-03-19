const tourlist = document.querySelectorAll(".tourlistCard");
const changeClass = document.querySelectorAll(".txt-here");
const changeClass2 =
	document.querySelectorAll(".disappHere");
const contentHide =
	document.querySelectorAll(".contentHide");
const contentHide2 =
	document.querySelectorAll(".contentHide2");
const tourInfo = document.querySelectorAll(".tourInfo");

tourlist.forEach((item) => {
	item.addEventListener("click", (e) => {
		contentHide.forEach((elem) => {});

		const val = item.getAttribute("data-tourlist");

		const tourguide = document.querySelector(
			`[data-tourlist="${val}"] .contentHide-${val},`
		);
		tourguide.classList.toggle("contentHide");
		// tourguide.classList.toggle("contentHide2");
		// tourguide.classList.toggle("tourInfo");
		// tourguide.classList.toggle("textcrd");
		// tourguide.classList.toggle("disappear");

		// contentHide2.forEach((e) => {
		// 	this.classList.toggle("contentHide2");
		// });

		// tourInfo.forEach((e) => {
		// 	this.classList.toggle("tourInfo");
		// });

		// changeClass.forEach((e) => {
		// 	this.classList.toggle("textcrd");
		// });

		// changeClass2.forEach((e) => {
		// 	this.classList.toggle("disappear");
		// });

		// const target = e.target;
		// if (target.matches(".tourlistCard")) {

		// }
		// e.stopPropagation();
	});
});

// document.addEventListener("click", (e) => {
// 	const target = e.target;

// 	if (target.matches(".tourlistCard")) {
// 		contentHide.forEach((e) => {
// 			e.classList.toggle("contentHide");
// 		});
// 		contentHide2.forEach((e) => {
// 			e.classList.toggle("contentHide2");
// 		});

// 		tourInfo.forEach((e) => {
// 			e.classList.toggle("tourInfo");
// 		});

// 		changeClass.forEach((e) => {
// 			e.classList.toggle("textcrd");
// 		});

// 		changeClass2.forEach((e) => {
// 			e.classList.toggle("disappear");
// 		});
// 	}
// });
