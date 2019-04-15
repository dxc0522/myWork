import React, { Component,ajax } from 'react'
import store from './redux'
import ActionCreators from './redux/actionCreators'
import TodoListUI from './TodoListUi'

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state=store.getState();
        this.handleInputChange=this.handleInputChange.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.handleAddChange=this.handleAddChange.bind(this)
        this.handleRemove=this.handleRemove.bind(this)
        store.subscribe(this.handleChange)//store中的数据一旦更改，该方法就会直接执行
    }
    handleInputChange(e){
        const action=ActionCreators.getInputChangeAction(e.target.value)
        store.dispatch(action)
    }
    handleAddChange(e){
        const action=ActionCreators.getAddItemAction(e)
        store.dispatch(action)
    }
    handleChange(){
        this.setState(store.getState())
    }
    handleRemove(index){
        const action=ActionCreators.getDelItemAction(index)
        store.dispatch(action)
    }
    componentDidMount(){
        // redux thunk的使用
        // const action=ActionCreators.getTodoList();
        // store.dispatch(action)
        // ajax("api/list").then(res=>{
        //     console.log(res)
        //     const list=[];
        //     res.data.forEach(item=>{
        //         list.push(item.id)
        //     })
        //     const action=ActionCreators.initListAction(list);
        //     store.dispatch(action)
        // },err=>{
        //     console.log(err)
        // })
        // redux saga的使用
        const action=ActionCreators.getInitList();
        store.dispatch(action)
    }
    render(){
        return<TodoListUI 
        inputVal={this.state.inputVal}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleAddChange={this.handleAddChange}
        handleRemove={this.handleRemove}
        />
    }
} 
export default TodoList