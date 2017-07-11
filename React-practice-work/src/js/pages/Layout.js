/**
 * Karthik Tsaliki
 * 
 */
import React from "react";
import {Link} from "react-router";

export default class Layout extends React.Component{
	navigate(){
		this.props.history.replaceState(null,"/");
	}
	render(){
		const {history}=this.props;
		console.log(history.isActive("archives"));
		return(
		<div>		
			{this.props.children}
			<Link to="archives" activeClassName="test"><button>archives</button></Link>
			<Link to="settings"><button>settings</button></Link>
			<button onClick={this.navigate.bind(this)}>featured</button>
		</div>	
		);
	}
}