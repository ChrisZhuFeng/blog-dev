<template>
    <div id="single-blog">
        <h1>{{blog.title}}</h1>
        <article>{{blog.content}}</article>
        <p>作者：{{blog.author}}</p>
        <p>分类：</p>
        <ul>
            <li v-for="blo in blog.categories">{{blo}}</li>
        </ul>
        <button @click="deleteSimgleBlog">删除</button>
        <router-link :to="'/edit/'+ this.id">编辑</router-link>
    </div>
</template>

<script>
export default {
    name: 'single-blog',
    data(){
        return{
            id: this.$route.params.id,
            blog:{}
        }
    },
    methods:{
        deleteSimgleBlog(){
            this.$http.delete('https://vuedemo-59591.firebaseio.com/posts/' + this.id +'.json').then(response => {
                this.$router.push({path: '/'});
            })
        }
    },
    created(){
        this.$http.get('https://vuedemo-59591.firebaseio.com/posts/' + this.id +'.json').then(data => {
            // this.blog = data.body;
            // console.log(data);
            return data.json()
        }).then(res => this.blog = res)
    }
}
</script>

<style scoped>
#single-blog{
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
    background: #eee;
    border: 1px dotted #aaa;
}
</style>
