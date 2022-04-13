import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Cart from './Pages/cart';
import Cards from './Components/Cards';
import Loginpage from './Pages/Loginpage';
import SignUp from './Pages/SignUp';
import Cardd from './Components/Cardd';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import { List } from '@material-ui/core';
import { padding } from '@mui/system';
const navStyle = { display: 'flex', float: 'right' }
const liStyle = { marginRight: 20, listStyle: 'none', }
const btnStyle = { margin: '8 0' }
function Header() {
    return (
        <Router>
            <div  >
                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/Cart" element={<Cart />} />
                    <Route path="/Cards" element={<Cards />} />
                    <Route path="/Cardd" element={<Cardd />} />
                    <Route path="/Loginpage" element={<Loginpage />} />
                    <Route path="/SignUp" element={<SignUp />} />
                </Routes>
            </div>
        </Router>
    );
}

export default Header;