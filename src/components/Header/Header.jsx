import React from 'react'
import '@/components/Header/Header.scss'
import { Link } from 'react-router-dom'
import { Home, ShoppingBag } from 'lucide-react'

const Header = () => {
  return (
    <>
        <header className="header">
        <div className="container">
            <div className="header__content">
                <nav className="navbar">
                    <ul className="navbar__list">
                        <span>
                            <Link to='/' className="navbar__list-link">HOME
                            <Home className='navbar__list-icon'/>
                            </Link>
                        </span>
                    </ul>
                </nav>
                <Link to='/products' className="header__logo">SHOP.UZ
                
                <ShoppingBag className='header__logo-bag'/>
                </Link>
            </div>
        </div>
    </header>
    
    </>
  )
}

export default Header