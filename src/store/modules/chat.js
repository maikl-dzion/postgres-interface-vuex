export default {

    /////////////////
    state: {
        msg: ['msg 1', 'msg 2', 'msg 3']
    },

    /////////////////
    getters: {
        getMessages(state){
            return state.msg
        }
    },

    /////////////////
    actions: {

        createMessage(context, data){   
            // здесь можем добавлять новое сообщение в БД
            context.commit('newMessage', data);
        },

    },

    /////////////////
    mutations: {
        
        newMessage(state, data){
            state.msg.push(data.msg);
        },

    }

}