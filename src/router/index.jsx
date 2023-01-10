import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import App from '../App'
import Edit from '../pages/Edit'
import ListList from '../pages/ListList'
import ListTable from '../pages/ListTable'
import Means from '../pages/Means'
import Login from '../pages/Login'
import Register from '../pages/Register'
import {Navigate} from "react-router-dom"

const BaseRouter = () => (
    <Router>
        <Routes>
            <Route path='/' element={<App/>}>
                {/* When configuring user access to /, redirect the path */}
                <Route path="/" element={<Navigate to="/listlist" />}></Route>
                <Route path='/edit' element={<Edit />}></Route>
                <Route path='/edit/:id' element={<Edit />}></Route>
                <Route path='/listlist' element={<ListList />}></Route>
                <Route path='/means' element={<Means />}></Route>
            </Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
        </Routes>
    </Router>
)

export default BaseRouter