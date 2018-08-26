<template>
  <v-container>
    <v-layout row class="mt-4">
      <v-flex xs12 sm8 offset-sm2>
        <v-card class="elevation-20">
          <v-toolbar color="info teal--text">          
            <v-toolbar-title>Technical Aspects</v-toolbar-title>
          </v-toolbar>
          <v-list
            subheader
            two-line>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon>info</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  <a target="_blank" href="https://vuejs.org/">VueJS</a>
                </v-list-tile-title>
                <v-list-tile-sub-title>A progressive, incrementally-adoptable JavaScript framework for building UI on the web.</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile>
              <v-list-tile-action>
                <v-icon>info</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  <a target="_blank" href="https://vuetifyjs.com/en/">Vuetify</a>
                </v-list-tile-title>
                <v-list-tile-sub-title>Material Design Component Framework for VueJS</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile>
              <v-list-tile-action>
                <v-icon>info</v-icon>
              </v-list-tile-action>
              <v-list-tile-content @click="video = !video">
                <v-list-tile-title>
                  <a target="_blank" href="https://firebase.google.com/">Firebase</a>
                </v-list-tile-title>
                <v-list-tile-sub-title>A mobile and web application development platform from Google</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>          
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style>
a {
  text-decoration: none;
  color: rgb(40, 124, 124);
  font-weight: bold;
}
</style>

