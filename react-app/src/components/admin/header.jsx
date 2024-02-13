
import useSettingsStore from "../../store/settings";
function HeaderNav() {
    const current_lavel     = useSettingsStore((state) => state.current_lavel);
    const snapshots_nodes   = useSettingsStore((state) => state.snapshots_nodes);    
    const setCurrentLavel     = useSettingsStore((state) => state.setCurrentLavel); 
    if(current_lavel == 0){
     return '';
    } 
    const data = snapshots_nodes.find(current_lavel); 
    
    if(data.parent == null){
        return;
    }
    
    const getBack = function(current){
        setCurrentLavel(current);
    }
    console.log(data);
    return <>
        <div className="wcf-bck-header">          
            <button onClick={() => getBack(data.parent.key)}>Back</button>
            <h3>{data.data.name}</h3>
        </div>   
    </>
    
}

export default HeaderNav;