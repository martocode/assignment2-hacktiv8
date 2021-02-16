import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
// import Icon from './checkicon'
import { ReactComponent as Checkicon } from "../../icon/check-circle-solid.svg";

const Icon = () => <Checkicon className="checkicon" />;

const Divs = () =>
	[
		"HTML5",
		"Javascript",
		"Nodejs",
		"Django",
		"CSS3",
		"React",
		"Python",
		"Ember",
	].map((v, k) => (
		<li key={k}>
			<Icon /> {v}
		</li>
	));

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

// export default forwardRef((props, ref) => <Skills innerRef={ref} {...props} />);
