
import {mapActions, mapGetters} from 'vuex';

const StoreHelpers = {

    data() { 
        return {  }
    }, 

    created() {

        this.getTableListAction();
        this.getDbListAction();
        this.getUsersAction();

    },

    methods: {

        ...mapActions(['getTableListAction', 
                       'getUsersAction',
                       'getDbListAction']),

        ...mapGetters(['getTableList',
                       'getUsersList', 
                       'getDbList']),
       
        _storeStateData(data, moduleName = null) {
            if(moduleName) 
               return this.$store.state[moduleName][data];
            return this.$store.state[data];
        },
 
        _storeGetters(funcName) {
             return this.$store.getters[funcName];
        },
 
        _storeActions(funcName, data) {
             this.$store.dispatch(funcName, data);
        },
        
    },      
}


export default StoreHelpers;