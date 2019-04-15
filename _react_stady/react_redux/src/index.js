import React from 'react';
import ReactDOM from 'react-dom';
import Index from './TodoList';
import {Provider} from 'react-redux'
import store from './store'
const App=(
    // Provider将store中的内容通过store传递给里面子组件，他们都可以获取到。
    <Provider store={store}>
        <Index />
    </Provider>
)
ReactDOM.render(App, document.getElementById('root'));
