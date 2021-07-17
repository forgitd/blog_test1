<template>
  <div class="body_box">
    <div class="basic_page" id="elecData_father">
      <div id="body_box_info">
        <div class="test_box">
          <Header class="left" @allArticles="showArticles" :cflag="flag"/>
        </div>

        <div class="test_box_middle_none"  id="box_middle">
          <div class="box_in_search">
            <div class="input_tip">搜索：</div>

            <input type="text" value="" class="layui-input input_box"
                   @input=" searchInfo = $event.target.value " />

            <hr>

            <div v-for="item in $store.getters.filterBlogs(searchInfo)" class="item_search">
              <div style="margin: 3PX;cursor: pointer" v-rainbow @click="toSearchDetail(item.id)" >
                {{ item.title }}
              </div>

            </div>
          </div>
        </div>


        <div class="test_box_1" id="box_right">
          <Blog class="right"/>
        </div>
      </div>
      <vue-canvas-nest :config="config" :el="'#elecData_father'"></vue-canvas-nest>
    </div>
  </div>
</template>

<script>
import vueCanvasNest from "vue-canvas-nest";
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
      },
      flag: false,
      searchInfo: {
        type: String,
        default: ""
      }

    }
  },
  components: {
    vueCanvasNest,
    Blog,
    Header
  },
  methods: {
    showArticles() {

      let box = document.getElementById('box_middle');
      box.setAttribute("class", "test_box_middle");
      let box1 = document.getElementById('box_right');
      box1.setAttribute("class", "test_box_1_new");
      this.flag = true

      let that = this;
      setTimeout(() => {
        if ( this.flag ) {
          document.addEventListener("click", function hhh(e) {
            if (e.clientX < 305 || e.clientX > 605) {
              box.setAttribute("class", "test_box_middle_none");
              box1.setAttribute("class", "test_box_1");
              that.flag = false;
              document.removeEventListener("click", hhh);
            }
          })
        }
      },1)
    },

    toSearchDetail(i) {
      this.$router.push({
        path: "/detail",
        query: {
          id: i
        }
      })
    }

  }
}
</script>

<style scoped>
  @import "../../assets/css/normalize.css";
  @import "../../assets/layui/css/layui.css";

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
  .test_box_1_new {
    flex: 1;
    margin: 0 15PX;
  }
  /*.body_box #body_box_info .right {*/
  /*  position: sticky;*/
  /*}*/

  .test_box_middle_none {
    display: none;
  }
  .test_box_middle {
    width: 300PX;
    margin-left: 305PX;
  }

  .input_tip {
    color: #8D8D8D;
    font-size: 16PX;
    font-weight: 300;
    margin: 8PX 0;
  }
  .item_search {
    color: #0C0C0C;
    font-weight: 300;
    font-size: 18PX;
    margin: 10PX 3PX;
    position: relative;
    border-radius: 5PX;
    border: 1PX slategray solid;

  }
  .box_in_search {
    position: absolute;
    margin: 5PX 25PX;
  }

</style>