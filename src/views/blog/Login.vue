<template>
  <div>
    <div style="display: flex;
            justify-content: center; padding-top: 40PX">
      <button @click="flag = flag? !flag : flag" class="layui-btn">登录</button>
      <button @click="flag = flag? flag : !flag" class="layui-btn">注册</button>
    </div>
    <div class="login-box" v-if="flag" key="register">
      <h1>Register</h1>

      <input class="text-box" type="text" placeholder="username" v-model="user.username"/>
      <input class="text-box" type="password" placeholder="password" v-model="user.password"/>
      <a class="submit" @click="toRegister" href="javascript:void(0)">Submit</a>

    </div>

    <div class="login-box" v-if="!flag" key="login">

      <h1>Login</h1>

      <input class="text-box" type="text" placeholder="username" v-model="user.username"/>
      <input class="text-box" type="password" placeholder="password" v-model="user.password"/>
      <input type="radio" name="name" v-model="radioFlag" value="1" @change="getRadioValue" class="radio"/>
      普通登录 &nbsp;
      <input type="radio" name="name" v-model="radioFlag" value="2" @change="getRadioValue" class="radio"/>
      管理员登录
      <br>
      <a class="submit" @click="toLogin" href="javascript:void(0)">Submit</a>

    </div>
  </div>
</template>

<script>
import { Login_Methods,Register,LoginCommon } from "../../network/Blog"

export default {
  name: "Login",
  data() {
    return {
      user: {
        username: String,
        password: String
      },
      flag: false,
      radioFlag: 1
    }
  },
  // 登陆时验证是否登录成功 --  想服务器发送请求 登录成功之后在vuex中设置内存管理
  methods: {
    toLogin() {
      if ( this.radioFlag === 1) {
        LoginCommon(this.user.username, this.user.password)
          .then( res => {
            if (res.data === "" ) {
              alert("登录失败")
            } else {
              this.$store.dispatch("updateAllBlogs");
              if (this.$store.state.common_flag === false) {
                this.$store.commit("updateCommentFlag");
              }
              // console.log(this.$store.state.common_flag);
              sessionStorage.setItem("username", JSON.stringify(res.data));
              sessionStorage.setItem("common_flag", this.$store.state.common_flag);
              this.$router.push('/blogPage').catch(err => {
                console.log(err);});
            }
          })

      } else  {
        Login_Methods(this.user.username, this.user.password)
          .then( res => {
            if (res.data === "") {
              alert("登录失败");
            } else {
              if (this.$store.state.flag === false) {
                this.$store.commit("updateFlag");
              }
              if (this.$store.state.common_flag === false) {
                this.$store.commit("updateCommentFlag");
              }

              this.$store.dispatch("updateAllBlogs");
              sessionStorage.setItem("common_flag", this.$store.state.common_flag);
              sessionStorage.setItem("flag", this.$store.state.flag);
              sessionStorage.setItem("username", "keqi");
              this.$router.push('/index').catch(err => {
                console.log(err);});

            }
          })
      }

    },

    toRegister() {
      Register(this.user.username, this.user.password)
        .then( res => {
          if (res.data === true) {
            alert("注册成功");
            this.flag = ! this.flag;
          } else {
            alert("注册失败")
          }
        })
    },

    getRadioValue() {
      console.log(this.radioFlag);

    }
  },
  created() {
    this.user.username = "";
    this.user.password = "";
  }
}
</script>

<style scoped>
@import "../../assets/layui/css/layui.css";
body {
  margin: 0;
  padding: 0;
}

.login-box {
  width: 400PX;
  height: 400PX;
  background: #3b3b3b;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  text-align: center;
}

.login-box h1 {
  color: white;
  /* font-weight: 700; */
  font-size: 50PX;
}

.text-box {
  display: block;

  border: 2PX solid #FFFFFF;
  background: none;

  margin: 20PX auto;
  text-align: center;
  padding: 10PX 5PX;

  font-size: 20PX;

  outline: none;

  color: #FFFFFF;

  border-radius: 25PX;

  width: 200PX;

  transition: 0.25s;
}

.submit {

  display: inline-block;

  color: #FFFFFF;
  text-decoration: none;

  border: 2PX solid #FFFFFF;
  margin: 20PX auto;
  padding: 10PX 30PX;
  margin-top: 0;
  border-radius: 25PX;

  font-size: 20PX;
}

.text-box:focus {
  width: 250PX;
  border-color: #f0f31a;
}

.submit:hover {
  background: #909090;
  border-color: #909090;
}
</style>