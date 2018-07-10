import React          from 'react'
import { render }     from 'react-dom'
import { Provider }   from 'react-redux'
import configureStore from './store/configureStore'
import Hello          from './containers/Hello'

import './static/css/common.less'

// 引用并执行 redux-demo
// import fn from './redux-demo.js'
// fn()


const store = configureStore()

console.log( store.getState() );

render(
    <Provider store={store}>
        <Hello/>
    </Provider>,
    document.getElementById('root')
)
