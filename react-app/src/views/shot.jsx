import { useEffect, useRef, useState } from "react";
import useSettingsStore from "../store/settings";

function UpdateNode({pkey}){

  const snapshots_nodes = useSettingsStore((state) => state.snapshots_nodes);  
  let nameRef = useRef();
  let urlRef = useRef();
  let updateable_data = {};
  if(pkey !=undefined){
    updateable_data = snapshots_nodes.find(pkey);   
    console.log( updateable_data.data.name );
    //nameRef.current.value = updateable_data.data.name;
   // urlRef.current.value = updateable_data.data.url;
  }
  const updatedChildren = () => {    
    updateable_data.data.name = nameRef.current.value;
    updateable_data.data.url = urlRef.current.value;
  }

  return <>   
    <div className="wcf-node-form-area">
      <div className="item">
        <input ref={nameRef} onChange={(event) => {
          nameRef.current.value = event.target.value;
        }} type="text" placeholder="Write Frame Title"/>        
      </div>
      <div className="item">
        <input onChange={(event) => {
            updateable_data.data.url = event.target.value;
        }} type="text" ref={urlRef} placeholder="Provide Frame Url"/>       
      </div>
    </div>
    <div><button onClick={() => updatedChildren()}>Update</button></div>
  </>
}
function AddOrPushNode(){ 
  const current_lavel     = useSettingsStore((state) => state.current_lavel);
  const addNewProductnode = useSettingsStore((state) => state.addNewProductNode);
 
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
    setModalContent(<AddOrPushNode/>);
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
      
  const ActivateModal       = useSettingsStore((state) => state.ActivateModal); 
  const setModalContent     = useSettingsStore((state) => state.setModalContent); 
  const setModalHeading     = useSettingsStore((state) => state.setModalHeading);

  const editHandler = function(current){    
    setModalHeading('Edit');
    setModalContent(<UpdateNode pkey={current} />);
    ActivateModal(true)   
  }
  return <button className="wcf-edit-current-node" onClick={() => editHandler(settings.key)}>Edit</button>
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

