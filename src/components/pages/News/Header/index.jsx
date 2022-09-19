import React from 'react';
import logo from '../../../../images/logo.svg'
import './styles.scss'
function Header(props) {
    return (
        <>
            <img className='image-logo' src={logo} alt='logo' />
        </>
    );
}

export default Header;