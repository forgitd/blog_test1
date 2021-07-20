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


##### 2222
详情页目录
所有文章 搜索功能 


#### 7.18
前端实现免登录和拦截器

更改欢迎页布局
博客主页增加写博客

写博客页面使用拦截器

// 跳转这里要使用单引号


## 7.20
修改因异步而主页数据显示迟缓的bug
查看本地存储的一些问题
博客详情页增加评论功能：
-   用户普通登录可以评论
-   注册  （页面 和 服务器 数据库）
-   详情页 （评论区 写评论 增加对应数据库，以博客id为主键，用户，日期，评论内容）
        

后端接口：  1.116.141.79:8082
/getBlogs 得到所有博客内容         无参   返回值：所有博客信息
/login_test 登录keqi           参数： username  password   返回值：keqi
/addReview 增加一条评论 （不需要加入日期）    参数：Integer id_blog, String comment, Integer id_user_c  返回值：布尔
/getReview 获取某个博客id的所有评论  （需要将得到的日期格式化）    参数： id 返回值：评论列表
/register 注册            参数： username  password  返回值：布尔
/login_common 登录普通用户  参数： username  password 返回值：用户

因为普通用户每次注册时不允许name相同，所以可以用name作为主键
即更改评论表字段中的用户id为用户name
 