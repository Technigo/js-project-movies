import React from 'react'
import { Link} from 'react-router-dom'
import { Link, NavLink } from 'react-router-dom'
export const Nav () => {
    return {
        <nav>
            <h1>
                <NavLink to="/">Movie Company</Link>
            </h1>
            <h1>Movie Company </h1>
            <ul>
                <li>
                    <NavLink to="/"about">About</link>
                    </li>
                <li>
                <Link to="/Contact">Contact</Link>
                </li>

            </ul>
    }</nav>
}