<template>
  <div id="blog_detail">
    <div class="blog_detail_box">
      <div id="elecData_father">
        <div  class="markdown-body blog_info" id="tocbot">
          <vue-markdown :source="data1" v-highlight></vue-markdown>

        </div>
        <vue-canvas-nest :config="config" :el="'#elecData_father'"></vue-canvas-nest>
      </div>
    </div>
  </div>
</template>

<script>
import {getDetailInfo} from "../../network/Detail";
import VueMarkdown from 'vue-markdown';
import 'highlight.js/styles/github.css';
import 'github-markdown-css';
import vueCanvasNest from "vue-canvas-nest";
import tocbot from "tocbot";



tocbot.init({
  headingsOffset: 40,
  scrollSmoothOffset: -40,
  // Where to render the table of contents.
  tocSelector: '.js-toc',
  // Where to grab the headings to build the table of contents.
  contentSelector: '.js-toc-content',
  // Which headings to grab inside of the contentSelector element.
  headingSelector: 'h1, h2, h3, h4, h5, h6',
  // For headings inside relative or absolute positioned containers within content.
  hasInnerContainers: true,
});


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
      },

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
    margin: 0 auto;
    padding: 0;
    object-fit: cover;  /* 图像变形处理 */
    background: url('../../assets/img/t1.png');
  }

 .blog_detail_box {
   margin: 0 auto;
   max-width: 860PX;
   background-color: #8D8D8D;
   opacity: 0.8;
   border: 2px slategray solid;
   border-radius: 5px;
 }
  .blog_info {
    max-width: 850PX;
    margin: 5PX auto 0;
    background-color: #eee;
    opacity: 0.9;
  }
</style>