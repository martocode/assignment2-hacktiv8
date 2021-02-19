import { useEffect, useRef, useState } from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import { scrollTo } from "../Components/libs/LoadupScroll";
import { loadPage } from "../Components/libs/PageLoading";
import AboutMe from "./AboutMe/AboutMe";
import Experience from "./Experience/Experience";
import Education from "./Education/Education";
import { Skills } from "./Skills/Skills";
import Interests from "./Interests/Interest";
import Awards from "./Awards/Awards";

const Pages = (props) => {
	const [loading, setEndLoading] = useState(true);
	const pagesRef = useRef();
	const navsRef = useRef();

	useEffect(() => {
		loadPage()
			.then(() => setEndLoading(false))
			.then(() => {
				scrollTo(props);
			})
			.then(() => {
				window.addEventListener("scroll", () => {
					const pages = [...pagesRef.current.children];
					const navs = [...navsRef.current.children[1].children];
					const current =
						pages &&
						[...pages]
							.filter(
								(section) =>
									window.pageYOffset >= section.offsetTop
							)
							.slice(-1);
					const key = pages.indexOf(...current);
					navs.forEach((nav, y) => {
						const active =
							(nav.classList.contains(current) && y === key) ||
							nav;
						active.classList.add("active");
						if (y !== key) {
							nav.classList.remove("active");
						}
					});
					// }
				});
			});
	});

	if (loading) {
		return <div className="loading"></div>;
	} else {
		return (
			// This is the div you want to scroll to
			<>
				<div className="main">
					<Sidebar
						ref={navsRef}
						// onScroll={onScroll}
					/>
					<div className="pages" ref={pagesRef}>
						<AboutMe />
						<Experience />
						<Education />
						<Skills />
						<Interests />
						<Awards />
						{/* <div>{this.Test}</div> */}
					</div>
				</div>
			</>
		);
	}
};

// export default forwardRef((props, ref) => <Pages navsRev={ref} {...props} />);
export default Pages;
