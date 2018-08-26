<template>
  <v-layout>
    <v-flex xs12 sm8 offset-sm2>  
      <v-alert 
        :value="submitted"
        class="subheading"
        type="success"
        color='lime' >
        Thanks for adding your blog.
      </v-alert>

      <v-card class="mx-auto my-4 elevation-16">        
        <v-toolbar
          color="info teal--text"
          cards
          dark
          flat>          
          <v-toolbar-title class="title font-weight-bold">
            Add a New Blog
          </v-toolbar-title>   
        </v-toolbar>
        <v-form
          ref="form"
          v-model="valid"
          class="pa-3 pt-4">            
          <v-text-field
            v-model.lazy="blog.title"            
            :rules="titleRules"
            :counter="250"
            label="Title"
            color="teal"
            box
            required
          ></v-text-field>          
          <v-textarea
            v-model.lazy="blog.content"
            :rules="contentRules"
            auto-grow
            box
            color="teal"
            label="Blog Content"
            rows="1"
            required
          ></v-textarea>  
          <h4>Categories</h4>
          <v-layout row wrap>            
          <v-flex xs6 sm3 md2>
            <v-checkbox
              v-model="blog.categories"
              label="Javascript"
              color="red"
              value="Javascript"
              hide-details
            ></v-checkbox>
          </v-flex>
          <v-flex xs6 sm3 md2>
            <v-checkbox
              v-model="blog.categories"
              label="Delphi"
              color="lime"
              value="Delphi"
              hide-details
            ></v-checkbox>
          </v-flex>
          <v-flex xs6 sm3 md2>
            <v-checkbox
              v-model="blog.categories"
              label="Python"
              color="indigo"
              value="Python"
              hide-details
            ></v-checkbox>
          </v-flex>
          <v-flex xs6 sm3 md2>
            <v-checkbox
              v-model="blog.categories"
              label="Java"
              color="green"
              value="Java"
              hide-details
            ></v-checkbox>
          </v-flex>
          <v-flex xs6 sm3 md2>
            <v-checkbox
              v-model="blog.categories"
              label="C#"
              color="purple"
              value="C#"
              hide-details
            ></v-checkbox>
          </v-flex>  
          <v-flex xs6 sm3 md2>
            <v-checkbox
              v-model="blog.categories"
              label="Swift"
              color="blue"
              value="Swift"
              hide-details
            ></v-checkbox>
          </v-flex>    
          <v-flex xs12 d-flex class="mt-4">
            <v-select
              :items="authors"
              label="Authors"
              color="teal"
              v-model="blog.author"
            ></v-select>
          </v-flex>
        </v-layout>          
        </v-form>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn
            flat
            @click="$refs.form.reset()">
            Clear
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            :disabled="!valid"            
            class='white--text'
            color="teal"
            @click.prevent="post"           
          >Add Blog</v-btn>
        </v-card-actions>        
      </v-card>
      
      <v-card class="mx-auto my-4 elevation-16" v-if="valid">    
      <v-toolbar
          color="teal lighten-2"
          cards
          dark
          flat>      
          <v-toolbar-title class="title font-weight-regular">
            Preview Blog
          </v-toolbar-title>   
        </v-toolbar>    
            <v-card>
              <v-card-title primary-title>
                <div>
                  <div class="headline">{{blog.title}}</div>
                  <div class="grey--text">{{blog.author}}</div>
                </div>
              </v-card-title>   
              <v-card-text>{{blog.content}}</v-card-text> 

              <v-list subheader>
                <h4 v-if="blog.categories.length > 0" class="ml-3">Categories</h4>
                <v-layout row wrap>    
                  <v-list-tile
                    v-for="(category, index) in blog.categories"
                    :key="index">                  
                    <v-btn icon ripple>
                        <v-icon color="grey lighten-1">check_circle</v-icon>
                      </v-btn>
                    <v-list-tile-content>
                      <v-list-tile-title>{{ category }}</v-list-tile-title>  
                    </v-list-tile-content>                  
                  </v-list-tile>                
                </v-layout>
              </v-list>
            </v-card>
          </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data: () => ({ 
      valid: false,
      submitted: false,        
      contentRules: [
        v => !!v || 'Content is required'        
      ],      
      titleRules: [
        v => !!v || 'Title is required',
        v => (v && v.length <= 250) || 'Title must be less than 250 characters'
      ],
      blog: {
        title: '',
        content: '',
        categories: [],
        author: ''
      },
      authors: ['The Net Ninja', 'Michael Van Canneyt', 'Academind', 'Traversy Media']      
    }),
    methods: {
      // You need to change Write rule in your firebase database to true 
      post () {
        this.$http.post('https://vue-playlist-43541.firebaseio.com/posts.json', this.blog).then(data => {
          console.log(data);             
          setTimeout(() => {
            this.submitted = false;
          }, 3000);
          this.submitted = true;
          this.$refs.form.reset();
        })
      }
    }
  }
</script>