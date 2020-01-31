<template>
  <div class="hello">

    <pre>{{getMessages}}</pre>

    <ul>
        <li v-for="(msg, key) in messages" :key="key">{{msg}}</li>
    </ul>

    <button @click="addMessage">
         Добавить сообщение
    </button>

     <button @click="addNewMessage">
         Добавить сообщение (вариант addNewMessage)
     </button>
    
  </div>
</template>

<script>

import {mapActions} from 'vuex'

export default {
  name: 'HelloWorld',
  props: { msg: String },

  computed: {

    messages() {
      return this._storeStateData('msg', 'Chat');
    },

    getMessages() {
       return this._storeGetters('getMessages');
    },

  },

  methods : {
    
       ...mapActions(['createMessage']),

       addNewMessage() {
           this.createMessage({ msg: 'New message 22' });
       },
 
       addMessage(){
           this.$store.dispatch('createMessage', { msg: 'New message 11' })
       },

  }

}
</script>

<style scoped lang="scss">

</style>
