import {
    takeEvery,
    put
} from 'redux-saga/effects'
import ActionTypes from './actionTypes'
import ActionCreators from './actionCreators'
import ajax from '../utils'

function* getInitList() {
    // 使用try方法是为了避免出现网络请求出错的情况
    try {
        const res = yield ajax("api/list");
        console.log(res)
        const list = [];
        res.data.forEach(item => {
            list.push(item.id)
        })
        const action = ActionCreators.initListAction(list);
        yield put(action)
        // 因为put是异步操作如果在put中不添加yield会导致数据无法正常添加，注意注意！！！！
    } catch (e) {
        console.log("请求失败")
    }

}
// 必须导出一个generater函数，
function* mySaga() {
    // takeEvery捕捉每一次派发的action，当捕捉到对应的action的时候则执行后跟的函数getInitList，该函数必须是generater函数
    yield takeEvery(ActionTypes.GET_INIT_LIST, getInitList)
}

export default mySaga;