import React from "react";

export default class Header extends React.Component{
	handleChange(e){
		const title=e.target.value;
		this.props.changeTitle(title)
	}
	render(){
		return(
			<header>
				<h1>{this.props.name}</h1>
				<input value={this.props.name} onChange={this.handleChange.bind(this)}></input>
			</header>	
		);
	}
}
