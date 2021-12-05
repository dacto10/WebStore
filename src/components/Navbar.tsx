import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/icons/logo.svg'
import { useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [search, setSearch] = useState<string>(new URLSearchParams(location.search).get("s") ?? "");
    
    const handleSearch = () => {
        search.trim() !== "" && navigate(`/?s=${search}`);
    }

    return (
        <div className="navbar">
            <Link to={'/'} className="navbar__logo">
                <img src={ logo } alt="" />
                <span>WebStore</span>
            </Link>
            <div className="navbar__search search">
                <input type="text" placeholder="Search for a product..." value={search} onChange={e => setSearch(e.target.value)}/>
                <button type="button" onClick={handleSearch}>
                    <FontAwesomeIcon icon={['fas', 'search']}/>
                </button>
            </div>
            <Link to={'/cart'} className="navbar__cart">
                <FontAwesomeIcon icon={['fas', 'shopping-cart']}/>
                <span>Cart</span>
            </Link>
            <div className="navbar__user">
                <FontAwesomeIcon icon={['fas', 'user']}/>
                <span>username</span>
            </div>
            <div className="navbar__dropdown">
                <Link to={'/cart'}>
                    <span>My Products</span>
                </Link>
                <Link to={'/cart'}>
                    <span>Liked Products</span>
                </Link>
                <Link to={'/login'}>
                    <span>Logout</span>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;