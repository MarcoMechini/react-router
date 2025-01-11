import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

export default function AppNavList() {
    const navigate = useNavigate();
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
        }
    ]

    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark justify-content-center'>
            {navMenu.map(curLink => (
                <NavLink key={curLink.title} to={curLink.path} className='nav-link mx-3 text-white'>{curLink.title}</NavLink>
            ))
            }
            <button onClick={() => {
                navigate(-1);
            }}>Precedente</button>

            <button onClick={() => {
                navigate(+1);
            }}>Successivo</button>
        </nav >
    )

}