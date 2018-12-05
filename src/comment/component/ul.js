import React, { Component } from 'react';
import Li from './li';

class Ul extends Component{
	
	render(){
		let {data,changeState,remove,edit} = this.props;
		return(
			<ul className="list">
				{data.map((item)=>{
                     return <Li 
                        key={item.id} 
                        {...this.props}
                        data={item} 
                        
                    />  
                })}
			</ul>
		)
	}
}
export default Ul;

