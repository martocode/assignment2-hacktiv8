import React from "react";
import Moment from "react-moment";

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
				<div className="upper-title">
					<div>
						<h1 className="name">{value[0]}</h1>
					</div>
					<div xs="2">
						<div className="date">
							<Moment
								element="h1"
								date={date[0]}
								format="MMMM YYYY"
							></Moment>
							<h1> - {date[1]}</h1>
							{/* {getDate("August 2018")} */}
							{/* {getDate("August 2018")} */}
							{/* {moment(value[1]).format("MMMM YYYY")} */}
						</div>
					</div>
				</div>
				<div>
					<div className="loc">{value[2]}</div>
					<div className="job">{value[3]}</div>
				</div>
			</div>
		);
	});

// export
const Experience = () => {
	return (
		<>
			<div id="experience" className="page">
				<p className="title">EXPERIENCE</p>
				<Myexperience />
			</div>
		</>
	);
};
export default Experience;
