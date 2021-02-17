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

<<<<<<< Updated upstream
function demoAsyncCall() {
	return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}
class Pages extends Component {
	constructor(props) {
		super(props);
		this.aboutMe = createRef();
		this.experience = createRef();
		this.education = createRef();
		this.skills = createRef();
		this.interests = createRef();
		this.awards = createRef();

		this.lists = [
			{ section: "aboutMe", ref: this.aboutMe },
			{ section: "experience", ref: this.experience },
			{ section: "education", ref: this.education },
			{ section: "skills", ref: this.skills },
			{ section: "interests", ref: this.interests },
			{ section: "awards", ref: this.awards },
		];
		// const { x, y, c, v } = this.state;
	}
	state = { loading: true, visible: false, dev: true, x: 0, y: 0 };
	handleMouseMove = (event) => {
		event = event || window.event; // IE-ism

		if (event.pageX == null && event.clientX != null) {
			event.pageX = event.clientX; //+ scroll - client;
			event.pageY = event.clientY; //+ scroll - client;
		}

		// console.log();
		// Use event.pageX / event.pageY here
		this.setState({ x: event.pageX, y: event.pageY });
	};

	devTool = () => {
		const { x, y, dev } = this.state;
		if (dev) {
			return (
				<div className="dev" style={{ position: "fixed" }}>
					Client : {x}x {y}y
				</div>
			);
		}
	};

	scrollTo = () => {
		let currentWin = this.props.location.hash;
		const hasAnchor = currentWin.includes("#");
		// const offset = window.pageYOffset;
		if (hasAnchor) {
			const goTo = document.querySelector(currentWin);
			console.log(currentWin, "www");
			if (goTo) {
				goTo.scrollIntoView({ behavior: "instant" }); // Doesn't work with instant
			}
=======
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
>>>>>>> Stashed changes
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
			.then(() => scrollTo(props));
	}, [props]);

<<<<<<< Updated upstream
	render() {
		let { loading } = this.state;
		if (loading) {
			return <div className="loading"></div>;
		}
=======
	if (loading) {
		return <div className="loading"></div>;
	} else {
>>>>>>> Stashed changes
		return (
			// This is the div you want to scroll to
			<>
				<div
					className="main"
<<<<<<< Updated upstream
					onMouseMove={
						this.handleMouseMove
=======
					// onScroll={ScrollHighligter()}
					onMouseMove={
						handleMouseMove
>>>>>>> Stashed changes
						// (event) => {this.setState({ x: event.pageX, y: event.pageY });}
					}
				>
					<Sidebar />
<<<<<<< Updated upstream
					<Row className="pages">
						{this.devTool}
						<AboutMe ref={this.aboutMe} />
						<Experience ref={this.experience} />
						<Education ref={this.education} />
						<Skills ref={this.skills} />
						<Interests ref={this.interests} />
						<Awards ref={this.awards} />
=======
					<div className="pages">
						{devTool}
						<AboutMe />
						<Experience />
						<Education />
						<Skills />
						<Interests />
						<Awards />
>>>>>>> Stashed changes
						{/* <div>{this.Test}</div> */}
					</Row>
				</div>
			</>
		);
	}
};

export default Pages;
