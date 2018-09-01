import React          from 'react'
import { render }     from 'react-dom'
import { Provider }   from 'react-redux'
import configureStore from './store/configureStore'
import Hello          from './containers/Hello'

import './static/css/common.less'

const store = configureStore()

console.log( "初始化state查看" );
console.log( store.getState() );

render(
    <Provider store={store}>
        <Hello/>
    </Provider>,
    document.getElementById('root')
)

// store里边保存着reducer规则
// store会订阅action的变化
