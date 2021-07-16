<template>
  <div>
<!--    <div id="elecData_father">-->
<!--      <vue-canvas-nest :config="config" :el="'#elecData_father'"></vue-canvas-nest>-->
<!--    </div>-->
    <router-view/>
  </div>
</template>

<script>
// import vueCanvasNest from "vue-canvas-nest";

  export default {
    name: 'App',
    data() {
      return {
        // config: {
        //   color: "100, 0, 90",
        //   opacity: 5,
        //   zIndex: 20,
        //   count: 200,
        // }
      }
    },
    components: {
      // vueCanvasNest
    }
  }
</script>

<style>

</style>
