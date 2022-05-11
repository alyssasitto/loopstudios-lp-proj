const menuBtn = document.querySelector(".buttons");
const header = document.querySelector("#header");

menuBtn.addEventListener("click", () => {
	header.classList.toggle("active");
});
