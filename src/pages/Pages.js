import { forwardRef, useEffect, useRef, useState } from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
// import { HighlightOnScroll } from "../Components/libs/HighlightOnScroll";
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
	const pages = useRef();
	const [navs, setNavs] = useState();

	useEffect(() => {
		loadPage()
			.then(() => setEndLoading(false))
			.then(() => {
				scrollTo(props);
				console.log(props);
			});
		// .then(() => window.addEventListener("scroll", HighlightOnScroll));
	}, [props]);

	if (loading) {
		return <div className="loading"></div>;
	} else {
		return (
			// This is the div you want to scroll to
			<>
				<div
					className="main"
					// onScroll={HighlightOnScroll()}
				>
					<Sidebar getNavs={(ref) => setNavs(ref)} />
					<div className="pages" ref={pages}>
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

export default forwardRef((props, ref) => <Pages navsRev={ref} {...props} />);
// export default Pages;
