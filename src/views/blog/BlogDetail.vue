<template>
  <div id="blog_detail">
    <div class="blog_detail_box" id="md_info">
      <div id="elecData_father">
        <div  class="markdown-body blog_info" id="tocbot">
          <vue-markdown :source="data1" v-highlight></vue-markdown>

        </div>
        <vue-canvas-nest :config="config" :el="'#elecData_father'"></vue-canvas-nest>
      </div>
    </div>

    <div class="review">
      <p class="review-tip">评论:</p>

      <div class="review-box">
        <div v-if="! this.reviews.length" class="review-judge">
          <p style="color: red; font-size: 18PX;">没有评论 </p>
        </div>
        <div v-for="review in this.reviews" class="review-body" v-rainbow>
          <hr style="color: #23262E; size: 1px; margin-top: 5PX;"/>
          <div class="review-infos">
            <p class="review-user" style="font-size: 20PX; color: black; margin: 0;">
              {{ review.id_user_name }}
            </p>
            <p class="review-date" style="margin: 0;">{{ getFormateDateByMe(review.date) }}</p>



          </div>

          <div class="review-comment">{{review.comment}}</div>

<!--          <hr style="color: #23262E; size: 1px; margin: 0;"/>-->
        </div>
        <div class="loading-state">没有更多评论</div>
        <div class="review-the-article-none" id="review">
          <textarea placeholder="发一条友善的评论吧" v-model="commitValue" class="review-input" />
          <button @click="commit_review" class="review-commit">发表评论</button>
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
import {Commit,getReviews} from "../../network/Detail";
import jquery from "../../../node_modules/jquery/dist/jquery.js"
import $ from "jquery"

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
      },
      reviews: [
        {id_review: Number, id_blog: Number, comment: String, date: Date, id_user_name: String}
      ]

    }
  },
  methods: {
    commit_review() {
      // console.log(this.$store.state.common_flag);
      let flag1 = JSON.parse(sessionStorage.getItem("common_flag"))
      let that = this;
      // console.log(flag1);
      if (sessionStorage.getItem("flag")) {
        // console.log(sessionStorage.getItem("username"));
        let data1 = sessionStorage.getItem("username");
        let id = JSON.parse(localStorage.getItem("blog_id"));
        Commit(id, this.commitValue, data1).then(
          res => {
            if (res.data === true) {
              getReviews(localStorage.getItem("blog_id")).then(
                res => {
                  this.reviews = res.data
                }
              )
              that.commitValue = ""
            } else {
              alert("出错")
            }
          }
        );
      } else if ( flag1 ) {
        let data = JSON.parse(sessionStorage.getItem("username"));
        // let data1 = sessionStorage.getItem("username");
        let id = JSON.parse(localStorage.getItem("blog_id"))
        Commit(id, this.commitValue, data.name_c).then(
          res => {
            if (res.data === true) {
              getReviews(localStorage.getItem("blog_id")).then(
                res => {
                  this.reviews = res.data
                }
              )
              that.commitValue = ""
            } else {
              alert("出错")
            }
          }
        );

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
    // console.log(JSON.parse(localStorage.getItem("blog_id")) );
    // this.$store.commit("setBlog_id", this.$route.query.id)
    this.commitValue = ""



    //在页面刷新时将vuex里的信息保存到localStorage里
    window.addEventListener("beforeunload",()=>{
      localStorage.setItem("messageStore",JSON.stringify(this.$store.state))
    })

    localStorage.getItem("messageStore") &&
    this.$store.replaceState(Object.assign(this.$store.state,JSON.parse(localStorage.getItem("messageStore"))));


    // console.log(this.$store.state.Blogs)



    let blog =  this.$store.state.Blogs.filter((n) => {
      if ( localStorage.getItem("blog_id") ) {
        return  Number(n.id) === Number(localStorage.getItem("blog_id"))
      }
      // else {
      //   console.log(this.$route.query.id);
      //   return n.id === this.$store.state.blog_id
      // }
    })

    getDetailInfo(blog[0].md_url).then(res => {
      this.data1 = res.data;
    })


    getReviews(localStorage.getItem("blog_id")).then(
      res => {
        this.reviews = res.data
      }
    )


  },
  components: {
    VueMarkdown,
    vueCanvasNest
  },
  mounted() {

    // let height = document.getElementById("md_info").offsetHeight;
    setTimeout(() => {
      // let height = parseInt($('#md_info div').get(0).offsetHeight)

      let detail_body = document.getElementById("tocbot");
      console.log($(detail_body).height());

      // let review_height = document.getElementById("review");
      // let review_height = parseInt($('.review-commit div').get(0).offsetHeight)

      let review = document.getElementById("review");

      window.onscroll = function h() {
        // console.log($(document).scrollTop());
        if ($(document).scrollTop() >= $(detail_body).height() - 400) {
          review.setAttribute("class", "review-the-article");
        } else {
          review.setAttribute("class", "review-the-article-none");
        }
      }
    },300)



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

  .review {
    max-width: 860PX;
    margin: 10PX auto;
    border: #8D8D8D 1px solid;
    border-radius: 5px;
    border-bottom: none;
  }
  .review-tip {
    font-size: 22PX;
    font-weight: 300;

  }
  .review-box {
    /*display: flex;*/
    /*flex-direction: row;*/
    /*align-items: center;*/
  }
  .review-infos {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #8D8D8D;
    font-size: 16PX;
    font-weight: 300;
  }
  .review-body {

    /*padding-bottom: 5PX;*/
    /*margin-bottom: 5PX;*/
  }
  .review-comment {
    font-size: 18PX;
    line-height: 18PX;
    margin: 9PX 0;
  }
  .review-input {

    border: none;
    outline: none;
    width: 700PX;
    height: 50PX;
    max-width: 850PX;
    max-height: 50PX;
    font-size: 14PX;
    resize:none;
    background: #f6f6f6;
    color: black;
    margin: 10PX auto 0;
    display: inline;
  }
  .review-input:hover {
    border: blue 1PX solid;
    border-radius: 5PX;

  }
  .review-commit { /* 按钮美化 */
    width: 100PX; /* 宽度 */
    height: 40PX; /* 高度 */
    border-width: 0; /* 边框宽度 */
    border-radius: 5PX; /* 边框半径 */
    background: red; /* 背景颜色 */
    cursor: pointer; /* 鼠标移入按钮范围时出现手势 */
    outline: none; /* 不显示轮廓线 */
    /*font-family: Microsoft YaHei; !* 设置字体 *!*/
    color: white; /* 字体颜色 */
    font-size: 17PX; /* 字体大小 */
    display: block;
    margin: 0 auto;

  }
  .review-commit:hover { /* 鼠标移入按钮范围时改变颜色 */
    background: #5599FF;
  }
  .review-the-article {
    position: fixed;
    bottom: 0;
    padding-bottom: 15PX;
    background: #fff;
    /*width: 100%;*/
    z-index: 2;
    /*display: none;*/
    box-sizing: border-box;
    margin-left: 60PX;
  }
  .loading-state {
    height: 64px;
    line-height: 64px;
    font-size: 12px;
    color: #99A2AA;
    text-align: center;
    margin-bottom: 80px;
  }
  .review-the-article-none {
    display: none;
  }
</style>