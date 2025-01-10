import { Link, NavLink } from 'react-router-dom';

export default function AppNavList() {
    const navMenu = [
        {
            path: '/',
            title: 'Home'
        },
        {
            path: '/about',
            title: 'About'
        },
        {
            path: '/posts',
            title: 'Posts'
        },
        {
            path: '/posts/:id',
            title: 'Post Detail'
        }
    ]

    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark justify-content-center'>
            {navMenu.map(curLink => (
                <NavLink key={curLink.title} to={curLink.path} className='nav-link mx-3 text-white'>{curLink.title}</NavLink>
            ))
            }
            {/* <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/posts">Posts</NavLink> */}
        </nav >
    )

}