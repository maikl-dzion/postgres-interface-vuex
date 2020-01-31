
// import CategoryTreeItem from "./components/CategoryTreeItem";
import Http from "./services/Http";
import Debug from "./services/Debug";
import StoreHelpers from "./services/StoreHelpers";
import VuetifyPageWrapper from "./components/VuetifyPageWrapper.vue";

const Plugins = {
    install(Vue) {    

        Vue.mixin({
            /////////////////
            mixins: [
                Http, 
                Debug, 
                StoreHelpers
            ],

            /////////////////
            data() { 
                return { } 
            },

            ////////////////
            created () {},

            ///////////////
            methods: {},

        });


        // Глобальные компоненты
        Vue.component('vuetify-page-wrapper', VuetifyPageWrapper);

        // Глобальная директива
        // Vue.directive('my-directive-name', {
        //     bind (el, binding, vnode, oldVnode) {
        //        // некоторая логика ...
        //     }
        // }),

        // Добавление глобального метода или свойства
        // Vue.globalMethodName = function () {
            // некоторая логика ...
        // }

    }
}; 

export default Plugins;