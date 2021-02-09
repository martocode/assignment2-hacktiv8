import React, { Component, createRef, useEffect, useRef } from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import AboutMe from "./AboutMe/AboutMe";
import Experience from "./Experience/Experience";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";
import Interests from "./Interests/Interest";
import Awards from "./Awards/Awards";

class Pages extends Component {
	constructor() {
		super();
		this.aboutMe = createRef();
		this.experience = createRef();
		this.education = createRef();
		this.skills = createRef();
		this.interests = createRef();
		this.awards = createRef();
	}
	// console.log(AboutMe, Experience.current, 'ff')
	scroller = () => this.awards.current.scrollIntoView({ behavior: "auto" });
	allRefs = () => {
		return [
			this.aboutMe,
			this.experience,
			this.education,
			this.skills,
			this.interests,
			this.awards,
		]; // it will execute when child component will invoke it
	};

	// useEffect(scroll, [])
	render() {
		return (
			// This is the div you want to scroll to
			<>
				<div className="main">
					<Sidebar allRefs={this.allRefs} />
					<div className="pages">
						<AboutMe ref={this.aboutMe} />
						<Experience ref={this.experience} />
						<Education ref={this.education} />
						<Skills ref={this.skills} />
						<Interests ref={this.interests} />
						<Awards ref={this.awards} />
					</div>
				</div>
			</>
		);
	}
}

export default Pages;
