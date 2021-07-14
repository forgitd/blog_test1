<template>
  <div class="body_box">
    <div class="basic_page" id="elecData_father">
      <div id="body_box_info">
        <div class="test_box">
          <Header class="left"/>
        </div>
        <div class="test_box_1">
          <Blog class="right"/>
        </div>
      </div>
      <vue-canvas-nest :config="config" :el="'#elecData_father'"></vue-canvas-nest>
    </div>
  </div>
</template>

<script>
import vueCanvasNest from "../../public/canvas-nest";
import Header from "./Header";
import Blog from "./Blog";
export default {
  name: "BlogPage",
  data() {
    return {
      config: {
        color: "100, 0, 90",
        opacity: 5,
        zIndex: 20,
        count: 200,
      }
    }
  },
  components: {
    vueCanvasNest,
    Blog,
    Header
  }
}
</script>

<style scoped>
  @import "../assets/css/normalize.css";

  .body_box {
    margin: 0;
    padding: 0;
    background-color: #f2f2f2;
  }

  .body_box #body_box_info {
    display: flex;
    overflow: auto;
    position: relative;
  }

  .test_box {
    position: fixed;

    width: 300PX;
    height: 100%;
  }
  /*.body_box #body_box_info .left {*/
  /*  position: sticky;*/
  /*  bottom: 100PX;*/
  /*}*/

  .test_box_1 {
    /*overflow: auto;*/
    /*position: relative;*/
    flex: 1;
    margin-left: 315PX;
    margin-right: 15PX;
  }
  /*.body_box #body_box_info .right {*/
  /*  position: sticky;*/
  /*}*/

</style>