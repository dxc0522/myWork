import ActionTypes from './actionTypes'
import ajax from '../utils'
const creators = {
    getInputChangeAction: value => ({
        type: ActionTypes.CHANGE_INPUT_VALUE,
        value
    }),
    getAddItemAction: value => ({
        type: ActionTypes.ADD_LIST,
        value
    }),
    getDelItemAction: index => ({
        type: ActionTypes.DEL_LIST,
        index
    }),
    initListAction: data => ({
        type: ActionTypes.INIT_LIST_ACTION,
        data
    }),
    getTodoList: () => {
        // redux thunk的使用
        return (dispatch) => {
            ajax("api/list").then(res => {
                const list=[];
                res.data.forEach(item=>{
                    list.push(item.id)
                })
                const action=creators.initListAction(list)
                dispatch(action)
            }, err => {
                console.log(err)
            })
        }
    },
    getInitList:()=>({
        type:ActionTypes.GET_INIT_LIST
    })

}
export default creators