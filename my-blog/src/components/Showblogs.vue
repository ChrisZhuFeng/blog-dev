<template>
    <div id="show-blogs" v-theme:column="'narrow'">
        <h1>博客总览</h1>
        <input type="search" placeholder="搜索" v-model="search"  />
        <div v-for="blog in filteredBlogs" class="single-blog">
            <router-link :to="'/blog/'+ blog.id">
                <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
            </router-link>
            <article>{{blog.content | snippet}}</article>
        </div>
    </div>
</template>

<script>
export default {
    name: 'show-blogs',
    data(){
        return {
            blogs: [],
            search: '',
        }
    },
    created(){
        // this.$http.get('http://jsonplaceholder.typicode.com/posts').then(data => {
        //     this.blogs = data.body.slice(0,10);
        //     console.log(this.blogs);
        // })
        this.$http.get('https://vuedemo-59591.firebaseio.com/posts.json').then(data => {
            // this.blogs = data.body.slice(0,10);
            // console.log(data);
            return data.json()
        }).then(res => {
            let blogsArray = [];
            for(let key in res){
                // console.log(key);
                // console.log(res[key]);
                res[key].id = key;
                blogsArray.push(res[key]);
            }
            // console.log(blogsArray);
            this.blogs = blogsArray;
            // console.log(this.blogs);
        })
    },
    computed:{
        filteredBlogs(){
            return this.blogs.filter( blog => blog.title.match(this.search))
        }
    },
    filters:{
        // 'to-uppercase':function(value){
        //     return value.toUpperCase();
        // }
        toUppercase(value){
            return value.toUpperCase();
        },
    },
    // directives:{
    //     'rainbow':{
    //         bind(el,binding,vnode){
    //             el.style.color = 'red';
    //         }
    //     }
    // }

}
</script>

<style scoped>
#show-blogs{
    max-width: 800px;
    margin: 0 auto;
}

#show-blogs a{
    text-decoration: none;
}

.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
    border: 1px dotted #aaa;
}

input[type=search]{
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
}
</style>
