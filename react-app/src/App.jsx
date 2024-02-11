import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div>
      
            <ul className="menu">
              <li>
                <a href={`/admin`}>Backend</a>
              </li>
              <li>
                <a href={`/`}>Frontend</a>
              </li>
            </ul>
            <h1>#1 WINDOW REPLACEMENT SUPPLIER</h1>
            {/* <div class="wcf-product-steps">
              <ul>
                <li> 01 </li>
                <li> 02 </li>
                <li> 02 </li>
              </ul>
            </div> */}
            <div className="layout">
              <div className="sidebar-column"> 
                <h4> YOUR CONFIGURATION </h4>
                <div className="wcf-sidebar-media">
                  <img id="product-image" alt="selected product" src="https://clearmaxwindows.com/wp-content/plugins/clearmaxwindows/assets/images/windows/single-hung%20-%20no-grid%20-%20white.png" />
                </div>
                <div className="wcf-sidebar-product-desc">
                  <div className="feature-list" id="wcf-product-feature-list">
                    <span> Window Type: Picture </span>
                    <span> Color: Red </span>
                  </div>
                </div>
              </div>
              <div className="body-content"> 
                <div className="wcf-product-samples"> 
                  <div className="column-items">
                    <label> 
                      <img  alt="selected product" src="http://localhost:8080/development/wp-content/uploads/2023/12/blog-4-730x475.jpg" />
                      <input type="checkbox" name="name" />
                    </label>
                   
                  </div>
                  <div className="column-items">
                    <label> 
                      <img id="product-image" alt="selected product" src="http://localhost:8080/development/wp-content/uploads/2023/12/blog-4-730x475.jpg" />
                      <input type="checkbox" name="name" />
                    </label>
                  </div>
                  <div className="column-items">
                    <label> 
                      <img id="product-image" alt="selected product" src="http://localhost:8080/development/wp-content/uploads/2023/12/blog-4-730x475.jpg" />
                      <input type="checkbox" name="name" />
                    </label>
                  </div>
                  <div className="column-items">
                    <label> 
                      <img id="product-image" alt="selected product" src="http://localhost:8080/development/wp-content/uploads/2023/12/blog-4-730x475.jpg" />
                      <input type="checkbox" name="name" />
                    </label>
                  </div>
                  
                  <div className="column-items">
                    <label> 
                      <img id="product-image" alt="selected product" src="http://localhost:8080/development/wp-content/uploads/2023/12/blog-4-730x475.jpg" />
                      <input type="checkbox" name="name" />
                    </label>
                  </div>
                  <div className="column-items">
                    <label> 
                      <img id="product-image" alt="selected product" src="http://localhost:8080/development/wp-content/uploads/2023/12/blog-4-730x475.jpg" />
                      <input type="checkbox" name="name" />
                    </label>
                  </div>
                </div>
                <div id="nextPrev" className="product-nav-button">
                  <button type="button" id="wcf-product-prevBtn">Back</button>
                  <button type="button" id="wcf-product-nextBtn">Next</button>
                </div>
              </div>
            </div>   
          </div>
    </>
  )
}

export default App
