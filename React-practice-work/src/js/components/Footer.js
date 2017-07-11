import React from "react";

export default class Footer extends React.Component{
	render(){
		return(
			<footer><h2>{this.props.name}</h2></footer>	
		);
	}
}