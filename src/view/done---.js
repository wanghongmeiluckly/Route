import React, { Component } from 'react';
import Ul from "../component/ul";
import Header from "../component/header";
import Footer from "../component/footer";
class Done extends Component{
	
	render(){
		let {data,getUnDone,getDone,edit} = this.props;
		return(
			<div>
				<Header title={"已完成事项"} />
	           	<Ul data={data} edit={edit} />
	           	<Footer data={data} doneLength = {getDone().length}
                unDoneLength = {getUnDone().length} />
			</div>
		)
	}
}
export default Done;

