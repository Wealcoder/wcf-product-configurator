
import { Wcf_Custom_Product } from "../../components/custom_product";
import { uniqueId } from "../../components/utils";
/*
* Store Product Settings in browser
* @since 2024-02-11
* Update To Server using api
* Take Latest settings from Server using api
*/
const nums = [
       {
          id: 1,
          parentId: null,
          data: {
              name: 'Parent'
          }
      },
    //   {
    //       id: 3,
    //       parentId: 1,
    //       data: {
    //           name: 'shot 3'
    //       }
    //   },
    //   {
    //     id: 33,
    //     parentId: 1,
    //     data: {
    //         name: 'shot 3- 4'
    //     }
    //   },
    //   {
    //     id: 34,
    //     parentId: 1,
    //     data: {
    //         name: 'shot 3- 34'
    //     }
    //   },
    //   {
    //     id: 35,
    //     parentId: 1,
    //     data: {
    //         name: 'shot 3- 35'
    //     }
    //   },
    //   {
    //       id: 2,
    //       parentId: 1,
    //       data: {
    //           name: 'shot 2'
    //       }
    //   },
    //       {
    //       id: 4,
    //       parentId: 1,
    //       data: {
    //           name: 'shot 4'
    //       }
    //   },
    //       {
    //       id: 5,
    //       parentId: 3,
    //       data: {
    //           name: 'shot 5'
    //       }
    //   },
    //   {
    //       id: 6,
    //       parentId: 3,
    //       data: {
    //           name: 'shot 6'
    //       }
    //   },
      
  ]
    
export const createProductSlice = (set,get) => ({ 
    product_id     : 1,  
    fetch: async (pond) => {
        if(get().api_update){
         return;
        }
        await fetch(pond.url).then(response => response.json())
        .then(function(json){
           setTimeout(function(){             
                // Initialize
                const tree = new Wcf_Custom_Product();                 
                  // Add the elements
                nums.forEach(num => tree.add(num.id, num.data, num.parentId));               
               
                set({ snapshots_nodes: tree.full() })
              set({ api_update: 1 })
           },1000);        
        });   
    },
    
    addNewProductNode: function(parentKey, data){
        let temp = get().snapshots_nodes;        
        temp.add(uniqueId(),data,parentKey);  
        set({ snapshots_nodes: temp.full() });
        set( function(){
            return { 
             active_modal: 0,
            }
        });
    }, 
    
    removeProductNode: function(parentKey){
         let temp = get().snapshots_nodes;        
         temp.remove(parentKey);          
         set({ snapshots_nodes: temp.full() });  
      
    },
    
    UpdateProductNode: function(pKey,value){
        let temp = get().snapshots_nodes;       
        temp.update( pKey , value );          
        set({ snapshots_nodes: temp.full() });        
        set({ update: new Date() });        
   }

})