<template>
  <div id="blog_detail">
    <div id="elecData_father">
      <div  class="markdown-body blog_info">
        <vue-markdown :source="data1" v-highlight></vue-markdown>

      </div>
      <vue-canvas-nest :config="config" :el="'#elecData_father'"></vue-canvas-nest>
    </div>

  </div>
</template>

<script>
import {getDetailInfo} from "../network/Detail";
import VueMarkdown from 'vue-markdown';
import 'highlight.js/styles/github.css';
import 'github-markdown-css';
import vueCanvasNest from "vue-canvas-nest";

export default {
  name: "BlogDetail",
  data() {
    return {
      data1: String,
      config: {
        color: "100, 0, 90",
        opacity: 1,
        zIndex: 1,
        count: 100,
      }
    }
  },
  methods: {

  },
  created() {
    this.$store.commit("setBlog_id", this.$route.query.id)


    //在页面刷新时将vuex里的信息保存到localStorage里
    window.addEventListener("beforeunload",()=>{
      localStorage.setItem("messageStore",JSON.stringify(this.$store.state))
    })

    localStorage.getItem("messageStore") &&
    this.$store.replaceState(Object.assign(this.$store.state,JSON.parse(localStorage.getItem("messageStore"))));


    let blog =  this.$store.state.Blogs.filter((n) => {
      if (this.$route.query.id ) {
        return  n.id == this.$route.query.id
      } else {
        return n.id == this.$store.state.blog_id
      }
    })

    getDetailInfo(blog[0].md_url).then(res => {
      this.data1 = res.data;
    })
  },
  components: {
    VueMarkdown,
    vueCanvasNest
  }
}
</script>

<style scoped>
  #blog_detail{
    margin: 0;
    padding: 0;
    background-color: white;

  }
 .blog_info {
   max-width: 1000PX;
   margin: 15PX auto 0;
   background-color: #eee;
 }
</style>