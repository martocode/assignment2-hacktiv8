import React, { createRef, forwardRef } from "react";



// export default 
class AboutMe extends React.Component {
	/* 	
		constructor({ ref }) {
			super()
			this.myRef = ref
		}
	 */
	render() {
		return (
			<>
				<div id='aboutme' className="page" ref={this.props.innerRef}>
					<div className='title'>
						<p className='bigger-title'>LOREM
							<span className='orange'>IPSUM</span>
						</p>
						<p className='smaller-title'>+62-123456789&nbsp;
							<span className='orange'>LOREMIPSUM@GMAIL.COM</span>
						</p>
					</div>
					<h1 className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cumque enim eos placeat hic iure esse totam consectetur quidem temporibus, tempore eaque sint expedita! Corrupti, a repellat omnis quia eaque officia quae facilis temporibus corporis, totam, laborum repudiandae facere quis officiis minima! Ea molestiae officiis minus consequuntur, vel sint enim, obcaecati eveniet consectetur porro at vitae commodi voluptatibus debitis sed. Distinctio blanditiis eveniet soluta eos voluptas maiores facere corrupti neque? Id molestias magnam quaerat nesciunt laudantium, harum in exercitationem aperiam sed natus quasi ea fuga! Molestias quos accusamus sint explicabo quibusdam enim nisi minus! Nisi, repellendus harum? Excepturi, quod ratione.</h1>
				</div>
			</>
		)
	}

}


export default forwardRef((props, ref) => <AboutMe innerRef={ref} {...props} />)