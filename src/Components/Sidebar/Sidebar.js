import React, { Component, createRef } from "react";
import { NavHashLink as Link } from "react-router-hash-link";
import Scrollspy from "react-scrollspy";
import avatar from "../../icon/user.png";
import ScrollHighligter from "./HighlightOnScroll";

export default class Sidebar extends Component {
	constructor(props) {
		super(props);
		this.scrolls = createRef(null);
		this.state = { loaded: false };

		this.lists = [
			"about",
			"experience",
			"education",
			"skills",
			"interests",
			"awards",
		];
		// console.log(this.scrolls, "lklk");
	}

	scroller = (ref) => ref.current.scrollIntoView({ behavior: "smooth" });
	switchPage = (div) => {
		if (div !== undefined) {
			let id;
			// console.log(this.scrolls, div, "lklk");
			// new Promise((e) => {
			// setTimeout(e(), 200);
			// e();
			// }).then(() => {
			id = div.id;
			window.location.hash = `#${id}`;
			// });
		}
	};
	activeItem = (div) => {
		const element = window.location.hash;
		const navIndx = this.scrolls.current.state.inViewState.indexOf(true);
		const child = document.querySelector(`${element}.page`);
		const divs = [...child.parentNode.children];
		const indx = divs.indexOf(child);
		if (element !== "" && navIndx !== indx) {
			const nav = document.querySelector(".sidebar").childNodes[indx];
			// this.switchPage(div);
			nav.className = "nav";
			// new ScrollHighligter();
		}
	};

	/* 	
	componentDidMount() {
		new Promise((resolver) => setTimeout(() => resolver(), 900)).then(
			this.setState({ loaded: true })
		);
	}
 */

	render() {
		// const allRefs = this.props.allRefs;
		// const awards = bake()[3]
		// console.log(this.props.innerRef)

		return (
			<>
				{/* <button onClick={console.log(awards.current, 'wa')}>click</button> */}
				<div className="outer-sidebar">
					<div className="img">
						<img src={avatar} alt="avatar" />
					</div>
					<Scrollspy
						ref={this.scrolls}
						componentTag={"div"}
						className="sidebar"
						items={this.lists}
						currentClassName="active"
						// offset={166}
						onUpdate={this.activeItem}
						// onUpdate={(e) => console.log(e)}
						// activeStyle={{ color: "white" }}
					>
						<Link
							smooth
							to="#about"
							// activeStyle={{ color: "white" }}
							// id="about"
							className="nav"
						>
							ABOUT
						</Link>
						<Link
							smooth
							to="#experience"
							// activeStyle={{ color: "white" }}
							className="nav"
							// id="experience"
						>
							EXPERIENCE
						</Link>
						<Link
							smooth
							to="#education"
							// activeStyle={{ color: "white" }}
							className="nav"
							// id="education"
						>
							EDUCATION
						</Link>
						<Link
							smooth
							to="#skills"
							// activeStyle={{ color: "white" }}
							className="nav"
							// id="skills"
						>
							SKILLS
						</Link>
						<Link
							smooth
							to="#interests"
							// activeStyle={{ color: "white" }}
							className="nav"
							// id="interests"
						>
							INTERESTS
						</Link>
						<Link
							smooth
							to="#awards"
							// activeStyle={{ color: "white" }}
							className="nav"
							// id="awards"
						>
							AWARDS
						</Link>
					</Scrollspy>
				</div>
			</>
		);
	}
}

// export default forwardRef((props, ref) => <Sidebar innerRef={ref} {...props} />)
