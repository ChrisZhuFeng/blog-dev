<template>
    <div id="edit-blog" class="add-blog">
        <h2>添加博客</h2>
        <form action="" v-if="!submited">
            <label for="">博客标题：</label>
            <input type="text" v-model="blog.title" required />

            <label for="">博客内容：</label>
            <textarea v-model="blog.content" ></textarea>

            <div id="checkboxes">
                <label>Vue.js</label>
                <input type="checkbox" value="Vue.js" v-model="blog.categories">
                <label>Node.js</label>
                <input type="checkbox" value="Node.js" v-model="blog.categories">
                <label>React.js</label>
                <input type="checkbox" value="React.js" v-model="blog.categories">
                <label>Angular4</label>
                <input type="checkbox" value="Angular4" v-model="blog.categories">
            </div>

            <label for="">作者：</label>
            <select v-model="blog.author">
                <option v-for="authors in authors">{{authors}}</option>
            </select>

            <button @click.prevent="post">修改博客</button>
        </form>

        <div>
            <h3 v-if="submited">您的博客发布成功!</h3>
        </div>

        <div id="preview">
            <h3>博客总览</h3>
            <p>博客标题：{{blog.title}}</p>
            <p>博客内容：</p>
            <p>{{blog.content}}</p>
            <p>博客分类：</p>
            <ul>
                <li v-for="cates in blog.categories">
                    {{cates}}
                </li>
            </ul>
            <p>作者：{{blog.author}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'edit-blog',
    data(){
        return{
            blog:{
                title: '',
                content: '',
                categories: [],
                author: '',
            },
            authors: ['Hemiah','Henry','Bucky'],
            submited: false,
            id: this.$route.params.id,
        }
    },
    methods:{
        post(){
            this.$http.put('https://vuedemo-59591.firebaseio.com/posts/' + this.id +'.json',this.blog).then(res => {
                console.log(res)
                this.submited = true
                setTimeout( () => this.$router.push({path: '/'}),3000);
            })
        },
        fetchData(){
            this.$http.get('https://vuedemo-59591.firebaseio.com/posts/' + this.id +'.json').then(data => {
                // this.blog = data.body;
                // console.log(data);
                return data.json()
            }).then(res => this.blog = res)
        }
    },
    created(){
        this.fetchData();
    }
}
</script>

<style scoped>
    .add-blog *{
        box-sizing: border-box;
    }

    .add-blog{
        margin: 20px auto;
        max-width: 600px;
        padding: 20px;
    }

    label{
        display: block;
        margin: 20px 0 10px;
    }

    input[type=text], textarea,select{
        display: block;
        width: 100%;
        padding: 8px;
    }

    textarea{
        height: 200px;
    }

    #checkboxes{
        margin-top: 20px;
    }

    #checkboxes label{
        display: inline-block;
        margin-top: 0;
    }

    #checkboxes input{
        display: inline-block;
        margin-right: 10px;
    }

    button{
        display: block;
        margin: 20px 0;
        background: crimson;
        color: #fff;
        padding: 8px 14px;
        border: 0;
        border-radius: 4px;
        font-size: 18px;
        cursor: pointer;
    }

    #preview{
        padding: 10px 20px;
        border: 1px dotted #ccc;
        margin: 30px 0;
    }

    h3{
        margin-top: 10px;
    }
</style>

