import React from 'react';
import frame from "../assets/image/Group 273.png"

const CustomizeLinks = () => {
  return (
    <div className='customize-links-wrappers'>

      <div className="customize-container">
        <div className="customize">
          <div className="customize-head">
            <h2>Customize your links</h2>
            <p>Add/edit/remove links below and then share all your profiles with the world!</p>
          </div>
          <div className="customize-links-body">
            <button>+ Add new link</button>
            <div className="link-setup-area">
              <div className='start-helper f-column'>
                <img src={frame} alt="links" />
                <div className="helper-text f-column">
                  <h3>Let’s get you started</h3>
                  <p>Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!</p>
                </div>
              </div>
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