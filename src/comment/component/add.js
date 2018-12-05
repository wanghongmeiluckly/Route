import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class Add extends Component{
	state={
		val:""
	}
	render(){
		return(
			<div>
				<input 
					className="text" 
					type="text"
					placeholder="代办事项"
					value={this.state.val}
					onChange={(e)=>{
						this.setState({
							val: e.target.value
						})
					}}
					onKeyDown={(e)=>{

						if(e.keyCode==13){
							let {val}=this.state;
							if(val.trim() == ""){
		                       alert("请输入有效内容");
		                    } else {
		                       this.props.add(val);
		                       this.state.val="";
		                       this.props.history.push("/");
		                    }
							
						}
					}} 
				/>
			</div>

		)
	}
}

export default withRouter(Add);