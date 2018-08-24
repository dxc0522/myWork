import {
    createStore,
    applyMiddleware,//该方法可以使用其他redux中间件
    compose,//用于引入多个中间件
} from 'redux';
import reducer from './reducer' 
// import thunk from 'redux-thunk'
// 使用redux-sage
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'
// 引入saga配置js
const sagaMiddleware=createSagaMiddleware()
// 创建saga实例
// 使用redux-sage   end

// 定义浏览器方法
const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
    // applyMiddleware(thunk),
    applyMiddleware(sagaMiddleware),//引入saga实例。
    // 可以继续引入其他的redux中间插件
);
const store = createStore(
    reducer,
    enhancer,
);
sagaMiddleware.run(mySaga)
// 运行saga
// 将reducer与state进行绑定。
export default store;