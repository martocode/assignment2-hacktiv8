export const scrollTo = (props) => {
	// console.log("props", props);
	let currentWin = props.location.hash;
	const hasAnchor = currentWin.includes("#");
	const goTo = hasAnchor && document.querySelector(currentWin);
	if (goTo) {
		console.log(goTo);
		goTo.scrollIntoView({ behavior: "instant" }); // Doesn't work with instant
		// const offset = window.pageYOffset;
		// console.log(currentWin, "www");
	}
};
