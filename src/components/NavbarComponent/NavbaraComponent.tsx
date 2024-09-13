import React, { useState } from 'react';
// import styles from './sideBarMenu.css';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav'
import './Navbarcomponent.scss';
import Sidebar from "react-bootstrap-sidebar-menu";
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
function NavBarComponent() {
    const [menu, setMenu] = useState("shop")
    const theme = "dark";
    return (
        <>
            <div className="navbar">
                <div className="nav-logo">
                    <img src={logo} alt='' />
                    <p>Shopper</p>

                </div>
                <ul className='nav-menu'>
                    <li onClick={() => { setMenu("shop") }}><Link to='/' style={{textDecoration:'none'}}>Shop</Link> {menu === 'shop' ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu("Men") }}><Link to='mens' style={{textDecoration:'none'}}>Men</Link> {menu === 'Men' ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu("Women") }}><Link to='women' style={{textDecoration:'none'}}>Women</Link> {menu === 'Women' ? <hr /> : <></>}</li>
                </ul>
                <div className="nav-login-cart">
                    <Link to='/login' style={{textDecoration:'none'}}><button>Login</button></Link>
                    <Link to='/cart' style={{textDecoration:'none'}}><img src={cart_icon} alt='' /></Link>
                    <div className="nav-cart-count">0</div>
                </div>
            </div>
        </>
    );
}

export default NavBarComponent;