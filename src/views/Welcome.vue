<template>
  <div class="tBox_1">

    <div @click="AfterClick" class="tBox" id="elecData_father">

      <vue-canvas-nest :config="config" :el="'#elecData_father'"></vue-canvas-nest>

      <transition name="el-zoom-in-left" >
        <div v-show="show2" class="transition-box"/>
      </transition>

    </div>
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
          opacity: 5,
          zIndex: 20,
          count: 200,
        }
      }
    },
    methods: {
      AfterClick() {
        this.show2 = !this.show2
        setTimeout(() => {

          this.$router.push('/blogPage');
        },250)

      }
    },
  components: {
    vueCanvasNest
  }

  }
</script>

<style>
  @import "../assets/css/normalize.css";

  .tBox_1 {
    background-color: #b0d5b0;
  }

  .tBox {

    /*padding: 0 12px 0 12px;*/


    color: #ff0059;
    width: 1300px;
    height: 700px;

    margin-left:auto;
    margin-right:auto;

    /*margin-top: 5px;*/

    display: flex;
  }

  .transition-box {
    background-image: url("../assets/img/b2.png");
    flex: 1;

  }


</style>
