import React, { use } from 'react';
import phone from "../assets/image/Subtract.png";
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import phone_rectangle from "../assets/image/Rectangle 15.png"


const PhoneCard = ({ name, surname, email }) => {
    console.log("PhoneCard props:", { name, surname, email });

    return (
        <div className='phoneCard-wrapper d-flex'>
            <img src={phone_rectangle} alt="phone_rectangle" className='phone-rectangle' />
           <div className='phone-image-wrapper'>
                <img src={phone} alt="phone" />
                <div className="phone-info f-column">
                    <div className="user f-column">
                        <div className="profile-photo">

                            <img 
                                src=""
                                alt="profile-photo"
                            />
                        </div>
                        <div className="user-info f-column">
                            <div>
                                <span >{name}</span>
                                <span>{surname}</span>
                            </div>
                            <div className='profile-email'>{email}</div>
                        </div>
                    </div>
                    <div className="profile-links d-flex">
                        <ul className='f-column'>
                            <li>
                                <Link>
                                <div className='link-name-and-icon'>
                                    <span className='link-icon'><TbBrandGithubFilled /></span>
                                    <span className='link-name'>GitHub</span>
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
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhoneCard;
