import React from 'react'
import './Style.css';

import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <ul>
                <NavLink to='/' className="active" ><li>Home</li></NavLink>
                <NavLink to='/student' className="active"> <li>Student</li></NavLink>
                <NavLink to='/contact' className="active"><li>Contact</li></NavLink>
               
                {/* <NavLink to='/'>Home</NavLink>
                <NavLink to='/student'> Student</NavLink>
                <NavLink to='/contact'>Contact</NavLink> */}
            </ul>
        </div>
    )
}

export default Header
