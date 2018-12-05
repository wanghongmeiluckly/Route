import React, { Component } from 'react';
import {Redirect,Route,Switch} from 'react-router-dom';
import router from './router/router';
import RouterComponent from './router/router-component';

class App extends Component {
  state = {
    data:[
      
    ]
  }
  /*添加数据*/
    add = (info)=>{
        let {data} = this.state;
        data.push({
            id: Date.now(),
            text: info,
            done: false
        });
        this.setState({data})
    }
    /*删除数据*/
    remove = (id)=>{
        let {data} = this.state;
        data = data.filter(item=>item.id!=id);
        this.setState({data})
    }
    /*删除已完成数据*/
    removeDone = ()=>{
        let {data} = this.state;
        data = data.filter(item=>!item.done);
        this.setState({data})
    }
    /*修改状态*/
    changeState = (id,state)=>{
        let {data} = this.state;
        data.forEach(item=>{
            if(id == item.id){
                item.done = state;
            }
        });
        this.setState({data})
    }
    /*修改文字*/
    edit = (id,info)=>{
        let {data} = this.state;
        data.forEach(item=>{
            if(id == item.id){
                item.text = info;
            }
        });
        this.setState({data})
    }
    /* 获取所有数据 */
    getData = ()=>{
      let {data} = this.state;
      return data;
    }
    /* 获取所有完成项 */
    getDone=()=>{
        let {data} = this.state;
        return data.filter(item=>item.done);
    }
    /* 获取所有未完成项 */
    getUnDone=()=>{
        let {data} = this.state;
        return data.filter(item=>!item.done);
    }

  render() {
    let {data} = this.state;
    let getUnDone = this.getUnDone();
    let getDone = this.getDone();
    return (
      <div className="App">
        <Switch>
          {router.map((item,index)=>{
            return (<Route 
                key = {index}
                path = {item.path}
                exact = {item.exact}
                render = {(props)=>{
                  let url = props.match.path;
                  if(url == "/" && data.length==0){
                    return <Redirect to={"/add"} />
                  } else if(url == "/done" && getDone.length == 0){
                    return <Redirect to={"/"} />
                  } else if(url == "/undone" && getUnDone.length == 0){
                    return <Redirect to={"/"} />
                  }
                  let pops = Object.assign({
                    data,
                    getDone,
                    getUnDone,
                    changeState: this.changeState,
                    remove: this.remove,
                    removeDone: this.removeDone,
                    edit: this.edit,
                    add: this.add
                  },props);
                  return RouterComponent[index](pops);
                }}
             />);
          })}
        </Switch>
          
        
      </div>
    );
  }
}

export default App;
