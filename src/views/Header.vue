<template>
  <div>
    <div class="left-col" >

      <div class="overlay" style="background: #4d4d4d"></div>

      <div class="intrude-less">
        <header id="header" class="inner">

          <a href="/" class="profilepic">
            <img src="../assets/img/a1.png"  class="js-avatar">
          </a>

          <hgroup>
            <h1 class="header-author"><a href="/">keqi</a></h1>
          </hgroup>

          <nav class="header-menu">
            <ul>
              <li class="li_none_p"><a href="/">主页</a></li>
              <li class="li_none_p"><a href="/">随笔</a></li>
            </ul>
          </nav>

          <nav class="header-smart-menu">
            <a  href="javascript:void(0)">所有文章&nbsp;</a>
            <a  href="javascript:void(0)">友链&nbsp;</a>
            <a  href="javascript:void(0)">关于我</a>
          </nav>

        </header>

      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Header"
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
    z-index: 9;
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
    margin-left: -30PX;
    text-align: center;
    display: -webkit-box;
    -webkit-box-orient: horizontal;
    -webkit-box-pack: center;
    -webkit-box-align: center;
  }

  .li_none_p {
    list-style-type: none;
  }

</style>