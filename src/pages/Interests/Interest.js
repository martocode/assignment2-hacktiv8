import React, { Component, forwardRef } from "react";


class Interest extends Component {

    render() {
        return (
            <>
                <div id="interests" className="page" ref={this.props.innerRef}>
                    <div className="title">INTERESTS</div>
                    <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis commodi sed eum.
                </div>
                    <div className="description">
                        Lorem ipsum dolor sit.
                </div>
                </div>
            </>
        )
    }
}
export default forwardRef((props, ref) => <Interest innerRef={ref} {...props} />)