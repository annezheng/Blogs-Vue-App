<template>
   <div>
    <v-toolbar color="teal darken-1" dark>
        <v-toolbar-side-icon 
            @click.stop="drawer = !drawer"
            class="hidden-sm-and-up">
        </v-toolbar-side-icon>
        <v-toolbar-title>
            <router-link to="/" class="white--text" style="text-decoration: none">Vue Blogs</router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only">
        <v-btn flat to="/blogs">Show Blogs</v-btn>
        <v-btn flat to="/add">Add Blog</v-btn>
        <v-btn flat to="/about">About</v-btn>
        </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      class="hidden-sm-and-up">
      <v-list class="pa-1">
        <v-list-tile avatar to='/'>
          <v-list-tile-avatar>
            <img src="https://cdn.pixabay.com/photo/2018/02/08/02/06/background-3138516_1280.jpg">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Vue Blogs</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list class="pt-0" dense>      
        <v-divider />
        <v-list-tile to='/blogs'>
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Show Blogs</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to='/add'>
          <v-list-tile-action>
            <v-icon>add_circle</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Add Blog</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to='/about'>
          <v-list-tile-action>
            <v-icon>question_answer</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>About</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
   </div>
</template>

<script>
  export default {
    data () {
      return {
        drawer: null,
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ]
      }
    }
  }
</script>

<style>
.v-btn--active{
    background: teal;
} 
.v-btn:hover {
    background: rgb(167, 243, 243);
    color: #444;
}
</style>

