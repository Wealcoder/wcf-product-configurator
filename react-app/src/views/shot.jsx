import { useState } from "react";
import useSettingsStore from "../store/settings";

function AddOrUpdateNode(){ 
  const current_lavel     = useSettingsStore((state) => state.current_lavel);
  const addNewProductnode     = useSettingsStore((state) => state.addNewProductNode);
  const [title, setTitle] = useState('');
  const [url, setUrl]     = useState('');
  const updatedChildren = (value) => {
    
    if(title.length > 3 && url.length > 8){      
      addNewProductnode(value,{name:title,url})
    }
     
  }
  
  return <>   
    <div className="wcf-node-form-area">
      <div className="item">
        <input value={title} onChange={(event) => {
          setTitle(event.target.value);
        }} type="text" placeholder="Write Frame Title"/>        
      </div>
      <div className="item">
        <input onChange={(event) => {
          setUrl(event.target.value);
        }} type="text" placeholder="Provide Frame Url"/>       
      </div>
    </div>
    <div><button onClick={() => updatedChildren(current_lavel)}>Submit</button></div>
  </>
}

export function ScreenShot({settings}){  
   return <>
    <h3 className="slice-title">{settings.data.name}</h3>
    <div className="wcf-thumbarae">   
      <div className="wcf-node-actions">
        {<Openformore settings={settings} /> }
        {<Edit settings={settings} /> }
        {<Remove settings={settings} /> }
      </div>     
      <img src="https://dummyimage.com/300" />
    </div>
    <div className="setting-data">
        <div className="price">30+</div>
        <div className="attr-color">Red</div>
    </div>
    </>
}

export function AddMoreNode({data}){  
  const ActivateModal       = useSettingsStore((state) => state.ActivateModal); 
  const setModalContent     = useSettingsStore((state) => state.setModalContent); 
  const setModalHeading     = useSettingsStore((state) => state.setModalHeading); 
  const setCurrentLavel     = useSettingsStore((state) => state.setCurrentLavel); 
  
  const goForInnerElement = function(value){
    setModalHeading('ADD More frame here');
    setModalContent(<AddOrUpdateNode/>);
    ActivateModal(true)
    setCurrentLavel(value)
  }
  return <>  
  <div className="wcf-addmore-area">   
    <div className="wcf-addmorenode-actions">
        <button onClick={() => goForInnerElement(data.key)}>Add More</button>         
    </div> 
  </div>
  </>
}

/* Nested Button */
function Openformore({settings}){
  const CloseModal     = useSettingsStore((state) => state.CloseModal); 
  const setCurrentLavel     = useSettingsStore((state) => state.setCurrentLavel); 
  const goforinnerelement = function(current){
    setCurrentLavel(current);   
    CloseModal(false);
  }
  return <button className="wcf-addmore-shape" onClick={() => goforinnerelement(settings.key)}>Open</button>
}

function Edit({settings}){
  const goforinnerelement = function(current){
    console.log(settings.key);
  }
  return <button className="wcf-edit-current-node" onClick={goforinnerelement}>Edit</button>
}
function RemoveButton({confirmhandler,closehandler}){   
  return <>
    <button className="wcf-edit-current-node" onClick={confirmhandler}>Yes</button>
    <button className="wcf-edit-current-node" onClick={closehandler}>No</button>
  </>
}
function Remove({settings}){
  const removeProductNode   = useSettingsStore((state) => state.removeProductNode);
  const ActivateModal       = useSettingsStore((state) => state.ActivateModal);
  const setModalContent     = useSettingsStore((state) => state.setModalContent); 
  const setModalHeading     = useSettingsStore((state) => state.setModalHeading);
  
  const CloseModal     = useSettingsStore((state) => state.CloseModal); 
  const close_handler = function(){
    CloseModal(false);
  }
  
  const confirmdlete = function(current){
      removeProductNode(current);    
      CloseModal(false);
  }
  const nodedelete = function(pkey){
        setModalHeading('Would you like to remove the node?');
        setModalContent(<RemoveButton confirmhandler={() => confirmdlete(pkey)} closehandler={close_handler}/>);
        ActivateModal(true)    
  }
  return <button className="wcf-edit-current-node" onClick={() => nodedelete(settings.key)}>Remove</button>
}
/* Recusrsive render all nested element */
export function ProductRead({ shot_items }) {
    return (
      <ul className="tree-main">      
        {shot_items.children.map((child) => (
          <li key={child.key}>     
            <ScreenShot data={child.data}/>
            {shot_items.children && <ProductRead shot_items={child} /> }
          </li>
        ))}
      </ul>
    );
}

export function ProductReadSingleLavel({ shot_items }) {
 
  return (
    <ul className="tree-main"> 
      <li><AddMoreNode data={shot_items}/></li> 
      {shot_items.children.map((child) => (
        <li key={child.key}> 
             <ScreenShot settings={child}/>            
        </li>
      ))}
    </ul>
  );
}

