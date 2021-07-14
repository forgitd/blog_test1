<template>
  <div class="test_margin_border">
    <div class="box">
      <swiper>
        <swiper-item v-for="(item,key) in images " :key="key">
          <a href="javascript:void(0)">
            <img :src="item" alt="" class="img_size">
          </a>

        </swiper-item>
      </swiper>
    </div>


    <div class="blog_items">
      <div class="blog_item" v-for="i in book">
        <div>{{i}}</div>
      </div>
    </div>
  </div>

</template>

<script>
import {Swiper,SwiperItem} from "../components/swiper"

let img1,img2,img3,img4;
img1 = require('@/assets/img/swiper_img/2.png');
img2 = require('@/assets/img/swiper_img/3.png');
img4 = require('@/assets/img/swiper_img/5.png');
img3 = require('@/assets/img/swiper_img/6.png');

export default {
  name: "Blog",
  data() {
    return {
      book:  [1, 2, 3,4,5,6,7,7,7,7,7,77,7,7,7,7,7,7,7,7,7,7,4,7,7,7,7,7],
      images: [img1,
               img3,
               img2,
               img4]
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
}
</script>

<style scoped>

  .box {
    width: 400px;
    height: 250px;
    margin: 0 ;
    padding-bottom: 50px;
  }
  .img_size {
    width: 400px;
    height: 300px;
  }
  .test_margin_border {
    margin: 0;
    padding: 0;
  }
  .blog_items {
    margin-left: 15px;
    margin-right: 15px;
  }
</style>