import React from 'react'
import { Link, NavLink } from 'react-router-dom'
export const Nav = () => {
    return (
        <nav>
            <h1>
                <NavLink to="/">Movie Company</NavLink>
            </h1>
            <ul>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}