import React, { Component, forwardRef } from "react";
import { Container, Col, Row } from "reactstrap";
import Moment from "react-moment";

// const getDate = (date) => moment(date).format("MMMM YYYY");

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
	experiences.map((value, key) => {
		const date = value[1].split(" - ");
		// console.log(date);
		return (
			<div key={key} className="exp">
				<Row className="upper-title">
					<Col>
						<h1 className="name">{value[0]}</h1>
					</Col>
					<Col xs="2">
						<Row className="date">
							<Moment
								element="h1"
								date={date[0]}
								format="MMMM YYYY"
							></Moment>
							<h1> - {date[1]}</h1>
							{/* {getDate("August 2018")} */}
							{/* {getDate("August 2018")} */}
							{/* {moment(value[1]).format("MMMM YYYY")} */}
						</Row>
					</Col>
				</Row>
				<Container>
					<Row className="loc">{value[2]}</Row>
					<Row className="job">{value[3]}</Row>
				</Container>
			</div>
		);
	});

// export default
export default class Experience extends Component {
	render() {
		return (
			<>
				<Container id="experience" className="page">
					<p className="title">EXPERIENCE</p>
					<Myexperience />
				</Container>
			</>
		);
	}
}
