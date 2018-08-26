<template>
  <v-jumbotron        
    src="https://cdn.pixabay.com/photo/2018/02/08/02/06/background-3138516_1280.jpg"
  >
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
          <h3 class="display-3">Welcome to the site</h3>
          <span class="subheading">You can add and view blogs on this website. </span>         
          <v-divider class="my-3"></v-divider>
          <div class="title mb-3">Wish to create a new blog?</div>
          <v-btn
            class="mx-0"
            color="primary"
            large
            to="/add">
            Let's Start
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
</template>