import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import avatar from "../../icon/user.png";

export default class Sidebar extends Component {
	/*     
        constructor() {
            super()
            this.clicker = this.props.clicker
        }
     */
	// scroller = (ref) => ref.current.scrollIntoView({ behavior: "smooth" });

	render() {
		// const allRefs = this.props.allRefs;
		// const awards = bake()[3]
		// console.log(this.props.innerRef)
		return (
			<>
				{/* <button onClick={console.log(awards.current, 'wa')}>click</button> */}
				<div className="outer-sidebar">
					<div id="sidebar">
						<img src={avatar} alt="avatar" />

						<Link smooth to="#aboutme" className="nav">
							ABOUT
						</Link>
						<Link smooth to="#experience" className="nav">
							EXPERIENCE
						</Link>
						<Link smooth to="#education" className="nav">
							EDUCATION
						</Link>
						<Link smooth to="#skills" className="nav">
							SKILLS
						</Link>
						<Link smooth to="#interests" className="nav">
							INTERESTS
						</Link>
						<Link smooth to="#awards" className="nav">
							AWARDS
						</Link>
					</div>
				</div>
			</>
		);
	}
}

// export default forwardRef((props, ref) => <Sidebar innerRef={ref} {...props} />)
