import React, { Component } from 'react';
import Ul from "../component/ul";
import Header from "../component/header";
import Footer from "../component/footer";
class UnDone extends Component{
	
	render(){
		let {data,getDone,getUnDone,changeState,edit} = this.props;
		return(
			<div>
				<Header title={"未完成事项"} />
	           	<Ul data={data} edit={edit} />
	           	<Footer data={data} doneLength = {getDone().length}
                unDoneLength = {getUnDone().length} />
			</div>
		)
	}
}
export default UnDone;

