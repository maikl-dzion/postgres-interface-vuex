import Vue from 'vue'
import Vuex from 'vuex'
import Chat from './modules/chat'
import Http from '../services/HttpClass'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        tableList    : [],
        databaseList : [],
        usersList    : [],
    },
  
    ///////////////////////////
    mutations: {

        setTableList(state, data){
            state.tableList = data;
        },

        setDbList(state, data){
            state.databaseList = data;
        },

        setUsersList(state, data){
            state.usersList = data;
        },

    },
  
    ///////////////////////////
    actions: {
         
        getTableListAction(context) {
            var url = 'GET_TABLE_LIST_SHEME';
            Http.http(url).then(response => {
                // var  ch   = 0;
                // var _left = 0
                // var _top  = 0;
                // for (var i in response) {
                //     if (ch > 5)
                //         _left = _top = ch = 0;

                //     if (ch > 0) {
                //         _left = _left + 45;
                //         _top = _top + 30;
                //     }

                //     response[i]['top']  = _top;
                //     response[i]['left'] = _left;

                //     ch++;
                // }
                context.commit('setTableList', response);
            });
        },

        getDbListAction(context) {
            var url = 'SHOW_DATABASE_LIST/';
            Http.http(url).then(response => {
                context.commit('setDbList', response);
            });
        },

        getUsersAction(context) {
            var url = 'getDbUsersList';
            Http.http(url).then(response => {
                context.commit('setUsersList', response);
            });
        },
  
    },
  
    ///////////////////////////
    getters : {
        getTableList(state){
            return state.tableList;
        },

        getDbList(state){
            return state.databaseList;
        },

        getUsersList(state){
            return state.usersList;
        }
    },
  
    ///////////////////////////
    modules: {
        Chat
    }
    
})