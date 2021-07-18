<template>

  <div @click="AfterClick" class="tBox" id="elecData_father">
    <vue-canvas-nest :config="config" :el="'#elecData_father'"></vue-canvas-nest>
    <transition name="el-zoom-in-left" >
      <img v-show="show2" class="transition-box" src="../../assets/img/test.png" alt="空空如也"/>
    </transition>
  </div>

</template>

<script>

import vueCanvasNest from "vue-canvas-nest";

export default {
    name: 'welcomePage',
    data() {
      return {
        show2: true,
        config: {
          color: "255, 0, 90",
          opacity: 0.7,
          zIndex: 1,
          count: 100,
        }
      }
    },
    methods: {
      AfterClick() {
        let that = this;
        document.addEventListener("click", function (e) {
          if (e.clientX <= document.body.clientWidth/2 ) {
            that.show2 = !that.show2
            setTimeout(() => {
              that.$router.push('/blogPage');
            },300)
          }
          else {
            that.show2 = !that.show2
            setTimeout(() => {
              that.$router.push('/login');
            },300)
          }
        })

      }
    },
  components: {
    vueCanvasNest
  }

  }
</script>

<style>
  @import "../../assets/css/normalize.css";


  .transition-box {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;  /* 图像变形处理 */
  }
</style>
