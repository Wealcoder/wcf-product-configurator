import { create } from 'zustand'

const useSettingsStore = create((set) => ({ 
  product_id   : 1,
  current_lavel: 0,
  depth        : 0,
  tree: {},  
  reset: () => set({ tree: {} }),
  nested_settings: function(){
   set( function(state){
        // Nested tree settings 
        // write composite pattern
        // repeater item
        console.log(state);
        return { 
            current_lavel: state.current_lavel + 1 
        }
   });
  },
}))

export default useSettingsStore