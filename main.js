import './style.css'
import { setupCounter } from './counter.js'

const configs = {
    "name" : "Mobile Cover",
    "version" : 1.0
}
console.log(configs);
document.querySelector('#app').innerHTML = `
  <div>     
    <h1>Product Configurator App!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>   
  </div>
`

setupCounter(document.querySelector('#counter'))
