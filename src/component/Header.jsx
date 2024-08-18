// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../style/header.css'


function Header() {
    return (
        <>
            <nav className='column'>
                <img className="logo" src="../public/favicon.ico" alt="logo"/>
                <div className="container">
                    <p className="navi" target='_blank' href=''>EmployeeTech</p>
                </div>
            </nav>
        </>
    )
}

export default Header