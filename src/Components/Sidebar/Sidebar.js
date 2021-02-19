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

const Sidebar = (props) => {
	const pages = props.pagesRef;
	const navs = useRef;
	const scrolls = useRef();
	// const getNavs = () => navs;
	// console.log("before", props);
	// const [loaded, setLoad] = useState(false);

	const lists = [
		"about",
		"experience",
		"education",
		"skills",
		"interests",
		"awards",
	];

	useEffect(
		() =>
			new Promise((e) => e()).then((navs) => {
				/* window.addEventListener(
					"scroll",
					(pages, navs, event) =>
						// <HighlightOnScroll pagesRef={pages} navsRef={navs} />
						HighlightOnScroll(pages, navs, event)
				 */
				// <Pages navsRef={navs} />;
				// props.getNavs(navs);
				console.log(props);
				// );
			})[
				// .then(HighlightOnScroll),
				(pages, navs, props)
			]
	);

	return (
		<>
			{/* <button onClick={console.log(awards.current, 'wa')}>click</button> */}
			<div
				className="outer-sidebar"
				ref={navs}
				// onLoad={() => props.getNavs(navs)}
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
};

// export default forwardRef((props, ref) => <Sidebar navsRef={ref} {...props} />);
export default Sidebar;
