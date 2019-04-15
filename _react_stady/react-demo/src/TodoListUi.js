import React from 'react'
import './TodoList.css'
import { Input,List } from 'antd';
const Search = Input.Search,
 TodoListUI=props=>{
    return(
        <div className="todo_box">
        <Search
            onChange={props.handleInputChange}
            value={props.inputVal}
            className="todo_input"
            placeholder="请输入搜索内容"
            onSearch={value => props.handleAddChange(value)}
            enterButton
            />
            <List
            bordered
            dataSource={props.list}
            renderItem={(item,index) => (<List.Item key={item} onClick={()=>{
                props.handleRemove(index)
            }}>{item}</List.Item>)}
            />
    </div>
    )
}
export default TodoListUI