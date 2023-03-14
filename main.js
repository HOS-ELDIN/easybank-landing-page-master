let nav = document.querySelectorAll("nav ul a");
let burger = document.getElementById("burger");
let closeMenu = document.getElementById("close");
let navMenu = document.querySelector("nav");
let navBg = document.querySelector(".nav-bg");

// add active state
nav.forEach((a) => {
	a.addEventListener("click", () => {
		nav.forEach((link) => {
			link.classList.remove("active");
		});
		a.classList.add("active");
	});
});

//burger icon clicking
burger.onclick = () => {
	burger.classList.add("hidden");
	closeMenu.classList.remove("hidden");
	navMenu.classList.remove("hidden");
	navBg.classList.remove("hidden");
};

//close icon clicking
closeMenu.onclick = () => {
	burger.classList.remove("hidden");
	closeMenu.classList.add("hidden");
	navMenu.classList.add("hidden");
	navBg.classList.add("hidden");
};

// close nav menu if a link clicked
nav.forEach((a) => {
	a.addEventListener("click", () => {
		closeMenu.click();
	});
});

// close nav menu if clicked out side nav
navBg.onclick = () => {
	closeMenu.click();
};
