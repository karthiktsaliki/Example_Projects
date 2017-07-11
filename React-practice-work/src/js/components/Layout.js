import React from "react";
import Header from "./Header";
import Footer from "./Footer";
export default class Layout extends React.Component{
	constructor(){
		super();
		this.state={title:"will"};
	}
	changeTitle(title){
		this.setState({title});
	}
	render(){
		return(
			<div>
				<Header changeTitle={this.changeTitle.bind(this)} name={this.state.title}/>
				<Footer name="footer" />
			</div>
		);
	}
}