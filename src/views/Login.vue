<template>
  <div class="content bg">
    <div class='logo'>
      <!--      <div class="word">Hodor Scheduler</div>-->
      <div></div>
    </div>
    <div @keyup.enter="onSubmit">
      <el-form class="form" :model="form">
        <el-form-item prop="username">
          <el-input placeholder="用户名" :autofocus="true" prefix-icon="el-icon-edit" v-model="form.username">
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input placeholder="密码" type="password" prefix-icon="el-icon-edit" v-model="form.password">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="login-btn" @click="onSubmit">登 录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import "../assets/css/reset.css";
import "../assets/sass/common.css";
import "../assets/sass/login.css";
import { ElMessage } from "element-plus";

import { apiFn, session } from "../assets/util.js";
import * as loginApi from "../api/login.js";
import { defineComponent, reactive, getCurrentInstance } from "vue";
import { useRouter } from 'vue-router'

const myMixin = {
  data: function () {
    return {
      loginApi
    };
  }
};
export default defineComponent({
  mixins: [myMixin],
  setup () {
    const router = useRouter();
    const { proxy } = getCurrentInstance();

    const form = reactive({
      username: '',
      password: '',
    });

    const checkForm = () => {
      if (form.username == "") {
        proxy.$message({
          title: "提示",
          message: "请输入用户名！",
          type: "warning",
          duration: 5000
        });
        return false;
      }
      if (form.password == "") {
        proxy.$message({
          title: "提示",
          message: "请输入密码！",
          type: "warning",
          duration: 5000
        });
        return false;
      }
      return true;
    }

    const onSubmit = () => {
      if (!checkForm()) {
        return;
      }
      let param = {
        username: form.username.trim(),
        password: form.password.trim()
      };
      apiFn()(loginApi, "login", param, proxy).then(res => {
        if (res && res.successful) {
          console.log('--------1111')
          router.replace("/");
          session("userInfo", res.data);
          session("activeIndex", "0_0");
        } else {
          ElMessage({
            type: "error",
            message: "账号密码错误"
          })
        }
      });
    }
    return {
      form,
      checkForm,
      onSubmit
    }
  }

});
</script>
