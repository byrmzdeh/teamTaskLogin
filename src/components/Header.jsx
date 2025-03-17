import React from 'react';
import ph_link from "../assets/image/Vector_1.png"
import profile_details from "../assets/image/Vector.png"
import { Link, NavLink, useNavigate } from 'react-router-dom';



const Header = () => {
  const navigate = useNavigate();

  const handlePreviewClick = () => {
    navigate('/links');
  };
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
        <button className="preview-btn" onClick={handlePreviewClick}>Preview</button>
      </div>

      <div className="res-container res-header">
        <Link to={'/'}>
          <img src="/src/assets/image/dev.png" alt="err" />
        </Link>

        <ul>
          <li><NavLink to={'/links'}><i className="fa-solid fa-link"></i></NavLink></li>
          <li><NavLink to={'/profile'}><i className="fa-regular fa-circle-user"></i></NavLink></li>
        </ul>

        <Link to={'/'} className='eye'>
          <i class="fa-solid fa-eye"></i>
        </Link>

      </div>
    </header>
  )
}

export default Header