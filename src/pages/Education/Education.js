import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

export default class Education extends Component {
	render() {
		return (
			<>
				<div id="education" className="page" ref={this.props.innerRef}>
					<Row className="title">
						<h1>EDUCATION</h1>
					</Row>
					<Col className="description">
						<h1>INSTITUTE OF LOREMIPSUM</h1>
						{/* <Row className="description"> */}
						<h1>BACHELOR OF LOREMIPSUM</h1>
						{/* </Row> */}
						{/* <Row className="description"> */}
						<h1>12.34</h1>
						{/* </Row> */}
					</Col>
				</div>
			</>
		);
	}
}

// export default forwardRef((props, ref) => <Education innerRef={ref} {...props} />)
