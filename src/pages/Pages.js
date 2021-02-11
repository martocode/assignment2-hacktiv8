import React, { Component, createRef } from "react";
import { Route, HashRouter } from "react-router-dom";
import { Row, Container, Col } from "reactstrap";
import { HashLink as Link } from "react-router-hash-link";
import Sidebar from "../Components/Sidebar/Sidebar";
import AboutMe from "./AboutMe/AboutMe";
import Experience from "./Experience/Experience";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";
import Interests from "./Interests/Interest";
import Awards from "./Awards/Awards";
import { render } from "@testing-library/react";

class Pages extends Component {
	constructor(props) {
		super(props);
		let lists = [
			"aboutMe",
			"experience",
			"education",
			"skills",
			"interests",
			"awards",
		];
		console.log(this.props._id, "asd");
	}
	// console.log(AboutMe, Experience.current, 'ff')
	scrollTo = () => {
		let currentWin = this.props.location.hash;
		const hasAnchor = currentWin.includes("#");
		if (hasAnchor) {
			const goTo = document.querySelector(currentWin);
			console.log(goTo, "www");
			if (goTo) {
				goTo.scrollIntoView({ behavior: "smooth" }); // Doesn't work with instant
			}
		}
		// this.awards.current.scrollIntoView({ behavior: "auto" });
	};

	componentDidMount() {
		//Got Problem
		if (this.scrollTo) {
			this.scrollTo();
		}
	}
	render() {
		return (
			// This is the div you want to scroll to
			<>
				<div className="main">
					<Sidebar />
					<div className="pages">
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
}

export default Pages;
