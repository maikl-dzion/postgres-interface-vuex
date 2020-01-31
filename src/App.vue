<template>
  <!-- <div id="app" >
    <div id="nav">
       <router-link to="/">Home</router-link> |
       <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div> -->

  <vuetify-page-wrapper>

          <!---- HEADER TITLE ----->
          <template slot="header-title" >Postgres-interface</template>

          <!---- LEFT PANEL ----->
          <template slot="left-panel">

                <v-list dense >
                  <v-list-item link v-for="(route) in siteMenu" :key="route.url">
                      <v-list-item-action>
                         <v-icon>mdi-view-dashboard</v-icon>
                      </v-list-item-action>
                      <v-list-item-content>
                          <router-link :to="route.url">{{route.title}}</router-link>
                          <!-- <v-list-item-title></v-list-item-title> -->
                      </v-list-item-content>
                  </v-list-item>
                </v-list>

          </template>

          <!---- MAIN CONTENT----->
          <template slot="main-content">
               <!-- <pre>{{tableList}}</pre> -->
               <router-view/>
          </template>

          <!---- LEFT and RIGHT TOP ----->
          <template slot="left-panel-top">566</template>
          <template slot="right-panel-top">777</template>

          <!---- FOOTER----->
          <template slot="footer">
              Footer
          </template>

    </vuetify-page-wrapper>  

</template>

<script>
export default {
  name: "App",
  data: () => ({
       siteMenu : [
           { title : 'Таблицы', url : '/' },
           // { title : 'About'  ,  url : '/about' },
           { title : 'Базы данных'  ,  url : '/databases' },
           { title : 'Пользователи'  ,  url : '/users' },
           { title : 'Данные'  ,  url : '/data_list' }
       ],
  }),

  // computed: {},
  // methods : {},
  // created() {},
  // components: { HelloWorld },

};
</script>

<style lang="scss">

</style>
