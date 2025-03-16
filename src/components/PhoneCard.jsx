import React from 'react';
import phone from "../assets/image/Subtract.png";
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";


const PhoneCard = () => {


    return (
        <div className='phoneCard-wrapper d-flex'>
            <div className='phone-image-wrapper'>
                <img src={phone} alt="phone" />
                <div className="phone-info f-column">
                    <div className="user f-column">
                        <div className="profile-photo">

                            {/* <img 
                                src=""
                                alt="profile-photo"
                            /> */}
                        </div>
                        <div className="user-info f-column">
                            <div className='profile-name'></div>
                            <div className='profile-email'></div>
                        </div>
                    </div>
                    <div className="profile-links d-flex">
                        <ul className='f-column'>
                            <li><Link>
                                <div className='link-name-and-icon'>
                                    <span className='link-icon'></span>
                                    <span className='link-name'></span>
                                </div>
                                <div className="arrow">
                                    <FaArrowRight />
                                </div>
                            </Link>
                            </li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhoneCard;
