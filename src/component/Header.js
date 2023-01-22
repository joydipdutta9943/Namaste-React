import React from 'react'
import Logo from '../img/Foodies.png'


const Title = () => (
    <a href="/">
        <img className="logo" alt="logo" src={Logo} />
    </a>
);
function Header() {
    return (
        <div className='header'>
            <Title />
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Header