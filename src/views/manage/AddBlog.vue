<template>
  <div>
    <h3>写博客</h3>
    <!-- 这是有括号是正确写法 -->
    <input type="text" v-model="title">
    <hr>
    <input type="text" v-model="comment"><hr>
    <input type="text" v-model="date"><hr>
    <v-md-editor v-model="text" height="400px"></v-md-editor>
    <button @click="add()" style="height: 20px;width: 60px;"></button>
  </div>


</template>

<script>
import axios from "axios";
import {AddBlog} from "../../network/Blog";
export default {
  name: "AddBlog",
  data() {
    return {
      title: "",
      comment: "",
      date: "",
      text: "",


    }
  },
  methods: {
    add() {
      console.log(this.Blog);
      axios({
          url: "http://1.116.141.79:8082/addBlog?title=" +
              this.title + "&comment=" + this.comment + " &date=" +  this.date + "&md_url=" + this.text,

        }
      ).then(res => {

      })
      // AddBlog(this.Blog.title(),this.Blog.comment(),this.Blog.date(),this.Blog.md_url());

    }
  }
}
</script>

<style scoped>

</style>