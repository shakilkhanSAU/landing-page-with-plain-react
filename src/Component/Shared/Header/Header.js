import React from 'react';
import './Header.css'
import logo from '../../../images/logo.jpg';

const Header = () => {
    return (
        <header>
            <nav style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <div>
                    <img className='brand-logo' src={logo} alt="" />
                </div>
                <input type="checkbox" name="" id="check" />
                <label for="check" class="manu-btn"><i class="fas fa-bars"></i></label>
                <ul className='nav-items'>
                    <li>
                        <a className='active' href="/">About</a>
                    </li>
                    <li><a href="/">Helps</a></li>
                    <li><a href="/">Features</a></li>
                    <li><a href="/">Sign Up</a></li>
                    <li><a href='/' className='hero-button'>Request Demo </a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
