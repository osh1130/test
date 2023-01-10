import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import App from '../App'
import {Navigate} from "react-router-dom"
import About from '../page/about'

const BaseRouter = () => (
    <Router>
        <Routes>
            <Route path='/' element={<App/>}>
                {/* When configuring user access to /, redirect the path */}
                <Route path='/about' element={<About />}></Route>
            </Route>
        </Routes>
    </Router>
)

export default BaseRouter