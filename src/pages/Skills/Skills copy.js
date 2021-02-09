import React, { Component } from 'react'
import checkicon from '../../icon/checkicon'


const Divs = () => [
    'HTML5', 'Javascript', 'Nodejs', 'Django', 'CSS3', 'React', 'Python', 'Ember'
].map((v, k) => <li key={k} >{checkicon}{v}</li>)

class Skills extends Component {
    render() {
        return (
            <div id='skills' className="page">
                <div className="title">SKILLS</div>
                <div className="smaller-title">PROGRAMMING LANGUAGES & TOOLS</div>
                <ul>
                    <Divs />
                </ul>
            </div>
        )
    }
}

export default Skills