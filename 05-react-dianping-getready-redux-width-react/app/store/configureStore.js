import { createStore } from 'redux'
import rootReducer     from '../reducers'

export default function configureStore(initialState) {
	// 根据规则生成store
	const store = createStore(rootReducer, initialState,
		// 触发 redux-devtools
		window.devToolsExtension ? window.devToolsExtension() : undefined
	)
	return store
}
