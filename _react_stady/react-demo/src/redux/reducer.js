import ActionTypes from './actionTypes'
// 定义默认值state
const defaultState = {
    inputVal: "",
    list: []
};
export default (state = defaultState, action) => {
    if ("type" in action) {
        const newState = JSON.parse(JSON.stringify(state)); //深拷贝
        // state存放的所有信息(上次存储的数据)action为用户传递的话
        if (action.type === ActionTypes.CHANGE_INPUT_VALUE) {
            // reducer可以接受state但是 不能更改state所以需要深拷贝后再更改。
            newState.inputVal = action.value
            return newState
            // 返回的数据给了store并同时更改了store数据
        } else if (action.type === ActionTypes.ADD_LIST) {
            newState.list.push(action.value)
            newState.inputVal = ""
            return newState
        } else if (action.type === ActionTypes.DEL_LIST) {
            newState.list.splice(action.index, 1)
            return newState
        }else if(action.type===ActionTypes.INIT_LIST_ACTION){
            newState.list=action.data
            return newState
        }
    }
    return state
}