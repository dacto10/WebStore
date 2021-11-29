import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/icons/logo.svg'

export default () => {
    const [activeDropdown, setActiveDropdown] = useState<Boolean>(false);
    
    return (
        <div className="navbar">
            <Link to={'/'} className="navbar__logo">
                    <img src={ logo } alt="" />
                    <span>WebStore</span>
            </Link>
            <div className="navbar__search search">
                <input type="text" placeholder="Search for a product..." />
                <button type="button">
                    <FontAwesomeIcon icon={['fas', 'search']}/>
                </button>
            </div>
            <Link to={'/cart'} className="navbar__cart">
                <FontAwesomeIcon icon={['fas', 'shopping-cart']}/>
                <span>My Cart</span>
            </Link>
            <div className="navbar__user" onClick={() => setActiveDropdown(!activeDropdown)}>
                <FontAwesomeIcon icon={['fas', 'user']}/>
                <span>username</span>
            </div>
            <div className="navbar__dropdown" style={{display: activeDropdown === true ? 'flex' : 'none'}}>
                    <Link to={'/cart'}>
                        <span>My Products</span>
                    </Link>
                    <Link to={'/login'}>
                        <span>Logout</span>
                    </Link>
                </div>
        </div>
    )
}