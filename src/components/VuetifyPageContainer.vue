<template>
  <v-app id="inspire">

    <!----------------->
    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>
         <slot name="header-title">Заголовок по умолчанию</slot>
      </v-toolbar-title>
    </v-app-bar>

    <!----------------->
    <v-navigation-drawer v-model="drawer" app clipped>
      <slot name="left-panel"></slot>
    </v-navigation-drawer>

    <v-content>
      <v-container class="fill-height" fluid>
        <slot name="main-content">

            <v-row align="center" justify="center">
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
                    <v-btn icon  large href="https://codepen.io/johnjleider/pen/bXNzZL" target="_blank"v-on="on" >
                      <v-icon large>mdi-codepen</v-icon>
                    </v-btn>
                  </template>
                  <span>Codepen</span>
                </v-tooltip>

              </v-col>
            </v-row>

        </slot>
      </v-container>
    </v-content>

    <v-footer app>
       <slot name="footer"><span>&copy; 2019</span></slot>
    </v-footer>

  </v-app>
</template>


<script>
export default {
  name: "VuetifyPageWrapper",
  
  data: () => ({
    drawer: null
  }),

  created() {
    this.$vuetify.theme.dark = true;
  },
  computed: {},
  methods : {},

  // components: {},
  // props: { source: String },
};
</script>
