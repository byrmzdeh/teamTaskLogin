import React from 'react';
import ph_link from "../assets/image/Vector_1.png"
import profile_details from "../assets/image/Vector.png"
import { Link, useNavigate } from 'react-router-dom';



const Header = () => {
    const navigate = useNavigate(); 

    const handlePreviewClick = () => {
      navigate('/links'); 
    };
  return (
    <header className='header'>
        <div className='container header-wrapper'>
        <div className="devlinks">
                <img src="/src/assets/image/dev.png" alt="err" />
                <p>devlinks</p>
            </div>
            <nav className='navBar'>
                <ul className='navList'>
                    <li className='navList-item'><Link to={"/links"}><img src={ph_link} alt="link-icon" /><span>Links</span></Link></li>
                    <li className='navList-item'><Link to={"/links"}><img src={profile_details} alt="profile_details-icon"/><span>Profile Details</span></Link></li>
                </ul>
                
            </nav>
            <button className="preview-btn" onClick={handlePreviewClick}>Preview</button>
        </div>
    </header>
  )
}

export default Header