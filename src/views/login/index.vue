<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-sm-8 col-md-6 col-lg-4 pt-5 m-auto">
        <div class="card mt-5">
          <div class="card-header text-center p-2 bg-white">
            <h2 class="m-0" style="color: #409eff">MES</h2>
          </div>
          <div class="card-body">
            <el-form ref="form" :model="form" :rules="rules">
              <el-form-item prop="username">
                <el-input
                  prefix-icon="el-icon-user"
                  placeholder="用户名"
                  v-model="form.username"
                ></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input
                  prefix-icon="el-icon-lock"
                  placeholder="密码"
                  v-model="form.password"
                  type="password"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button
                  class="w-100"
                  type="primary"
                  @click="login"
                  :loading="isLoading"
                  >登录</el-button
                >
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "admin",
        password: "admin"
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      },
      isLoading: false
    };
  },
  methods: {
    login() {
      this.$refs.form.validate(valid => {
        if (!valid) return;

        // this.isLoading = true;
        // // 验证账号密码
        // this.axios
        //   .post("/api/user/login", this.form)
        //   .then(response => {
        //     if (response.data.errno !== 0) {
        //       // 错误提示
        //       this.$message.error("账号或密码错误");
        //     }
            // 存储到 vuex 和 本地
            this.$store.commit("login", {
              user: {
                username: this.form.username
              },
              token: "testToken"
            });

            // 跳转到主页
            this.$router.push({ name: "index" });
        //   })
        //   .catch(error => {
        //     console.log(error);
        //     if (error.response.data && error.response.data.errorCode) {
        //       this.$message.error(error.response.data.msg);
        //     }
        //   })
        //   .finally(() => {
        //     this.isLoading = false;
        //   });

        // 跳转到主页
        this.$router.push({ name: "index"});
      });
    }
  }
};
</script>

<style></style>
