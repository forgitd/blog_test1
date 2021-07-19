<template>
  <div class="test_margin_border">
    <a href="javascript:void(0)"  v-for="(items,index) in $store.state.Blogs" :key="index">
      <div class="blog_comment_info" @click="todetail(items.id)">
          <div class="top">
            <p v-rainbow>{{ items.title }}</p>
            <p style="color: #8D8D8D; font-size: 14px;">{{ getStringDate(items.date) }}</p>
          </div>
          <p class="bottom">{{ items.comment }}</p>
      </div>
    </a>
  </div>

</template>

<script>
export default {
  name: "Blog",
  data() {
    return {
    }
  },
  methods: {
    todetail(i) {
      this.$router.push({
        path: "/detail",
        query: {
          id: i
        }
      })
    },
    getStringDate(date1) {
      let date = new Date(date1);
      let year = date.getFullYear();
      let month = date.getMonth();  //0-11  表示 1-12
      let day1 = date.getDate();  //获取一个月份的第几天
      return year+"-"+(month+1)+"-"+day1
    }
  },
  computed: {

  },
  created() {
    this.$store.dispatch("updateAllBlogs");

  }
}
</script>

<style scoped>

  a {
    background: transparent;
    text-decoration: none;
    color: black;
  }

  .blog_comment_info {
    padding: 20PX;
    margin: 20PX 0;
    box-sizing: border-box;
    background-color: #eee;
    border: 1PX slategray solid;
    border-radius: 5px;
  }
  .top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 22PX;
    font-weight: 300;
  }
  .bottom {
    font-size: 16PX;
  }

  .test_margin_border {
    max-width: 800PX;
    margin: 0 auto;
  }

</style>