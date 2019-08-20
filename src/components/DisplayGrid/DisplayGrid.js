import React, { Component } from 'react'
import AnimateFade from '../AnimateFade/AnimateFade';

import './DisplayGrid.css';


class DisplayGrid extends Component {
	render() {
		return (
			<div className="grid-wrapper">
				<div className="grid-container">
					<div className="grid-item">
						<AnimateFade />
					</div>
					<div className="grid-item">
						<AnimateFade />
					</div>
					<div className="grid-item">
						<AnimateFade />
					</div>
				</div>
			</div>
		)
	}
}

export default DisplayGrid;
