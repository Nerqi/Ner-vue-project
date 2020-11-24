<template>
  <div class="login" :style="'background-image:url('+ Background +');'">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" label-position="left" label-width="0px" class="login-form">
      <h3 class="title">{{ Config.title }}</h3>
      <el-form-item prop="username">
        <el-input v-model="loginForm.username" type="text" auto-complete="off" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="loginForm.password" type="password" auto-complete="off" placeholder="密码" @keyup.enter.native="handleLogin"></el-input>
      </el-form-item>
      <el-form-item style="width:100%;">
        <el-button :loading="loading" size="medium" type="primary" style="width:100%;" @click.native.prevent="handleLogin">
          <span v-if="!loading">登 录</span>
          <span v-else>登 录 中...</span>
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import Background from '@/assets/images/background.jpg'
  import Config from '@/settings'
  import {formRules} from '@/utils/validate'
  export default {
    name: 'Login',
    components:{},
    data() {
      return {
        Background,
        Config,
        loginForm: {
          username: '',
          password: ''
        },
        loginRules: {
          username: formRules( {required:true} ),
          password: formRules( {required:true} ),
        },
        loading: false,
      }
    },
    watch: {},
    methods: {
      handleLogin() {
        this.loading = false;
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            this.$store.dispatch('user/login', this.loginForm).then(() => {
            }).catch(() => {
            });
            this.loading = true;
          } else {}
        })
      }
    }
  }
</script>

<style lang="less">
  .login{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-size: cover;
    .login-form {
      margin-bottom: 60px;
      border-radius: 6px;
      background: #ffffff;
      padding: 25px 25px 5px 25px;
      .el-input {
        height: 38px;
        input {
          height: 38px;
        }
      }
      .input-icon{
        height: 39px;width: 14px;margin-left: 2px;
      }
      .title {
        margin: 0 auto 30px auto;
        text-align: center;
        color: #707070;
      }
    }
  }
</style>
