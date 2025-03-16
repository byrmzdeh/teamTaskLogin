import React from 'react';
import frame from "../assets/image/Frame 246.png"

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
          <div className="links">
            <img src={frame} alt="links" />
          </div>
        </div>
      </div>
      <div className="save">
        <button>Save</button>
      </div>
      </div>

    </div>
  )
}

export default CustomizeLinks