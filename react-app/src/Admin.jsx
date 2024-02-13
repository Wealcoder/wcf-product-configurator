
import './App.css'
import './assets/css/admin.css'
import Nav from './components/nav';
import Modal from './components/admin/Modal';
import { ProductRender } from './views/product';
import useSettingsStore from './store/settings';
function Admin() {
  const active_modal        = useSettingsStore((state) => state.active_modal);   
  const CloseModal          = useSettingsStore((state) => state.CloseModal);   
  const Heading             = useSettingsStore((state) => state.ModalHeading);   
  const Content             = useSettingsStore((state) => state.ModalContent);   

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
              </div>
            </div> 
            { /* Global Modal */ }
            {active_modal == 1 && (
              <Modal onClose={() => CloseModal(false)}>
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
