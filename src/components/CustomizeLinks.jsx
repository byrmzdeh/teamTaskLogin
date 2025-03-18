
import { useState } from 'react';
import MyCustomSelect from './MyCustomSelect';
import { FaLink } from "react-icons/fa6";

const CustomizeLinks = () => {
  const [userLink, setUserLink] = useState("https://www.github.com/johnappleseed");

  const handleRedirect = () => {
    let finalLink = userLink.startsWith("http") ? userLink : "https://" + userLink;
    window.open(finalLink, "_blank");
  };
  return (
    <div className='customize-links-wrappers'>

      <div className="customize-container">
        <div className="customize">
          <div className="customize-head">
            <h2>Customize your links</h2>
            <p>Add/edit/remove links below and then share all your profiles with the world!</p>
          </div>
          <div className="customize-links-body">
            <button className='add-link-btn'>+ Add new link</button>

            <div className="links">
              {/* <div className="start-helper-area">
              <div className='start-helper f-column'>
                <img src={frame} alt="links" />
                <div className="helper-text f-column">
                  <h3>Let’s get you started</h3>
                  <p>Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!</p>
                </div>
              </div>
            </div> */}
              <ul className='links-area-list'>
                <li className='link-item'>
                  <div className='linkNumber-and-remove'>
                    <div className='link-name'>
                      <div className='double-line'>
                        <span></span>
                        <span></span>
                      </div>
                      <p className='link-number'>Link #1</p>
                    </div>
                    <p className="remove">
                      remove
                    </p>
                  </div>
                  <div className='dropdown'>
                    <p className='platform'>Platform</p>
                    <MyCustomSelect />
                  </div>
                  <div className="link">
                    <p className='link-title'>Link</p>
                    <button className='link-button' onClick={handleRedirect}><FaLink className='link-icon' /> <input
                      type="text"
                      value={userLink}
                      onChange={(e) => setUserLink(e.target.value)}
                      className="link-input"
                    /></button>
                  </div>
                </li>
                <li className='link-item'>
                  <div className='linkNumber-and-remove'>
                    <div className='link-name'>
                      <div className='double-line'>
                        <span></span>
                        <span></span>
                      </div>
                      <p className='link-number'>Link #1</p>
                    </div>
                    <p className="remove">
                      remove
                    </p>
                  </div>
                  <div className='dropdown'>
                    <p className='platform'>Platform</p>
                    <MyCustomSelect />
                  </div>
                  <div className="link">
                    <p className='link-title'>Link</p>
                    <button className='link-button' onClick={handleRedirect}><FaLink className='link-icon' /> <input
                      type="text"
                      value={userLink}
                      onChange={(e) => setUserLink(e.target.value)}
                      className="link-input"
                    /></button>
                  </div>
                </li>
                <li className='link-item'>
                  <div className='linkNumber-and-remove'>
                    <div className='link-name'>
                      <div className='double-line'>
                        <span></span>
                        <span></span>
                      </div>
                      <p className='link-number'>Link #1</p>
                    </div>
                    <p className="remove">
                      remove
                    </p>
                  </div>
                  <div className='dropdown'>
                    <p className='platform'>Platform</p>
                    <MyCustomSelect />
                  </div>
                  <div className="link">
                    <p className='link-title'>Link</p>
                    <button className='link-button' onClick={handleRedirect}><FaLink className='link-icon' /> <input
                      type="text"
                      value={userLink}
                      onChange={(e) => setUserLink(e.target.value)}
                      className="link-input"
                    /></button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="save">
        <button className='save-btn'>Save</button>
      </div>

    </div>
  )
}

export default CustomizeLinks