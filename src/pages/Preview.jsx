import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";

const Preview = () => {
  return (
    <div className='preview'>
      <div className="preview-head">
        <div className="nav">
          <Link to={'/profile'}><button>Back to Editor</button></Link>
          <button className='share'>Share Link</button>
        </div>


        <div className="phone">
          <div className="info">
            <div className='empty'></div>
            <h2>Ben Wright</h2>
            <p>ben@example.com</p>
          </div>

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
        
          </ul>

        </div>

      </div>

    </div>
  )
}

export default Preview
