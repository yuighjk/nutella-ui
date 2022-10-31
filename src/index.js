import * as components from './components';

const ui = {
    ...components
}

const install = function(Vue){

    if (install.installed) return

    Object.keys(ui).forEach(key => {
        Vue.components(key,ui[key]);
    })
}
export default {
    install,
    ...components
}