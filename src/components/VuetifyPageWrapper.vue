<template>

  <v-app id="inspire">

    <v-app-bar app clipped-right dark style="z-index:9999; left:0px;" >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>
          <slot name="header-title">Заголовок по умолчанию</slot>
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon @click.stop="drawerRight = !drawerRight" />
    </v-app-bar>

    <v-navigation-drawer v-model="drawerRight" app clipped right>

       <v-list dense>
          <v-list-item @click.stop="right = !right">
            <v-list-item-action>
              <v-icon>mdi-exit-to-app</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Open Temporary Drawer</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

       <slot name="right-panel">
             Right-Panel
       </slot>

    </v-navigation-drawer>

    <v-navigation-drawer v-model="drawer" app style="padding-top:52px;" >

         <v-list dense>
              <v-list-item @click.stop="left = !left">
              <v-list-item-action>
                  <v-icon>mdi-exit-to-app</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                  <v-list-item-title>Open Temporary Drawer</v-list-item-title>
              </v-list-item-content>
              </v-list-item>
          </v-list>

         <slot name="left-panel">
              Left - Panel
         </slot>

    </v-navigation-drawer>

    <v-navigation-drawer v-model="left" fixed temporary style="padding-top:69px;" >
        <slot name="left-panel-top"></slot>
    </v-navigation-drawer>

    <v-content>
      <v-container class="fill-height" fluid>
         <slot name="main-content">

            <!-- <v-row justify="center" align="center">
              <v-col class="shrink">
                
                <v-tooltip right>
                  <template v-slot:activator="{ on }">
                    <v-btn :href="source" icon large target="_blank" v-on="on">
                      <v-icon large>mdi-code-tags</v-icon>
                    </v-btn>
                  </template>
                  <span>Source</span>
                </v-tooltip>

                <v-tooltip right>
                  <template v-slot:activator="{ on }">
                    <v-btn icon  large target="_blank" v-on="on"
                      href="https://codepen.io/johnjleider/pen/QewYYx">
                      <v-icon large>mdi-codepen</v-icon>
                    </v-btn>
                  </template>
                  <span>Codepen</span>
                </v-tooltip>

              </v-col>
            </v-row> -->

         </slot>
      </v-container>
    </v-content>

    <v-navigation-drawer v-model="right" fixed right temporary style="padding-top:69px;" >
         <slot name="right-panel-top" ></slot>
    </v-navigation-drawer>

    <v-footer app class="white--text">
       <slot name="footer">
            
            <span>Vuetify</span>
             <v-spacer />
            <span>&copy; 2019</span>

       </slot>
    </v-footer>

  </v-app>
</template>

<script>
export default {

  props: {
    source: String
  },

  created() {
     this.$vuetify.theme.dark = true;
  },

  data: () => ({
    drawer: null,
    drawerRight: false,
    right: false,
    left: false,
  })

};
</script>