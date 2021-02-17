export const scroller = (ref) => {
	if (!ref.current) {
		return () => ref.current.scrollIntoView({ behavior: "smooth" });
	} else {
		return () => document.addEventListener({ behavior: "smooth" }, ref);
	}
};
