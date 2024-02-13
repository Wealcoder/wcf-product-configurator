import { uniqueId } from "../../components/utils";
const initialState = { api_update      : 0,
  nested         : { current_lavel: 0 },
  current_lavel  : 0,
  depth          : 0,
  active_modal   : 0,
  ModalHeading   : '',
  ModalContent   : '',
}
export const createGeneralSlice = (set) => ({   
    ...initialState,
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
         
          return { 
              nested: { ...state.nested, current_lavel: state.nested.current_lavel + 1 },
          }
     });
    },
    
    ActivateModal: function(){
     set( function(state){
           return { 
            active_modal: 1,
          }
     });
    },
    
    CloseModal: function(value){ 
      set( function(state){
            return { 
              ModalContent: '',
           }
      });
      set( function(state){
            return { 
             active_modal: value,
           }
      });
     },
     
     setModalContent: function(content){
          set( function(state){
            return { 
              ModalContent: content,
           }
      });     
      
     },
     setModalHeading: function(content){
            set( function(state){
              return { 
                ModalHeading: content,
             }
        }); 
     },
     setCurrentLavel: function(value){
      set( function(state){
        return { 
          current_lavel: value,
       }
  }); 
}
    
  })