let nav = document.querySelectorAll("nav ul a");
let burger = document.getElementById("burger");
let closeMenu = document.getElementById("close");

nav.forEach((a) => {
	a.addEventListener("click", () => {
		nav.forEach((link) => {
			link.classList.remove("active");
		});
		a.classList.add("active");
	});
});

burger.onclick = () => {
	burger.classList.toggle("hidden");
	closeMenu.classList.toggle("hidden");
};
closeMenu.onclick = () => {
	burger.classList.toggle("hidden");
	closeMenu.classList.toggle("hidden");
};
