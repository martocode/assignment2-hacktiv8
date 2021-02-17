export const scrollTo = (props) => {
	// console.log("props", props);
	let currentWin = props.location.hash;
	const hasAnchor = currentWin.includes("#");
	// const offset = window.pageYOffset;
	if (hasAnchor) {
		const goTo = document.querySelector(currentWin);
		// console.log(currentWin, "www");
		if (goTo) {
			goTo.scrollIntoView({ behavior: "instant" }); // Doesn't work with instant
		}
	}
};
