export const activeItem = (props) => {
	const { scrolls } = props;
	const element = window.location.hash;
	const navIndx = scrolls.current.state.inViewState.indexOf(true);
	const child = document.querySelector(`${element}.page`);
	const divs = [...child.parentNode.children];
	const indx = divs.indexOf(child);
	if (element !== "" && navIndx !== indx) {
		const nav = document.querySelector(".sidebar").childNodes[indx];
		// const switchPage(div);
		nav.className = "nav";
		// ScrollHighligter();
	}
};
