<template>
  <div class="test_margin_border">




    <div class="blog_items">
      <div class="blog_item" v-for="i in book">
        <div>{{i}}</div>
      </div>
    </div>
  </div>

</template>

<script>



export default {
  name: "Blog",
  data() {
    return {
      book:  [1, 2, 3,4,5,6,7,7,7,7,7,77,7,7,7,7,7,7,7,7,7,7,4,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7
        ,7,7,7,7,4,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7 ],
    }
  }
}
</script>

<style scoped>

  .test_margin_border {
    margin: 0;
    padding: 0;
  }
  .blog_items {
    margin-left: 15PX;
    margin-right: 15PX;
  }
</style>