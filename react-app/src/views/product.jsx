
import { ProductRead } from "./shot";
import useSettingsStore from "../store/settings";
/*
* Table Of Components
* Render Product
* add new node
*/

export function ProductRender() {   
    const snapshots_nodes = useSettingsStore((state) => state.snapshots_nodes);

      // Print snapshots_nodes as html      
      //var search_data = snapshots_nodes.find(3);     
      //var remove = snapshots_nodes.remove(3);     
    return <>
        <div className="wcf-admin-product-render-area">
            <div className="wcf-product-child-list">              
                 <ProductRead shot_items={snapshots_nodes.getProductData()} />
            </div>          
        </div>
    </>
}