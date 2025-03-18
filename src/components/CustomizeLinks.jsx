
import MyCustomSelect from './MyCustomSelect';
import { FaLink } from "react-icons/fa6";

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
                      <div>
                        <span></span>
                        <span></span>
                      </div>
                      <p>Link #1</p>
                    </div>
                    <p className="remove">
                      remove
                    </p>
                  </div>
                  <div className='dropdown'>
                    <p>Platform</p>
                    <MyCustomSelect />
                  </div>
                  <div className="link-button">
                    <p>Link</p>
                    <button className='link-button'><FaLink />e.g. https://www.github.com/johnappleseed</button>
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