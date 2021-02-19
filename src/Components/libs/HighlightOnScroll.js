import { forwardRef } from "react";

export const HighlightOnScroll = (pagesRef, navsRef) => {
	let pages, navs;
	if (!pagesRef && !navsRef) {
		pages = [...pagesRef.current.children];
		navs = [...navsRef.current.children];
	}
	// console.log("pages", pagesRef, "navs", navsRef, "HighlightOnScroll");
	// useEffect(() => {
	// const pages = document.querySelectorAll(".page");
	// const navs = document.querySelectorAll(".nav");
	// const element = window.location.hash;
	let key;
	// console.log(navs);
	// IntersectionObserver();
	/* const current =
		pages &&
		[...pages]
			.filter((section) => window.pageYOffset >= section.offsetTop)
			.slice(-1); */
	// if (current !== undefined) console.log(current);
	// if(navs[])
	/* navs.forEach((nav, y) => {
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
				console.log("navs[key]", key, "current", current);
				navs.forEach((nav, y) => {
					if (nav.classList.contains(current) && y === key) {
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
