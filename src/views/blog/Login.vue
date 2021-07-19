<template>
  <div>
    <div class="login-box">

      <h1>Login</h1>

      <input class="text-box" type="text" placeholder="username" v-model="user.username"/>
      <input class="text-box" type="password" placeholder="password" v-model="user.password"/>
      <a class="submit" @click="toLogin" href="javascript:void(0)">Submit</a>

    </div>
  </div>
</template>

<script>
import { Login_Methods } from "../../network/Blog"

export default {
  name: "Login",
  data() {
    return {
      user: {
        username: String,
        password: String
      }
    }
  },
  // 登陆时验证是否登录成功 --  想服务器发送请求 登录成功之后在vuex中设置内存管理
  methods: {
    toLogin() {
      Login_Methods(this.user.username, this.user.password)
        .then( res => {
          if (res.data === "") {
            alert("登录失败");
          } else {
            if (this.$store.state.flag === false) {
              this.$store.commit("updateFlag");
            }

            sessionStorage.setItem("flag", this.$store.state.flag);
            this.$router.push('/blogPage').catch(err => {
              console.log(err);});

          }
        })
    }
  },
  created() {
    this.user.username = "";
    this.user.password = "";
  }
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}

.login-box {
  width: 400px;
  height: 400px;
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
  font-size: 50px;
}

.text-box {
  display: block;

  border: 2px solid #FFFFFF;
  background: none;

  margin: 20px auto;
  text-align: center;
  padding: 10px 5px;

  font-size: 20px;

  outline: none;

  color: #FFFFFF;

  border-radius: 25px;

  width: 200px;

  transition: 0.25s;
}

.submit {

  display: inline-block;

  color: #FFFFFF;
  text-decoration: none;

  border: 2px solid #FFFFFF;
  margin: 20px auto;
  padding: 10px 30px;
  margin-top: 0;
  border-radius: 25px;

  font-size: 20px;
}

.text-box:focus {
  width: 250px;
  border-color: #f0f31a;
}

.submit:hover {
  background: #909090;
  border-color: #909090;
}
</style>