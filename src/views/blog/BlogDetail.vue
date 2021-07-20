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

    <div>
      <p>评论:</p>
      <div>
        <div v-if="$store.state.reviews !== null">
          <div v-for="review in $store.state.reviews" >
            <p>
              {{ review.id_user_name }}
            </p>
            <p>{{ getFormateDateByMe(review.date) }}</p>
            <div>{{review.comment}}</div>
          </div>

        </div>
        <div v-else>没有评论</div>

        <div>
          <textarea placeholder="评论" v-model="commitValue"/>
          <button @click="commit_review">提交</button>
        </div>
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
import {Commit} from "../../network/Detail";

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
      commitValue: {
        default: ""
      }

    }
  },
  methods: {
    commit_review() {
      if (this.$store.state.common_flag && sessionStorage.getItem("common_flag")) {
        let data = JSON.parse(sessionStorage.getItem("username"));
        console.log(data);
        Commit(this.$store.state.blog_id, this.commitValue, data.name_c);
        this.$store.dispatch("updateReviews", this.$store.state.blog_id);
      } else {
        this.$router.push('/login');
      }
    },

    getFormateDateByMe(date1) {
      let date = new Date(date1);
      let year = date.getFullYear();
      let month = date.getMonth();  //0-11  表示 1-12
      let day1 = date.getDate();  //获取一个月份的第几天
      let hour = date.getHours();
      let min = date.getMinutes();
      let sec = date.getSeconds();

      return year + "-" + (month + 1) + "-" + day1 + " " + hour + ":" + min + ":" + sec
    }
  },
  created() {
    // console.log(this.$store.state.blog_id)
    // this.$store.commit("setBlog_id", this.$route.query.id)
    this.commitValue = ""


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
    /*background: url('../../assets/img/t1.png');*/
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