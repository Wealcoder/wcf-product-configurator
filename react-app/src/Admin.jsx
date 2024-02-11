
import './App.css'
import {BearCounter, BearControls} from './components/admin/counter';
function Admin() {
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
            <h1>Backend</h1>           
            <div className="layout backend">
              <div className="body-content"> 
                <div className="wcf-product-samples"> 
                       <BearCounter />   
                       <BearControls />
                </div>               
              </div>
            </div>   
          </div>
    </>
  )
}

export default Admin
