import { forwardRef } from "react";

export const HighlightOnScroll = (pagesRef, navsRef) => {
	const pages = pagesRef;
	const navs = navsRef;
	console.log(`[pages ${pages}]`, `[navs ${navs}]`, "HighlightOnScroll");
	// useEffect(() => {
	// const pages = document.querySelectorAll(".page");
	// const navs = document.querySelectorAll(".nav");
	// const element = window.location.hash;
	let key;
	// console.log(navs);
	// IntersectionObserver();
	/* 	const current =
		pages &&
		[...pages]
			.filter((section) => window.pageYOffset >= section.offsetTop)
			.slice(-1);
	navs.forEach((nav, y) => {
		const active = (nav.classList.contains(current) && y === key) || nav;
		// console.log(active);
		active.classList.add("active");
		if (nav !== active) {
			nav.classList.remove("active");
		}
	}); */
	if (pages) {
		pages.forEach((section, k) => {
			if (window.pageYOffset >= section.offsetTop) {
				const current = section.id;
				key = k;
				navs.forEach((nav, y) => {
					if (nav.classList.contains(current) && y === key) {
						// console.log("navs[key]", key, "current", current);
						// new Promise((e) => setTimeout(e(), 1)).then(() =>
						nav.classList.add("active");
						// );
					} else if (y !== key) {
						nav.classList.remove("active");
					}
				});
			}
		});
	}
};

/* 
export default forwardRef((props, ref) => (
	<HighlightOnScroll pagesRef={ref} navsRef={ref} {...props} />
));
 */
