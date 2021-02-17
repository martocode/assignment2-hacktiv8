<<<<<<< Updated upstream
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
// import Icon from './checkicon'
=======
import { useState } from "react";
import { Container, Row, Col } from "reactstrap";
>>>>>>> Stashed changes
import { ReactComponent as Checkicon } from "../../icon/check-circle-solid.svg";
import { ModalSkillsDetail } from "../../Components/libs/Modal";

const Icon = () => <Checkicon className="checkicon" />;

const listAwards = [
	"HTML5",
	"Javascript",
	"Nodejs",
	"Django",
	"CSS3",
	"React",
	"Python",
	"Ember",
];

<<<<<<< Updated upstream
export default class Skills extends Component {
	render() {
		return (
			<div id="skills" className="page">
				<div className="title">SKILLS</div>
				<div className="smaller-title">
					PROGRAMMING LANGUAGES & TOOLS
				</div>
				<ul style={{ "list-style-type": "none" }}>
					<Divs />
				</ul>
			</div>
		);
	}
}
=======
export const Skills = () => {
	const [isOpen, setOpen] = useState(false);
	const [modalAttribute, setmodalAttribute] = useState(false);
>>>>>>> Stashed changes

	return (
		<div id="skills" className="page">
			<ModalSkillsDetail
				isOpen={isOpen}
				skillName={modalAttribute}
				toggle={() => setOpen(!isOpen)}
			/>
			<div className="title">SKILLS</div>
			<div className="smaller-title">PROGRAMMING LANGUAGES & TOOLS</div>
			<ul style={{ "list-style-type": "none" }}>
				{listAwards.map((v, k) => (
					<li
						key={k}
						onClick={() => {
							setOpen(!isOpen);
							setmodalAttribute(v);
						}}
					>
						<Icon /> {v}
					</li>
				))}
			</ul>
		</div>
	);
};
