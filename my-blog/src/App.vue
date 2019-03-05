<template>
  <div id="app">
    <!-- <showblogs/> -->
    <!-- <addblog/> -->
    <blog-header></blog-header>
    <router-view></router-view>
  </div>
</template>

<script>
// import Addblog from './components/Addblog'
// import Showblogs from './components/Showblogs'
import BlogHeader from './components/BlogHeader'

export default {
  name: 'App',
  components: {
    // Addblog,
    // Showblogs,
    BlogHeader,
  }
}
</script>

<style>
body{
  margin: 0;
}
</style>
