// import reducer from './reducer'
// import {createStore} from 'redux'

// export const store = createStore(reducer);

import { legacy_createStore} from "redux";
import reducer from "./reducer";
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//让浏览器redux-dev-tools能正常使用
const store = legacy_createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ &&
window.__REDUX_DEVTOOLS_EXTENSION__());
export default store