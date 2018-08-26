<template>
  <v-app> 
    <app-toolbar></app-toolbar>
    <v-content>
      <router-view />
    </v-content>    
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import AppToolbar from './components/AppToolbar'
import AppFooter from './components/AppFooter'

export default {
  name: 'App',
  components: {
    AppToolbar, AppFooter
  }  
}
</script>


