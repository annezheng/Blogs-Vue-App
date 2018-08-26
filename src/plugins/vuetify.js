import Vue from 'vue'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  transitions,
  VCard,
  VForm,
  VTextField,
  VTextarea,
  VDivider,
  VCheckbox,
  VSelect,
  VAlert,
  VExpansionPanel,
  VJumbotron,
  VDialog
} from 'vuetify'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    transitions,
    VCard,
    VForm,
    VTextField,
    VTextarea,
    VDivider,
    VCheckbox,
    VSelect,
    VAlert,
    VExpansionPanel,
    VJumbotron,
    VDialog
  },
  theme: {
    primary: '#ee44aa',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#E6E6FA',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})
