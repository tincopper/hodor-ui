<template>
  <el-container class="home-container ">
    <el-aside class="home-aside-content">
      <el-scrollbar class="menu-scrollbar">
        <el-menu :default-active="defaultActive" :default-openeds="open_list" router ref="navMenu" unique-opened :collapse="isCollapse" class="el-menu-vertical-in-home">
          <el-menu-item index='0_0' route='/' class="gohome">
            <i class="el-icon-ump-home home"></i>
            <span class="logo-section">
              <span>HodorScheduler</span>
            </span>
          </el-menu-item>
          <template v-for="(route, index) in asideMenus">
            <template v-if="route.children">
              <el-sub-menu v-if='route.roleId==0?userInfo.roleId==0?true:false:true' :key="route.index" :index="route.index+''">
                <template v-slot:title>
                  <i :class="route.icon"></i>
                  <span>{{route.name}}</span>
                </template>
                <el-menu-item @click="clickMenu" v-for="(cRoute, cIndex) in route.children" :key="cIndex" :index="route.index+'_'+cIndex" :route="cRoute.router">
                  <a class='helpA' v-if='cRoute.router=="/help"' :href="helpAddress" target="_blank">
                    {{ cRoute.name}}
                  </a>
                  <span v-else> {{ cRoute.name}}</span>
                </el-menu-item>

              </el-sub-menu>
            </template>
            <template v-else>
              <el-menu-item @click="clickMenu" :route="route.router" :index="route.index+''">
                <i :class="route.icon"></i>
                <template v-slot:title>
                  <span>{{route.name}} </span>
                </template>

              </el-menu-item>
            </template>
          </template>
        </el-menu>
      </el-scrollbar>
    </el-aside>
    <el-container class="flex-1" id="content-container">
      <el-header class="home-header flex-container" height="60px">
        <div class="menu-controller">
          <i class="el-icon-ump-alignjustify cursor-p" @click="toggleMenu"></i>
        </div>
        <div class="user-name">
          <i class="el-icon-ump-user"></i>
          {{userInfo.username}}&nbsp;&nbsp;|&nbsp;&nbsp;
          <span class="esearch-link" @click="logOut">
            <i class="el-icon-ump-tuichu"></i>退出
          </span>
        </div>
      </el-header>
      <el-main id="loading-area">
        <router-view></router-view>
      </el-main>
      <el-footer>HodorScheduler v1.0.0</el-footer>
    </el-container>
  </el-container>
</template>

<script>
import "@/assets/fonts/icon/style.css";
import "@/assets/css/reset.css";
import "@/assets/sass/common.css";
import "@/assets/sass/index.css";
import * as asideMenu from "../assets/js/menu.js";
import { apiFn, session } from "../assets/util.js";
import * as loginApi from "../api/login.js";
import { defineComponent, onMounted, reactive, ref, toRefs, onUpdated } from "vue";
import { useRoute, useRouter } from 'vue-router'

const myMixin = {
  data: function () {
    return {
      loginApi
    };
  }
};
export default defineComponent({
  mixins: [myMixin],
  components: {
    // eslint-disable-next-line vue/no-unused-components
    asideMenu
  },
  setup () {
    const router = useRouter();
    const menuRef = reactive({
      menu: []
    });
    const userButtonsRef = reactive({
      userButtons: []
    });
    const activeIndex = ref('');
    const defaultActive = activeIndex.value ? activeIndex : "0_0";
    const isCollapse = ref(false)
    const navMenu = ref(null);
    const userInfo = reactive({});
    const userName = ref('');
    // 获取用户信息
    const getUserInfo = () => {
      let userInfos = session("userInfo");
      if (userInfos) {
        Object.assign(userInfo, userInfos);
      }
    }
    getUserInfo();
    const logOut = () => {
      apiFn()(loginApi, "logOut", null, this).then(res => {
        router.replace("/login")
        session("userInfo", "");
      });
    }
    const hasSubMenu = (menu) => {
      return menu.subMenu && menu.subMenu.length > 0;
    }

    const changeMainContent = (moduleName, btns) => {
      userButtonsRef.userButtons = btns;
      this.currentTabComponent = moduleName;
    }
    const clickMenu = (e) => {
      localStorage.removeItem("$routeParams");
    }
    const toggleMenu = () => {
      defaultActive.value = navMenu.value.activeIndex;
      isCollapse.value = !isCollapse.value;
    }
    const setMenuCollapse = () => {
      let bodyWidth = document.body.getBoundingClientRect().width;
      if (userButtonsRef) {
        defaultActive.value = navMenu.value.activeIndex;
      }

      this.isCollapse = bodyWidth < 960 ? true : false;
    }
    onMounted(() => {
      setMenuCollapse();
      window.addEventListener("resize", () => {
        setMenuCollapse();
      });
    })
    onUpdated(() => {
      if (navMenu.value) {
        session("activeIndex", navMenu.value.activeIndex);
      }
    })
    return {
      menus: [],
      helpAddress: 'https://github.com/dromara/hodor',
      isCollapse,
      defaultActive,
      activeIndex,
      userInfo,
      userName,
      ...toRefs(menuRef),
      ...toRefs(userButtonsRef),
      asideMenus: asideMenu.menu,
      open_list: ["4"],
      logOut,
      hasSubMenu,
      changeMainContent,
      clickMenu,
      toggleMenu,
      setMenuCollapse
    }
  }


});
</script>





