<template>

  <div class="body_box">
    <div class="basic_page" id="elecData_father">

      <!--组件：  侧边栏：   main部分：用插槽   -->
      <div id="body_box_info">

        <div class="test_box">
          <Header class="left"/>
        </div>

        <div class="test_box_1">
          <BlogBody class="right"/>
        </div>

      </div>



      <vue-canvas-nest :config="config" :el="'#elecData_father'"></vue-canvas-nest>
    </div>
  </div>

</template>

<script>
import vueCanvasNest from "vue-canvas-nest";

import Header from "./Header";
import BlogBody from "./BlogBody";

export default {
  name: "BlogPage",
  data() {
    return {
      config: {
        color: "255, 0, 90",
        opacity: 5,
        zIndex: 20,
        count: 200,
      }
    }
  },
  components: {
    vueCanvasNest,
    BlogBody,
    Header
  }
}
</script>

<style scoped>
  @import "../assets/css/normalize.css";

  .body_box {
    margin: 0;
    padding: 0;
  }

  .body_box #body_box_info {
    display: flex;

  }

  .test_box {
    overflow: auto;
    position: relative;
    height: 700px;
    width: 416px;
    margin: 0;
    padding: 0;
  }

  .test_box_1 {
    overflow: auto;
    position: relative;
    height: 700px;
    flex: 1;
    margin: 0;
    padding: 0;
  }

  .body_box #body_box_info .left {

    position: sticky;
    bottom: 0;
    /*position: absolute;*/


  }

  .body_box #body_box_info .right {
    position: sticky;
    /*z-index: 1;*/
    margin: 0;
    padding: 0;

  }

  .basic_page {
    background-color: #b0d5b0;
  }
</style>