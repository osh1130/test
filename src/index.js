import ReactDOM from 'react-dom'
import Router from './router'
import 'antd/dist/antd.min.css';
import "./assets/base.less"
import store from './store'
import {Provider} from 'react-redux'

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>,

    document.getElementById('root')
)
