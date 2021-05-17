import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="Home">Home</Link>
                    </li>
                    <li>
                        <Link to="Shop">Shop</Link>
                    </li>
                    <li>
                        <Link to="Buy">Buy</Link>
                    </li>
                    <li>
                        <Link to="Profile">ProfileImage</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
