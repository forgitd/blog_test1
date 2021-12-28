<template>
  <div>
    <div style="display: flex;
            justify-content: center; padding-top: 40PX">
      <button @click="flag = flag? !flag : flag" class="layui-btn">博客</button>
      <button @click="flag = flag? flag : !flag" class="layui-btn">评论</button>
    </div>

    <div class="login-box" v-if="!flag" key="blog">
      <h1>博客</h1>
        <div v-for="(items,index) in BlogData" :key="index">
          <table >
            <tr>
              <th>日期</th>
              <th>标题</th>
              <th>简介</th>
              <th>操作</th>
            </tr>
            <tr>
              <td>{{getStringDate(items.date)}}</td>
              <td>{{items.title}}</td>
              <td>{{items.comment}}</td>
              <td><div @click="del(items)">删除</div></td>
            </tr>
          </table>
        </div>


    </div>

    <div class="login-box" v-if="flag" key="comment">

      <h1>评论</h1>
      <div v-for="(items,index) in reviewsData" :key="index">
        <table >
          <tr>
            <th>日期</th>
            <th>博客id</th>
            <th>内容</th>
            <th>评论人</th>
            <th>操作</th>
          </tr>
          <tr>
            <td>{{getStringDate(items.date)}}</td>
            <td>{{items.id_blog}}</td>
            <td>{{items.comment}}</td>
            <td>{{items.id_user_name}}</td>
            <td><div @click="delReview(items)">删除</div></td>
          </tr>
        </table>
      </div>

    </div>
  </div>

</template>
<script>
import {getReviews} from "../../network/Detail";
import {getAllReviews,delReview} from "../../network/Detail";
import {GetAllBlogs} from "../../network/Blog";
import {DelBlog} from "../../network/Blog";

export default {
  name: 'index',
  data() {
    return {
      flag: false,
      BlogData: {
        id: Number,
        title: String,
        comment: String,
        date: Date
      },
      reviewsData: [
        {id_review: Number, id_blog: Number, comment: String, date: Date, id_user_name: String}
      ]
    }

  },
  methods: {
    getStringDate(date1) {
      let date = new Date(date1);
      let year = date.getFullYear();
      let month = date.getMonth();  //0-11  表示 1-12
      let day1 = date.getDate();  //获取一个月份的第几天
      return year+"-"+(month+1)+"-"+day1
    },
    del(item) {
      console.log(item.id);
      DelBlog(item.id);
      this.BlogData.splice(this.BlogData.indexOf(item),1)
    },
    delReview(item1) {
      console.log(item1.id_review);
      delReview(item1.id_review);
      this.reviewsData.splice(this.reviewsData.indexOf(item1),1)
    }
  },
  created() {
    GetAllBlogs().then(
      res => {
        this.BlogData = res.data;
      }
    )
    getAllReviews().then(
      res => {
        console.log(res.data);
        this.reviewsData = res.data;
      }
    )
  }
};
</script>
