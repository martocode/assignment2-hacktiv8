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
		// console.log(this.interests, "123");
	}
	state = { loading: true, visible: false, x: 0, y: 0, c: 0, v: 0 };
	// console.log(AboutMe, Experience.current, 'ff')
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
		const { x, y, c, v } = this.state;
		return (
			// This is the div you want to scroll to
			<>
				<div
					className="main"
					onMouseMove={(e) =>
						this.setState({
							x: e.screenX,
							y: e.screenY,
							c: e.clientX,
							v: e.clientY,
						})
					}
				>
					<Sidebar />
					<div className="pages">
						<div className="dev" style={{ position: "fixed" }}>
							Screen : {x}x {y}y Client : {c}x {v}y
						</div>
						<AboutMe ref={this.aboutMe} />
						<Experience ref={this.experience} />
						<Education ref={this.education} />
						<Skills ref={this.skills} />
						<Interests ref={this.interests} />
						<Awards ref={this.awards} />
						{/* <div>{this.Test}</div> */}
					</div>
				</div>
			</>
		);
	}
}

export default Pages;
