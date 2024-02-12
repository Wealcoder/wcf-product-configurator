
import './App.css'
import './assets/css/admin.css'
import React, { useState } from 'react';
import {AddNewsnapshot, BearCounter, BearControls} from './components/admin/counter';
import Nav from './components/nav';
import useSettingsStore from './store/settings';
import { useEffect } from 'react';
import Modal from './components/admin/Modal';
import useModal from './hooks/modal';
import { ProductRender } from './views/product';

function Admin() {
  const [ModalOpen, setModalOpen , Heading, setHeading, Content , setContent] = useModal(false);
  const fetch = useSettingsStore((state) => state.fetch);
  
  useEffect(() => {
      fetch({url:'https://jsonplaceholder.typicode.com/todos/1'});
  });
 
  const addnew = function(){
    setHeading('Add Product Snapshot');
    setContent(<BearCounter />);
    setModalOpen(true)
  }
  
  const addnewslice = function(){
    setHeading('Add Product Slice');
    setContent(<><BearCounter /><BearControls /></>);
    setModalOpen(true)
  }
  
  return (
    <>
       <div>  
            <Nav />
            <h1>Backend</h1>           
            <div className="layout backend">
              <div className="body-content"> 
                <div className="wcf-product-samples">   
                    <ProductRender />                
                </div>  
                <AddNewsnapshot open={addnew} title="Add New+"/>                        
                <AddNewsnapshot open={addnewslice} title="Add NewSlice+"/>  
              </div>
            </div> 
            { /* Global Modal */ }
            {ModalOpen && (
              <Modal onClose={() => setModalOpen(false)}>
                <div className='wcf-pml-header'>
                   <h2 className="wcf-modal-heading">{Heading}</h2>
                </div>
                <div className='wcf-pml-content-area'>
                  {Content}
                </div>                      
              </Modal>
            )}
        </div>
    </>
  )
}

export default Admin
