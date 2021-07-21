<template>
  <div>
    <div class="left-col" >

      <div class="overlay" style="background: #4d4d4d"></div>

      <div class="intrude-less">
        <header id="header" class="inner">

          <a href="javascript:void(0)" class="profilepic">
            <img src="../../assets/img/a1.png" class="js-avatar">
          </a>

          <hgroup>
            <h1 class="header-author"><a href="javascript:void(0)">keqi</a></h1>
          </hgroup>

          <nav class="header-menu">
            <ul>
              <li class="li_none_p">
                <a href="javascript:void(0)" >主页</a>
              </li>
              <li class="li_none_p">
                <a href="javascript:void(0)" @click="$router.push('/jottings')">随笔</a>
              </li>
              <li class="li_none_p">
                <el-popover
                  placement="right"
                  width="400"
                  trigger="click">
                  <iframe frameborder="no" marginwidth="0" marginheight="0" width="330"
                          height="86" src="http://music.163.com/outchain/player?type=2&amp;id=1410210736&amp;auto=1&amp;height=66"></iframe>
                  <a slot="reference" style="cursor: pointer">
                    音乐
                  </a>
                </el-popover>
              </li>
              <li class="li_none_p">
                <a href="javascript:void(0)" @click="toWritePage">
                  写博客
                </a>
              </li>
            </ul>
          </nav>

          <nav class="header-smart-menu">
            <a  href="javascript:void(0)" @click="toMainPage">所有文章&nbsp;</a>
            <a  href="javascript:void(0)" @click="drawer = true">
              <el-drawer
                class="test"
                title="友情链接"
                :visible.sync="drawer"
                direction="rtl"
                :append-to-body="true"
                >
                <div v-for="url in urls" class="url_style">
                  {{ url }}
                </div>

              </el-drawer>
              友链&nbsp;
            </a>
            <a  href="javascript:void(0)" @click="$router.push('/aboutme')">关于我</a>
          </nav>


        </header>

      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      drawer: false,
      urls: ["https://forgitd.github.io/","https://www.bilibili.com/",
             "https://music.163.com/outchain/player?type=2&id=1410210736&auto=1&height=66",
             "https://cn.vuejs.org/","https://github.com/",
             "https://element.eleme.cn/#/zh-CN/component"]
    }
  },
  methods: {
    toMainPage() {
      // console.log(this.cFlag)
      if (this.cFlag === false) {

        this.$emit('allArticles');
      }

    },
    toWritePage() {
      // 判断有没有登录 使用state中的属性 没有就重定向到登录页面
      // console.log(this.$store.state.flag);
      // console.log(this.$store.state.common_flag);
      if ( sessionStorage.getItem('flag')) {
        this.$router.push('/write');
      } else {
        this.$router.push('/login');
      }
      // 跳转这里要使用单引号

    }
  },
  props: {
    cFlag: {
      type: Boolean,
      default: false
    }
  }

}
</script>

<style scoped>
  a {
    background: transparent;
    text-decoration: none;
    color: #08c;
  }

  .left-col {
    /*position: sticky;*/
    /*top: 655px;*/
    z-index: -1 !important;
    /*height: 100%;*/
    width: 300PX;
  }

  .left-col .overlay {
    width: 300PX;
    height: 180PX;
    position: absolute;
    margin-top: 0;
  }
  .left-col #header .profilepic {
    display: block;
    border: 5PX solid #fff;
    border-radius: 300px;
    width: 110PX;
    height: 110PX;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    background: #88acdb;
    -webkit-transition: all .2s ease-in;
    display: -webkit-box;
    -webkit-box-orient: horizontal;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    text-align: center;
  }
  .left-col #header a {
    color: #696969;
  }
  .left-col .intrude-less {
    width: 76%;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    padding-top: 128PX;
  }


  .left-col #header .header-smart-menu {
    font-size: 12PX;
    margin-bottom: 20PX;
  }

  .left-col #header .header-menu {
    font-weight: 300;
    line-height: 31PX;
    text-transform: uppercase;
    float: none;
    min-height: 150PX;
    margin-left: -5PX;
    margin-top: 25PX;
    margin-bottom: 25PX;
    text-align: center;
    display: -webkit-box;
    -webkit-box-orient: horizontal;
    -webkit-box-pack: center;
    -webkit-box-align: center;
  }

  .li_none_p {
    list-style-type: none;
  }

  .url_style {
    font-size: 20PX;
    font-weight: 300;
    margin: 12PX 28PX;
    color: #0C0C0C;
    font-family: "Freestyle Script";

  }
  .test {
    font-size: 20PX;
  }

</style>