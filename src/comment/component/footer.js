import React, { Component } from 'react';

function Footer(props){
	let {removeDone,doneLength,unDoneLength} = props;

	return(
		 <footer>
		 	<p className="bt-left">{unDoneLength}items left.</p>
			{doneLength>0?<p className="bt-right" onClick={()=>{
				removeDone();
			}}>Clear completed {doneLength}items</p>:""}
		</footer>
	)
}
export default Footer;

