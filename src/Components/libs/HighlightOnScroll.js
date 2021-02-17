export const HighlightOnScroll = () => {
	// useEffect(() => {
	const pages = document.querySelectorAll(".page");
	const navs = document.querySelectorAll(".nav");
	// const element = window.location.hash;
	let current, key;
	// console.log(navs);
	if (pages) {
		[...pages].forEach((section, k) => {
			if (window.pageYOffset >= section.offsetTop) {
				current = section.id;
				key = k;
			}
		});
		navs.forEach((nav, y) => {
			if (nav.classList.contains(current) && y === key) {
				// console.log("navs[key]", navs, "current", current);
				nav.classList.add("active");
			} else if (y !== key) {
				nav.classList.remove("active");
			}
		});
	}
};
