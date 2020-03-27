<template>
  <div class="login-container">
    <el-form
      ref="form"
      :rules="rules"
      :model="form"
      label-width="80px"
      class="login-form"
    >
      <h2>大数据可视化平台</h2>
      <el-form-item label="账号" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          class="login-button"
          @click="submitForm('form')"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { login, getUserInfo } from "@/api/login";
import { isUsername } from "@/utils/validate"; //导入验证规则

export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ validator: isUsername, trigger: "blur" }],
        password: [{ required: true, message: "密码不能为空", trigger: "blur" }]
      }
    };
  },
  methods: {
      //提交登录
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        //  console.log(valid);
        if (valid) {
          login(this.form.username, this.form.password).then(response => {
            const resp = response.data;
            console.log(resp, resp.flag);
            if (resp.flag) {
              //验证成功,通过token获取用户信息
              getUserInfo(resp.data.token).then(response => {
                const respUser = response.data;
                if (respUser.flag) {
                  console.log("userinfo", respUser.data);
                  localStorage.setItem('vis-user', JSON.stringify(respUser.data))
                  localStorage.setItem("vis-token", resp.data.token);
                
                  //前往首页
                  this.$router.push("/");
                } else {
                  this.$message({
                    message: resp.message,
                    type: "warning"
                  });
                }
              });
            } else {
              //未通过
              this.$message({
                message: resp.message,
                type: "warning"
              });
            }
          });
        } else {
          console.log("验证失败");
          return false;
        }
      });
    },
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>
<style lang="scss" scoped>
.login-form {
  width: 350px;
  margin: 250px auto;
  background-color: rgb(255, 255, 255, 0.8);
  padding: 28px 52px 28px 10px;
  border-radius: 20px;
  h2 {
    color: #303133;
    text-align: center;
  }
}
.login-container {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("../../assets/login_beijing.jpg");
}
.login-button {
  width: 100%;
}
</style>
