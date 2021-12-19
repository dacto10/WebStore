import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/icons/logo.svg'
import { useLocation } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const { removeUser, userState } = useContext(UserContext);

    const handleLogout = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
        e.preventDefault();
        removeUser();
        navigate("/login");
    }

    return (
        <div className="navbar">
            <Link to={'/'} className="navbar__logo">
                <img src={ logo } alt="" />
                <span>WebStore</span>
            </Link>
            <Link to={'/cart'} className="navbar__cart">
                <FontAwesomeIcon icon={['fas', 'shopping-cart']}/>
                <span>Cart</span>
            </Link>
            <div className="navbar__user">
                <FontAwesomeIcon icon={['fas', 'user']}/>
                <span>{userState.user.username}</span>
            </div>
            <div className="navbar__dropdown">
                <Link to={'/selling'}>
                    <span>My Products</span>
                </Link>
                <Link to={'/login'} onClick={e => handleLogout(e)}>
                    <span>Logout</span>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
