import React, { createRef, forwardRef } from "react";
import { Container, Col, Row } from "reactstrap";
import moment from "moment";

const getDate = (date) => moment(date).format("MMMM YYYY");

const experiences = [
	[
		"GITHUB CAMPUS EXPERT",
		"August 2018 - Present",
		"GITHUB",
		"Responsible for building on campus community with the support of GitHub",
	],
	[
		"GITHUB CAMPUS EXPERT",
		"August 2018 - Present",
		"GITHUB",
		"Responsible for building on campus community with the support of GitHub",
	],
	[
		"GITHUB CAMPUS EXPERT",
		"August 2018 - Present",
		"GITHUB",
		"Responsible for building on campus community with the support of GitHub",
	],
];

const Myexperience = () =>
	experiences.map((value, key) => (
		<Container key={key} className="exp">
			<Row className="upper-title">
				<Col>
					<h1 className="name">{value[0]}</h1>
				</Col>
				<Col xs="2">
					<h1 className="date">
						{getDate("August 2018")}
						{/* {getDate("August 2018")} */}
						{/* {moment(value[1]).format("MMMM YYYY")} */}
					</h1>
				</Col>
			</Row>
			<Container>
				<Row className="loc">{value[2]}</Row>
				<Row className="job">{value[3]}</Row>
			</Container>
		</Container>
	));

// export default
export default class Experience extends React.Component {
	render() {
		return (
			<>
				<div id="experience" className="page" ref={this.props.innerRef}>
					<p className="title">EXPERIENCE</p>
					<Myexperience />
				</div>
			</>
		);
	}
}
