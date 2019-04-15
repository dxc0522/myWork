import React from 'react';
import ReactDOM from 'react-dom';
import App from './TodoList';
import ajax from './utils'
import 'antd/dist/antd'
React.ajax=ajax
ReactDOM.render(<App />, document.getElementById('root'));
