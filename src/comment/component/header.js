import React, { Component } from 'react';
import {NavLink,withRouter} from "react-router-dom";
import router from "../../router/router";
function getDisplay(path,getDone,getUnDone){
	let style = {};
	if(path == "/done"){
		style.display = getDone.length==0?"none":"block";
	} else if(path == "/undone"){
		style.display = getUnDone.length==0?"none":"block";
	}
	return style;
}
class Header extends Component{
	
	render(){
		let {data,match,getDone,getUnDone} = this.props;
		let url = match.path;
		let routerData = router.filter(item => item.path);
		let title = router.filter(item=>item.path==url)[0].title;
	
		return(
			<div>
				<h2>{title}</h2>
				<nav className={"nav"} style={{
					visibility: data.length == 0?"hidden":"visible"
				}}>
					{routerData.map((item,index)=>{
						return(<NavLink 
							key = {index}
							exact = {item.exact}
							to = {item.path}
							activeClassName = "active"
							style = {
								getDisplay(item.path,getDone,getUnDone)
							}
						>{item.title}</NavLink>)
					})}
				</nav>
			</div>
		)
	}
}
export default Header;

