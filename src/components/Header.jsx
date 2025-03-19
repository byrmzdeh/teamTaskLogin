import React from 'react';
import { Link, NavLink } from 'react-router-dom';



const Header = () => {


  return (
    <header >
      <div className='container header-wrapper'>
        <Link to={'/'} className="devlinks">
          <img src="/src/assets/image/dev.png" alt="err" />
          <p>devlinks</p>
        </Link>
        <nav className='navBar'>
          <ul className='navList'>
            <li className='navList-item'><NavLink to={"/links"}><i className="fa-solid fa-link"></i><span>Links</span></NavLink></li>
            <li className='navList-item'><NavLink to={"/profile"}><i className="fa-regular fa-circle-user"></i><span>Profile Details</span></NavLink></li>
          </ul>

        </nav>
        <button className="preview-btn"><Link to={'/preview'}>Preview</Link></button>
      </div>

      <div className="res-container res-header">
        <Link to={'/'}>
          <img src="/src/assets/image/dev.png" alt="err" />
        </Link>

        <ul>
          <li><NavLink to={'/links'}><i className="fa-solid fa-link"></i></NavLink></li>
          <li><NavLink to={'/profile'}><i className="fa-regular fa-circle-user"></i></NavLink></li>
        </ul>

        <Link to={'/preview'} className='eye'>
          <i class="fa-solid fa-eye"></i>
        </Link>

      </div>
    </header>
  )
}

export default Header