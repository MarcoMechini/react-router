import { Link, NavLink } from 'react-router-dom';

export default function AppNavList() {

    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/posts">Posts</NavLink>
        </nav>
    )

}