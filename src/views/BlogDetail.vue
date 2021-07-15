<template>
  <div id="blog_detail" v-highlight v-html="data1" style="width: 800px; height: 800px;">
    {{ data1 }}
  </div>
</template>

<script>
import {getDetailInfo} from "../network/Detail";

export default {
  name: "BlogDetail",
  data() {
    return {
      data1: String
    }
  },
  created() {

    let blog =  this.$store.state.Blogs.filter((n) => {
      return n.id == this.$route.query.id
    })
    console.log(blog);
    getDetailInfo(blog[0].md_url).then(res => {
      console.log(res.data);
      this.data1 = res.data;

    })

  }
}
</script>

<style scoped>

</style>