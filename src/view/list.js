import React, { Component } from 'react';
import Header from "../comment/component/header";
import Ul from "../comment/component/ul";
import Footer from "../comment/component/footer";
class List extends Component{
	
	render(){
		let {match,getUnDone,getDone,data} = this.props;
		let nowData = null;
		let url = match.path;
		switch(url){
			case "/":
				nowData = data;
				break;
			case "/done":
				nowData = getDone;
				break;
			case "/undone":
				nowData = getUnDone;
				break;
		}
		return(
			<div>
				<Header {...this.props} />
	            <Ul {...this.props} data={nowData} />
	            <Footer {...this.props} />
			</div>
		)
	}
}
export default List;

