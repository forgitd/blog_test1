# blog_test1

博客首页显示博客

title

date

comment 简介



1. 数据库设置
2. springboot响应
3. axios请求数据
4. vue数据显示
5. 显示的css样式



markdown文档存储问题

详情页如何显示markdown文档



```javascript
ctrl shift r 替換修改

//在页面刷新时将vuex里的信息保存到localStorage里
window.addEventListener("beforeunload",()=>{
localStorage.setItem("messageStore",JSON.stringify(this.$store.state))
})

localStorage.getItem("messageStore") &&
this.$store.replaceState(Object.assign(this.$store.state,JSON.parse(localStorage.getItem("messageStore"))));
```



前端开发： 由协议和端口造成的跨域前台无能为力

markdown格式字符串解析

相关vue组件的使用（vue-canvas-nest）

浏览器存储的逻辑->显示哪篇博客的判断



##### 需求
音乐(随机播放)   
所有文章(搜索功能 )
友情链接



