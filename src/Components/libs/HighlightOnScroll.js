export const HighlightOnScroll = () => {
	// useEffect(() => {
	const pages = document.querySelectorAll(".page");
	const navs = document.querySelectorAll(".nav");
	// const element = window.location.hash;
	let current, key;
	// console.log(navs);
	if (pages) {
		[current, key] = [...pages].map((section, k) => {
			if (window.pageYOffset >= section.offsetTop) {
				return [section.id, k];
			}
		});
		navs.forEach((nav, y) => {
			if (nav.classList.contains(current) && y === key) {
				// console.log("navs[key]", navs, "current", current);
				// new Promise((e) => setTimeout(e(), 1)).then(() =>
				nav.classList.add("active");
				// );
			} else if (y !== key) {
				nav.classList.remove("active");
			}
		});
	}
};
