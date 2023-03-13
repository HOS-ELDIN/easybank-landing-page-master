let nav = document.querySelectorAll("nav ul a");
let burger = document.getElementById("burger");
let closeMenu = document.getElementById("close");
let navMenu = document.querySelector("nav")

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
	navMenu.classList.remove("hidden")
};
closeMenu.onclick = () => {
	burger.classList.toggle("hidden");
	closeMenu.classList.toggle("hidden");
	navMenu.classList.add("hidden")
};

nav.forEach((a) => {
	a.addEventListener("click", () => {
		closeMenu.classList.add("hidden");
		if (navMenu.classList.contains("hidden") == false) {
			burger.classList.remove("hidden")
			navMenu.classList.add("hidden")
		}
	});
});