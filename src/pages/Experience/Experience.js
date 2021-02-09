import React, { createRef, forwardRef } from 'react';

const experiences = [
    [
        "GITHUB CAMPUS EXPERT",
        "August 2018 - Present",
        "GITHUB",
        "Responsible for building on campus community with the support of GitHub",
    ],
    [
        "GITHUB CAMPUS EXPERT",
        "August 2018 - Present",
        "GITHUB",
        "Responsible for building on campus community with the support of GitHub",
    ],
    [
        "GITHUB CAMPUS EXPERT",
        "August 2018 - Present",
        "GITHUB",
        "Responsible for building on campus community with the support of GitHub",
    ],
];

const Myexperience = () => experiences.map((value, key) => (
    <div key={key} className='exp'>
        <div className='upper-title'>
            <h1 className='name'>{value[0]}</h1>
            <h1 className='date'>{value[1]}</h1>
        </div>
        <h1 className="loc">{value[2]}</h1>
        <h1 className="job">{value[3]}</h1>
    </div>
))


// export default 
class Experience extends React.Component {

    render() {
        return (
            <>
                <div id='experience' className='page' ref={this.props.innerRef}>
                    <p className='title'>EXPERIENCE</p>
                    <Myexperience />
                </div>
            </>
        )
    }
}

export default forwardRef((props, ref) => <Experience innerRef={ref} {...props} />)