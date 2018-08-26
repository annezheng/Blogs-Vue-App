export default {
    computed: {
        filteredBlogs () {
            return this.blogs.filter((blog) => {
                return blog.title.match(new RegExp(this.search, "i")); // case insensitive
            })
        }
    }
}
