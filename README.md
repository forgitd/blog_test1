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

ctrl shift r 替換修改

//在页面刷新时将vuex里的信息保存到localStorage里
window.addEventListener("beforeunload",()=>{
localStorage.setItem("messageStore",JSON.stringify(this.$store.state))
})

localStorage.getItem("messageStore") &&
this.$store.replaceState(Object.assign(this.$store.state,JSON.parse(localStorage.getItem("messageStore"))));
