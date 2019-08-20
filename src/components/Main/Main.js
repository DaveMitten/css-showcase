import React, { Component } from 'react'
import './Main.css'

class Main extends Component {
  render() {
	  
	return (
	  <div className="main-container">
	  {!this.props.isResponsive && 
		<div className="main-responsive-alert">Not Mobile responsive(yet)</div>}
	  	<div className="main-title">{this.props.title}</div>
	  </div>
	)
  }
}
export default Main ;
