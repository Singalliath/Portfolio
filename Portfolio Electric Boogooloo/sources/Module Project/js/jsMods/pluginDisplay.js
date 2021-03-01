export default function pluginDisplayFunc(display){
    let plugins = navigator.plugins;
    let pluginArray = Object.keys(plugins)
    let pluginNames = pluginArray.map((item)=>{
        return ` Plugin ${item}: ${plugins[item].name}`
    })
    document.getElementById(display).innerHTML = pluginNames;
}