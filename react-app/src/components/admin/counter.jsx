import useSettingsStore from '../../store/settings';
/*
* Table Of Components
* AddNewsnapshot   
*/
export function BearCounter() {
    const bears = useSettingsStore((state) => state.nested.current_lavel);      
    return <h1>{bears} around here...</h1>
}

export function BearControls() {
   
    const nested_settings = useSettingsStore(function(state){
        return state.nested_settings;
    })
    return <button onClick={nested_settings}>one up</button>
} 

export function BearDownControls() {
   
    const down_item = useSettingsStore(function(state){
        return state.down_item;
    })
    return <button onClick={down_item}>one down</button>
}

/*
* Button to add new image shot 
* @param {bool} open
* @param {string} title
* @public
*/
export function AddNewsnapshot(props){ 
    return <button onClick={props.open}>{props.title}</button>
}