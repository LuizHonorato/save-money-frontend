import React from 'react'
import NavBar from './navbar'

export default props => (
    <header className='main-header'>
        <a href='/#/' className='logo'>
            <span className='logo-mini'><b>Sav</b>$</span>
            <span className='logo-lg'>
                <i className='fa fa-money'></i>
                <b> Save</b> Money
            </span>
        </a>
        <nav className='navbar navbar-static-top'>
            <a href className='sidebar-toggle' data-toggle='offcanvas'></a>
            <NavBar />
        </nav>
    </header>
)