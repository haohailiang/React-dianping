import React      from 'react'
import { render } from 'react-dom'
import Hello      from './containers/Hello/';

// 通用样式
import './static/css/common.less'

render(
	<Hello/>,
	document.getElementById('root')
)
