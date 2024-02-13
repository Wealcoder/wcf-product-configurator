
import { ProductReadSingleLavel } from "./shot";
import useSettingsStore from "../store/settings";
import LoadingSpinner from "../components/admin/loading";
import { useShallow } from 'zustand/react/shallow'; 
import { useEffect } from 'react';
import HeaderNav from "../components/admin/header";
/*
* Table Of Components
* Render Product
* add new node
* Loaded 
* fetch api data
*/
 
  
export function ProductRender() {  
  
    const snapshots_nodes   = useSettingsStore((state) => state.snapshots_nodes);
    const api_update        = useSettingsStore(useShallow((state) => state.api_update)); 
    const fetch             = useSettingsStore(useShallow((state) => state.fetch));
    const current_lavel     = useSettingsStore((state) => state.current_lavel);
    
    useEffect(() => {
        fetch({url:'https://jsonplaceholder.typicode.com/todos/1'});
    });
   
    if(!api_update){
        return <LoadingSpinner data="Fetching data"/>; 
    } 
    
    let data = snapshots_nodes.getProductData();
    
    if(current_lavel != 0){
       data = snapshots_nodes.find(current_lavel);    
    }  
    
    return <>
        <div className="wcf-admin-product-render-area">
            <div className="wcf-product-child-list">
                 <HeaderNav />   
                <ProductReadSingleLavel shot_items={data} />                 
            </div>          
        </div>
    </>
}