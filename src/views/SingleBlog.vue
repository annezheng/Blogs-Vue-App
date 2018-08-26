<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card class="mt-4">
        <v-card-media
          src="https://cdn.pixabay.com/photo/2018/08/12/15/29/hintersee-3601004_1280.jpg"
          height="200px"
        ></v-card-media>       

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0" v-rainbow>{{blog.title}}</h3>
            <div v-rainbow>{{blog.content}}</div>
          </div>
        </v-card-title>

        <v-list-tile dense v-for="(category, i) in blog.categories" :key="i">
            <v-list-tile-action>
              <v-icon color="green">code</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{category}}
              </v-list-tile-title>              
            </v-list-tile-content>
          </v-list-tile>
        <v-card-title> 
            <v-icon color="teal darken-2" class="mr-2">person</v-icon>  
            <div class="subheading">{{blog.author}}</div>  
            <v-spacer />
            <v-card-actions>  
              <v-layout row justify-center>
                <v-dialog v-model="dialog" persistent max-width="300">
                  <v-btn slot="activator" color="primary" dark>Delete</v-btn>
                  <v-card>
                    <v-card-title class="headline">Are you sure to delete this blog?</v-card-title>
                    <v-card-text class="subheading">Deletion cannot be revoked.</v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="green darken-2" flat @click.native="deleteBlog">Yes</v-btn>
                      <v-btn color="green darken-2" flat @click.native="dialog = false">No</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-layout>
            </v-card-actions>   
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
    data () {
        return {
            id: this.$route.params.id,
            blog: {},
            dialog: false
        }
    },
    created () {      
      this.$http.get('https://vue-playlist-43541.firebaseio.com/posts/' + this.id + '.json')
      .then(data => {            
          return data.json();
      }).then(data => {        
        this.blog = data;
      })
    },
    methods: {
      // You need to change Write rule in your firebase database to true 
      deleteBlog () {    
        this.dialog = false;    
        this.$http.delete('https://vue-playlist-43541.firebaseio.com/posts/' + this.id + '.json').then(data => {         
          this.$router.push('/blogs');
        })
      }
    }
}
</script>
