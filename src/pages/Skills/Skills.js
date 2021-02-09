import React, { Component, forwardRef } from 'react'
import Icon from './checkicon'


const Divs = () => [
    'HTML5', 'Javascript', 'Nodejs', 'Django', 'CSS3', 'React', 'Python', 'Ember'
].map((v, k) => <li key={k} ><Icon /> {v}</li>)

class Skills extends Component {
    render() {
        return (
            <div id='skills' className="page" ref={this.props.innerRef}>
                <div className="title">SKILLS</div>
                <div className="smaller-title">PROGRAMMING LANGUAGES & TOOLS</div>
                <ul style={{ "list-style-type": "none" }}>
                    <Divs />
                </ul>
            </div>
        )
    }
}

export default forwardRef((props, ref) => <Skills innerRef={ref} {...props} />)