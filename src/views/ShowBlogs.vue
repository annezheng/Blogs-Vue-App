<template>
    <v-container>
        <div v-theme:column="'wide'" style="margin: auto;" >    
            <h1 class="mt-4 pa-1 teal--text" style="text-align: center">All Blog Articles</h1>
            <v-text-field 
                single-line 
                label="Search title..."
                append-outer-icon="search" 
                v-model="search">
            </v-text-field>
            <v-expansion-panel v-model="panel" expand>
                <v-expansion-panel-content
                v-for="blog in filteredBlogs"
                :key="blog.id"      
                >
                <div slot="header" class="mt-2" v-rainbow>
                    {{blog.title | toUppercase}}    
                </div>              
                <v-card>                             
                    <v-card-text class="subheading" v-rainbow>
                        {{blog.content}}
                    </v-card-text>
                    <v-card-actions>
                        <v-card-text>
                            {{blog.author}}
                        </v-card-text>  
                        <v-spacer></v-spacer>                  
                        <v-btn flat color="primary" :to="'/blogs/'+blog.id">View</v-btn>
                    </v-card-actions>
                </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </div>
    </v-container>
</template>

<script>
import searchMixin from '../mixins/searchMixin.js'

export default {
    data () {
        return {
            blogs: [],
            panel: [true],
            search: ''
        }
    },
    created () {
        this.$http.get('https://vue-playlist-43541.firebaseio.com/posts.json')
            .then(data => {                
                return data.json();                      
            }).then (data => {                
                var blogsArray = [];
                for (let key in data) {                    
                    data[key].id = key;
                    blogsArray.push(data[key]);                   
                }
                this.blogs = blogsArray;                
            })
    },    
    filters: {        
        toUppercase (value) {
            return value.toUpperCase()
        }
    },      
    mixins: [ searchMixin ]
}
</script>


