import React, {
	Component,
	useEffect,
	useRef,
	useState,
	forwardRef,
} from "react";
import { NavHashLink as Link } from "react-router-hash-link";
import Scrollspy from "react-scrollspy";
import avatar from "../../icon/avatar.jpg";
import Pages from "../../pages/Pages";
import { HighlightOnScroll } from "../libs/HighlightOnScroll";
import { scrollTo } from "../libs/LoadupScroll";

const Sidebar = forwardRef((props, ref) => {
	const navs = ref;
	const scrolls = useRef();

	const lists = [
		"about",
		"experience",
		"education",
		"skills",
		"interests",
		"awards",
	];

	return (
		<>
			{/* <button onClick={console.log(awards.current, 'wa')}>click</button> */}
			<div
				className="outer-sidebar"
				ref={navs}
				// onLoad={() => props.getNavs()}
			>
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
					<Link
						smooth
						to="#about"
						className="nav about"
						// onClick={scrollTo}
					>
						ABOUT
					</Link>
					<Link
						smooth
						to="#experience"
						className="nav experience"
						// onClick={scrollTo}
					>
						EXPERIENCE
					</Link>
					<Link
						smooth
						to="#education"
						className="nav education"
						// onClick={scrollTo}
					>
						EDUCATION
					</Link>
					<Link
						smooth
						to="#skills"
						className="nav skills"
						// onClick={scrollTo}
					>
						SKILLS
					</Link>
					<Link
						smooth
						to="#interests"
						className="nav interests"
						// onClick={scrollTo}
					>
						INTERESTS
					</Link>
					<Link
						smooth
						to="#awards"
						className="nav awards"
						// onClick={scrollTo}
					>
						AWARDS
					</Link>
					{/* </Scrollspy> */}
				</div>
			</div>
		</>
	);
});

// export default forwardRef((props, ref) => <Sidebar navsRef={ref} {...props} />);
export default Sidebar;
