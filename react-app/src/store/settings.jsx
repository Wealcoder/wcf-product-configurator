import { create } from 'zustand'
import { uniqueId } from '../components/utils';
import { Wcf_Custom_Product } from '../components/custom_product';

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
            name: 'shot 1'
        }
    },
    {
        id: 3,
        parentId: 1,
        data: {
            name: 'shot 3'
        }
    },
    {
        id: 2,
        parentId: 1,
        data: {
            name: 'shot 2'
        }
    },
        {
        id: 4,
        parentId: 1,
        data: {
            name: 'shot 4'
        }
    },
        {
        id: 5,
        parentId: 3,
        data: {
            name: 'shot 5'
        }
    },
    {
        id: 6,
        parentId: 3,
        data: {
            name: 'shot 6'
        }
    },
]

// Initialize
const tree = new Wcf_Custom_Product();      
        // Add the elements
nums.forEach(num => tree.add(num.id, num.data, num.parentId))

const useSettingsStore = create((set) => (
      { 
        product_id     : 1,
        nested         : { current_lavel: 0 },
        current_lavel  : 0,
        depth          : 0,
        active_modal   : 0,
        snapshots_nodes: tree.full(),
        child          : {
          parent: null,
          data  : {}
        },
        
        reset    : () => set({ snapshots_nodes: {} }),  
        down_item: function(){
          set( function(state){   
           
              return { 
                  nested: { ...state.nested, current_lavel: state.nested.current_lavel - 1 },
              }
          });
        }, 
        
        nested_settings: function(){
         set( function(state){
                // Nested tree settings 
                // write composite pattern
                // repeater item
              state.product_id = uniqueId();
              console.log(state);
              return { 
                  nested: { ...state.nested, current_lavel: state.nested.current_lavel + 1 },
              }
         });
        },  
        
        fetch: async (pond) => {    
          await fetch(pond.url).then(response => response.json())
          .then(function(json){          
             //set({ snapshots_nodes: json })
          });   
 
          
        },
        
      }
));

export default useSettingsStore