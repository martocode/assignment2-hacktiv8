import React, { Component, forwardRef } from "react";
import avatar from "../../icon/user.png";

export default class Sidebar extends Component {
	/*     
        constructor() {
            super()
            this.clicker = this.props.clicker
        }
     */
	scroller = (ref) => ref.current.scrollIntoView({ behavior: "smooth" });

	render() {
		const allRefs = this.props.allRefs;
		// const awards = bake()[3]
		// console.log(this.props.innerRef)
		return (
			<>
				{/* <button onClick={console.log(awards.current, 'wa')}>click</button> */}
				<div className="outer-sidebar">
					<div id="sidebar">
						<img src={avatar} alt="avatar" />

						<h1
							className="nav"
							onClick={() => this.scroller(allRefs()[0])}
						>
							ABOUT
						</h1>
						<h1
							className="nav"
							onClick={() => this.scroller(allRefs()[1])}
						>
							EXPERIENCE
						</h1>
						<h1
							className="nav"
							onClick={() => this.scroller(allRefs()[2])}
						>
							EDUCATION
						</h1>
						<h1
							className="nav"
							onClick={() => this.scroller(allRefs()[3])}
						>
							SKILLS
						</h1>
						<h1
							className="nav"
							onClick={() => this.scroller(allRefs()[4])}
						>
							INTERESTS
						</h1>
						<h1
							className="nav"
							onClick={() => this.scroller(allRefs()[5])}
						>
							AWARDS
						</h1>
					</div>
				</div>
			</>
		);
	}
}

// export default forwardRef((props, ref) => <Sidebar innerRef={ref} {...props} />)
