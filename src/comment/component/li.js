import React, { Component } from 'react';

class List extends Component{
	
	 state = {
        isEdit: false,
        text: this.props.data.text
    }
    componentDidUpdate(prevProps,prevState,){
    	if(this.state.isEdit&&!prevState.isEdit){
    		this.refs.text.select();
    	}
    }
	
	render(){
		let {data,remove,changeState,edit} = this.props;
		let {text,isEdit} = this.state;
		return(		
			<li className={data.done?"done":""}>
				<div style={{display:isEdit?"none":"block"}}>
					<input 
						type="checkbox" 
						checked={data.done}
						onChange={(e)=>{
							changeState(data.id,e.target.checked);
						}}
					 />
					<span onDoubleClick={()=>{
						this.setState({
							isEdit: true
						})
					}}>{data.text}</span>
					<a href="javascript:;" onClick = {()=>{
                            remove(data.id);
                        }}>x</a>
				</div>
				<div className="edit" style={{display:isEdit?"block":"none"}}>
					<input 
						className="todo-input" 
						type="text" 
						value={text}
						ref="text"
						onChange={(e)=>{
							this.setState({
								text: e.target.value
							})
						}}
						onBlur={()=>{
							let {text} = this.state;
							if(text.trim()==""){
                                text = data.text
                            }
							this.setState({
								isEdit:false,
								text
							})
							edit(data.id,text);
						}} 
					/>
				</div>
			</li>
				
		)
	}
}
export default List;