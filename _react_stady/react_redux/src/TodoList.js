import React, { Component } from 'react'
// import store from './store'
import {connect} from 'react-redux'
class TodoList extends Component {
    render(){
        return(
            <div>
                <input value={this.props.input} onChange={this.props.handleChange}/>
                <button>提交</button>
                <ul>
                    {
                        this.props.list.map((item,index)=><div key={index}>{item}</div>)
                    }
                </ul>
            </div>
        )
    }
}
// 链接的规则，将store转换为props
const mapStateToProps=(state)=>{
    // 映射的规则就是讲store中的数据state映射到组件的props中
    return{
        input:state.input,
        list:state.list
    }
}
// store.dispatch,在该函数中调用，并且定义好方法，该方法会以props的方式传递过去，在jsx中之直接调用即可。并且可以直接调用dispatch方法去调用
const mapDispatchToProps=(dispatch)=>{
    return{
        handleChange(e){
            const action ={
                type:"chagne_input",
                data:e.target.value
            }
            dispatch(action)
        }
    }
}
// 通过这个方法链接TodoList跟store
export default connect(mapStateToProps,mapDispatchToProps)(TodoList)