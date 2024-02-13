import { create } from 'zustand'
import { createGeneralSlice } from './slices/general';
import { createProductSlice } from './slices/getproduct';
/*
* See slice folder
* add new setting slice
*/
const useSettingsStore = create((...a) => ({ 
   ...createGeneralSlice(...a),
   ...createProductSlice(...a)          
}));

export default useSettingsStore