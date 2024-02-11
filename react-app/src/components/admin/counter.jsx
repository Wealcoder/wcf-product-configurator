import useSettingsStore from '../../store/settings';

export function BearCounter() {
    const bears = useSettingsStore((state) => state.current_lavel)
    return <h1>{bears} around here...</h1>
}

export function BearControls() {
    const nested_settings = useSettingsStore(function(state){
       return state.nested_settings
    })
    return <button onClick={nested_settings}>one up</button>
} 