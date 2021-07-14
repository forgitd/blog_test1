<template>
  <div class="blog_body" >
    <Blog/>
  </div>
</template>

<script>
import Blog from "../components/Blog";

export default {
  name: "BlogBody",
  components: {
    Blog
  }

}
</script>

<style scoped>
  .blog_body {
    position: absolute;
    right: 0;
    min-height: 100%;
    background: #eaeaea;
    left: 416px;
    width: auto;
  }
</style>