import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Product from './Pages/Product';
import Loginpage from './Pages/Loginpage';
import SignUp from './Pages/SignUp';
import Button from '@mui/material/Button';
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
                <nav >
                    <ul style={navStyle}>
                        <li style={liStyle}>
                            <Link to="/Home">Home</Link>
                        </li>
                        <li style={liStyle}>
                            <Link to="/about">About</Link>
                        </li>
                        <li style={liStyle}>
                            <Link to="/Product">Product</Link>
                        </li>
                        <li style={liStyle}>
                            <Button type="submit" variant="contained" color="success" style={btnStyle} fullWidth href="/Loginpage"> Sign-in </Button>
                        </li>
                        <li style={liStyle}>
                            <Button type="submit" variant="contained" color="success" style={btnStyle} fullWidth href="/SignUp"> Sign-up </Button>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/Product" element={<Product />} />
                    <Route path="/Loginpage" element={<Loginpage />} />
                    <Route path="/SignUp" element={<SignUp />} />
                </Routes>
            </div>
        </Router>
    );
}

//   function Home() {
//     return <h2>Home</h2>;
//   }

//   function About() {
//     return <h2>About</h2>;
//   } 

export default Header;