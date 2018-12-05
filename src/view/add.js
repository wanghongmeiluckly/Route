import React, { Component } from 'react';
import Add from "../comment/component/add";
import Header from "../comment/component/header";

class Add2 extends Component{
	
	render(){
		let {data,add,remove,edit,changeState} = this.props;
		return(
			<div>
				<Header {...this.props} />
				<Add {...this.props} />
				
	            
			</div>
		)
	}
}
export default Add2;

