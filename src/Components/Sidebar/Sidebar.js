import React, { Component, useEffect, useRef, useState } from "react";
import { NavHashLink as Link } from "react-router-hash-link";
import Scrollspy from "react-scrollspy";
import avatar from "../../icon/avatar.jpg";
import { HighlightOnScroll } from "../libs/HighlightOnScroll";

export const Sidebar = () => {
	const scrolls = useRef();
	// const [loaded, setLoad] = useState(false);

	const lists = [
		"about",
		"experience",
		"education",
		"skills",
		"interests",
		"awards",
	];

	useEffect(() => {
		window.addEventListener("scroll", HighlightOnScroll);
	}, []);

	return (
		<>
			{/* <button onClick={console.log(awards.current, 'wa')}>click</button> */}
			<div className="outer-sidebar">
				<div className="img">
					<img src={avatar} alt="avatar" />
				</div>
				{/* <Scrollspy
					ref={scrolls}
					componentTag={"div"}
					className="sidebar"
					items={lists}
					// currentClassName="active"
					onUpdate={activeItem}
				> */}
				<div className="sidebar">
					<Link smooth to="#about" className="nav about">
						ABOUT
					</Link>
					<Link smooth to="#experience" className="nav experience">
						EXPERIENCE
					</Link>
					<Link smooth to="#education" className="nav education">
						EDUCATION
					</Link>
					<Link smooth to="#skills" className="nav skills">
						SKILLS
					</Link>
					<Link smooth to="#interests" className="nav interests">
						INTERESTS
					</Link>
					<Link smooth to="#awards" className="nav awards">
						AWARDS
					</Link>
					{/* </Scrollspy> */}
				</div>
			</div>
		</>
	);
};

// export default forwardRef((props, ref) => <Sidebar innerRef={ref} {...props} />)
