import './style.css'
import { setupLayout } from './layout.js'

const configs = {
    "name" : "Mobile Cover",
    "version" : 1.0,
    "steps" : [
      {
        "name" : "Step One",
        "pic_title" : "Huge",
        "tooltips" : "Some helpfull instruction",
        "price" : 100,
        "step" : 1,
        "image_src" : "https://clearmaxwindows.com/wp-content/uploads/2021/08/single-hung-300x300.png",
        "parent_id" : null
      },      
      {
        "name" : "Step One",
        "price" : 89,
        "pic_title" : "Huge",
        "tooltips" : "Some helpfull instruction",
        "step" : 1,
        "image_src" : "https://clearmaxwindows.com/wp-content/uploads/2021/08/picture-300x300.png",
        "parent_id" : null
      },      
      {
        "name" : "Step One",
        "price" : 89,
        "pic_title" : "Huge",
        "tooltips" : "Some helpfull instruction",
        "step" : 1,
        "image_src" : "https://crowdytheme.com/wp/info/doctor/wp-content/uploads/sites/2/2023/11/doctor-about-1.jpg",
        "parent_id" : null
      },
      
      {
        "name" : "Step two",
        "price" : 89,
        "pic_title" : "Huge",
        "tooltips" : "Some helpfull instruction",
        "step" : 2,
        "image_src" : "https://crowdytheme.com/wp/info/doctor/wp-content/uploads/sites/2/2023/11/doctor-about-1.jpg",
        "parent_id" : null
      },
      
      {
        "name" : "Step two",
        "price" : 189,
        "pic_title" : "Huge",
        "tooltips" : "Some helpfull instruction",
        "step" : 2,
        "image_src" : "https://crowdytheme.com/wp/info/doctor/wp-content/uploads/sites/2/2023/11/doctor-about-1.jpg",
        "parent_id" : null
      },
      
      {
        "name" : "Step two",
        "price" : 189,
        "pic_title" : "Huge",
        "tooltips" : "Some helpfull instruction",
        "step" : 2,
        "image_src" : "https://crowdytheme.com/wp/info/doctor/wp-content/uploads/sites/2/2023/11/doctor-about-1.jpg",
        "parent_id" : null
      }
      
    ]
}

document.querySelector('#app').innerHTML = `
  <div>     
    <h1>#1 WINDOW REPLACEMENT SUPPLIER</h1>
    <div class="wcf-product-steps">
      <ul>
        <li> 01 </li>
        <li> 02 </li>
        <li> 02 </li>
      </ul>
    </div>
    <div class="layout">
      <div class="sidebar-column"> 
        <h4> YOUR CONFIGURATION </h4>
        <div class="wcf-sidebar-media">
          <img id="product-image" alt="selected product" src="https://clearmaxwindows.com/wp-content/plugins/clearmaxwindows/assets/images/windows/single-hung%20-%20no-grid%20-%20white.png">
        </div>
        <div class="wcf-sidebar-product-desc">
          <div class="feature-list" id="wcf-product-feature-list">
            <span> Window Type: Picture </span>
            <span> Color: Red </span>
          </div>
        </div>
      </div>
      <div class="body-content"> 
        <div class="wcf-product-samples"> 
          <div class="column-items">
            <label> 
              <img  alt="selected product" src="http://localhost:8080/development/wp-content/uploads/2023/12/blog-4-730x475.jpg">
              <input type="checkbox" name="name" />
            </label>
           
          </div>
          <div class="column-items">
            <label> 
              <img id="product-image" alt="selected product" src="http://localhost:8080/development/wp-content/uploads/2023/12/blog-4-730x475.jpg">
              <input type="checkbox" name="name" />
            </label>
          </div>
          <div class="column-items">
            <label> 
              <img id="product-image" alt="selected product" src="http://localhost:8080/development/wp-content/uploads/2023/12/blog-4-730x475.jpg">
              <input type="checkbox" name="name" />
            </label>
          </div>
          <div class="column-items">
            <label> 
              <img id="product-image" alt="selected product" src="http://localhost:8080/development/wp-content/uploads/2023/12/blog-4-730x475.jpg">
              <input type="checkbox" name="name" />
            </label>
          </div>
          
          <div class="column-items">
            <label> 
              <img id="product-image" alt="selected product" src="http://localhost:8080/development/wp-content/uploads/2023/12/blog-4-730x475.jpg">
              <input type="checkbox" name="name" />
            </label>
          </div>
          <div class="column-items">
            <label> 
              <img id="product-image" alt="selected product" src="http://localhost:8080/development/wp-content/uploads/2023/12/blog-4-730x475.jpg">
              <input type="checkbox" name="name" />
            </label>
          </div>
        </div>
        <div id="nextPrev" class="product-nav-button">
          <button type="button" id="wcf-product-prevBtn">Back</button>
          <button type="button" id="wcf-product-nextBtn">Next</button>
        </div>
      </div>
    </div>   
  </div>
`

setupLayout(document.querySelector('#counter'))
