import { useEffect, useState } from "react";
import { Sidebar } from "../Components/Sidebar/Sidebar";
// import ScrollHighligter from "../Components/libs/HighlightOnScroll";
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
	const [visible] = useState(false);
	const [dev] = useState(true);
	const [pageX, setPageX] = useState(0);
	const [pageY, setPageY] = useState(0);

	const handleMouseMove = (event) => {
		event = event || window.event; // IE-ism

		if (event.pageX == null && event.clientX != null) {
			event.pageX = event.clientX; //+ scroll - client;
			event.pageY = event.clientY; //+ scroll - client;
		}

		// console.log();
		// Use event.pageX / event.pageY here
		setPageX(event.pageX);
		setPageY(event.pageY);
	};

	const devTool = () => {
		if (dev) {
			return (
				<div className="dev" style={{ position: "fixed" }}>
					Client : {pageX}x {pageY}y
				</div>
			);
		}
	};

	useEffect(() => {
		loadPage()
			.then(() => setEndLoading(false))
			.then(() => scrollTo(props))
			.then(() => {
				const navs = document.querySelectorAll(".nav");
				navs.forEach((x) =>
					x.addEventListener("click", scrollTo(props))
				);
			});
	}, [props]);

	if (loading) {
		return <div className="loading"></div>;
	} else {
		return (
			// This is the div you want to scroll to
			<>
				<div
					className="main"
					// onScroll={ScrollHighligter()}
					onMouseMove={
						handleMouseMove
						// (event) => {this.setState({ x: event.pageX, y: event.pageY });}
					}
				>
					<Sidebar />
					<div className="pages">
						{devTool}
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

export default Pages;
