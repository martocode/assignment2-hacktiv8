import React from "react";

const listAwards = [
	"Google Analytics Certified Developer",
	"Mobile Web Specialist - Google Certification",
	"1 st Place - University of Colorado Boulder - Emerging Tech Competition 2009",
	"1 st Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)",
	"2 nd Place - University of Colorado Boulder - Emerging Tech Competition 2008",
	"1 st Place - James Buchanan High School - Hackathon 2006",
	"3 rd Place - James Buchanan High School - Hack",
];

const Arrawards = () =>
	listAwards.map((value, key) => <li key={key}>{value}</li>);

// export
const Awards = () => {
	return (
		<>
			<div id="awards" className="page">
				<h1 className="title">AWARDS & CERTIFICATIONS</h1>
				<ul>
					<Arrawards />
				</ul>
			</div>
		</>
	);
};

export default Awards;
