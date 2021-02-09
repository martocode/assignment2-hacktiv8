import React, { Component, createRef, forwardRef } from 'react'


// export default 
class Education extends Component {

    render() {
        return (
            <>
                <div id='education' className="page" ref={this.props.innerRef}>
                    <h1 className="title">EDUCATION</h1>
                    <h1 className='description'>INSTITUTE OF LOREMIPSUM</h1>
                    <h1 className='description'>BACHELOR OF LOREMIPSUM</h1>
                    <h1 className='description'>12.34</h1>
                </div>
            </>
        )
    }
}

export default forwardRef((props, ref) => <Education innerRef={ref} {...props} />)