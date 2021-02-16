import React, { Component, createRef, useState } from "react";
import { Row, Container, Col } from "reactstrap";
import Sidebar from "../Components/Sidebar/Sidebar";
import AboutMe from "./AboutMe/AboutMe";
import Experience from "./Experience/Experience";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";
import Interests from "./Interests/Interest";
import Awards from "./Awards/Awards";

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
		}
	};

	componentDidMount() {
		demoAsyncCall()
			.then(() => {
				// console.log("pp");
				this.setState({ loading: false });
			})

			.then(() => {
				setTimeout(this.scrollTo(), 100);
			});
	}

	render() {
		let { loading } = this.state;
		if (loading) {
			return <div className="loading"></div>;
		}
		return (
			// This is the div you want to scroll to
			<>
				<div
					className="main"
					onMouseMove={
						this.handleMouseMove
						// (event) => {this.setState({ x: event.pageX, y: event.pageY });}
					}
				>
					<Sidebar />
					<Row className="pages">
						{this.devTool}
						<AboutMe ref={this.aboutMe} />
						<Experience ref={this.experience} />
						<Education ref={this.education} />
						<Skills ref={this.skills} />
						<Interests ref={this.interests} />
						<Awards ref={this.awards} />
						{/* <div>{this.Test}</div> */}
					</Row>
				</div>
			</>
		);
	}
}

export default Pages;
