<template><div>

  <div style="display:flex">

    <div style="border:1px gainsboro solid" >

      <div class="text-center d-flex pb-4">
        <v-btn @click="all">Открыть все</v-btn>
        <!-- <div>{{ panel }}</div> -->
        <v-btn @click="none">Закрыть все</v-btn>
      </div>

      <v-expansion-panels v-model="panel" multiple >
        <v-expansion-panel v-for="(table) in tableList" :key="table.name">
          <v-expansion-panel-header>{{ table.name }}</v-expansion-panel-header>
          <v-expansion-panel-content>
              <pre>{{table}}</pre>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

    </div>

    <div style="border:1px gainsboro solid" >

      <div class="text-center d-flex pb-4" >
        <v-btn @click="all">Открыть все</v-btn>
        <!-- <div>{{ panel }}</div> -->
        <v-btn @click="none">Закрыть все</v-btn>
      </div>

      <v-expansion-panels v-model="panel" multiple >
        <v-expansion-panel v-for="(table) in tableList" :key="table.name">
          <v-expansion-panel-header>{{ table.name }}</v-expansion-panel-header>
          <v-expansion-panel-content>
              <pre>{{table}}</pre>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

    </div>

 </div>

</div></template>

<script>
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  data: () => ({
    
      panel: [],
      items: 5,

  }),

  computed: {
    tableList() {
      return this.getTableList();
    }
  },

  methods: {

    // Create an array the length of our items
      // with all values as true
      all () {
        this.panel = [...Array(this.items).keys()].map((k, i) => i)
      },
      // Reset the panel
      none () {
        this.panel = []
      },

  },

  // created() {},
  // components: { HelloWorld },

};
</script>


<style >
   
  .v-content  {
    border:0px red solid;
    flex:none;
  }

</style>
