<template>
  <div>
    <el-container
      style="position: absolute; top: 0; right: 0; bottom: 0; left: 0"
    >
      <el-header class="d-flex align-items-center border-bottom shadow-sm">
        <!-- Logo -->
        <h2 class="mr-auto mb-0">{{ $conf.logo }}</h2>
        <!-- 顶部导航菜单 -->
        <el-menu
          :default-active="navMenu.activeIndex | numToStr"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#304156"
          text-color="#fff"
          active-text-color="#1690ff"
          @select="selectTopNav"
        >
          <el-menu-item
            v-for="(item, index) in navMenu.navList"
            :key="index"
            :index="index | numToStr"
            >{{ item.name }}</el-menu-item
          >

          <!-- 用户操作菜单 -->
          <el-submenu index="100">
            <template slot="title">
              <el-avatar
                size="small"
                :src="
                  user.avatar
                    ? user.avatar
                    : 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
                "
              ></el-avatar>
              {{ user.username }}
            </template>
            <el-menu-item index="100-1">退出</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-header>

      <el-container style="height: 100%">
        <!-- 侧边导航菜单 -->
        <el-aside width="200px">
          <el-menu
            :default-active="asideNavActiveIndex | numToStr"
            class="el-menu-vertical-demo"
            style="height: 100%;"
            @select="selectAsideNav"
            unique-opened
          >
            <!-- 侧边导航菜单项 -->
            <component
              v-for="(item, index) in asideNavList"
              :key="index"
              :is="item.subNavList ? 'el-submenu' : 'el-menu-item'"
              :index="index | numToStr"
            >
              <!-- 含子菜单导航 -->
              <template v-if="item.subNavList">
                <template slot="title">
                  <i :class="item.icon"></i>
                  <span>{{ item.name }}</span>
                </template>
                <el-menu-item
                  v-for="(subItem, subIndex) in item.subNavList"
                  :key="subIndex"
                  :index="`${index}-${subIndex}`"
                  >{{ subItem.name }}</el-menu-item
                >
              </template>
              <!-- 不含子菜单导航 -->
              <template v-else>
                <i :class="item.icon"></i>
                <span slot="title">{{ item.name }}</span>
              </template>
            </component>
          </el-menu>
        </el-aside>
        <!-- 主内容区 -->
        <el-main class="pb-4">
          <!-- 面包屑 -->
          <div
            v-if="routeTags.length > 0"
            class="d-flex align-items-center mb-3 border-bottom overflow-auto hidden-scroll-bar"
            style="margin: -20px; padding: 6px;"
          >
            <el-tag
              v-for="(item, index) in routeTags"
              :key="index"
              :effect="item.isActive ? 'dark' : 'light'"
              :closable="item.pathName !== 'index'"
              class="mr-2"
              style="cursor: pointer"
              type="primary"
              size="medium"
              disable-transitions
              @click="toRoute(item.pathName)"
              @close="handleTagClose(item)"
            >
              {{ item.title }}
            </el-tag>
          </div>
          <!-- 显示内容 -->
          <router-view></router-view>
          <!-- 回到顶部 -->
          <el-backtop target=".el-main"></el-backtop>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      navMenu: {}
    };
  },
  computed: {
    ...mapState({
      user: state => state.user.user,
      routeTags: state => state.layout.routeTags
    }),
    // 侧边导航列表
    asideNavList() {
      return this.navMenu.navList[this.navMenu.activeIndex].subNavList;
    },
    // 侧边导航激活索引
    asideNavActiveIndex: {
      get() {
        return this.navMenu.navList[this.navMenu.activeIndex].subActiveIndex;
      },
      set(value) {
        this.navMenu.navList[this.navMenu.activeIndex].subActiveIndex = value;
        return value;
      }
    }
  },
  watch: {
    $route() {
      // 本地存储导航激活索引
      this.storageActiveIndex();
      // 设置路由标签
      this.setRouteTags();
    }
  },
  methods: {
    // 选择导航项
    selectTopNav(index) {
      // 用户登出
      if (index === "100-1") {
        return this.logout();
      }
      this.navMenu.activeIndex = index;

      let activeNavList = this.navMenu.navList[index];
      if (activeNavList.subActiveIndex > -1) {
        // 存在已激活子路由
        this.toRoute(
          activeNavList.subNavList[activeNavList.subActiveIndex].pathName
        );
      }
    },
    selectAsideNav(index) {
      this.asideNavActiveIndex = index;

      if (typeof index === "string" && index.includes("-")) {
        // 二级导航
        let indexs = index.split("-");
        this.toRoute(
          this.asideNavList[indexs[0]].subNavList[indexs[1]].pathName
        );
      } else {
        this.toRoute(this.asideNavList[index].pathName);
      }
    },
    // 退出登录
    logout() {
      // this.axios.post('/admin/logout', {}, {
      //   headers: {
      //     token: this.token
      //   }
      // })
      //   .finally(response => {
      //     this.$store.commit('logout');
      //     this.$router.push({ name: 'login' });
      //   })
      this.$store.commit("logout");
      this.toRoute("login");
    },
    // 本地存储导航激活索引
    storageActiveIndex() {
      let activeIndex = {
        top: this.navMenu.activeIndex,
        aside: this.asideNavActiveIndex
      };

      sessionStorage.setItem("activeIndex", JSON.stringify(activeIndex));
    },
    // 恢复激活导航路由、索引
    recoverActiveNav() {
      if (sessionStorage.getItem("activeIndex")) {
        let activeIndex = JSON.parse(sessionStorage.getItem("activeIndex"));
        this.navMenu.activeIndex = activeIndex.top;
        this.asideNavActiveIndex = activeIndex.aside;
        // 有激活路由标签则前往对应路由
        let activeRouteTag = this.routeTags.find(tag => tag.isActive);
        if (typeof activeRouteTag !== "undefined") {
          return this.toRoute(activeRouteTag.name);
        }
        // 路由跳转
        this.selectAsideNav(this.asideNavActiveIndex);
      } else {
        this.navMenu.activeIndex = this.asideNavActiveIndex = 0;
      }
    },
    // 设置路由标签
    setRouteTags() {
      let meta = this.$route.meta;
      let tag = this.routeTags.find(item => item.pathName === this.$route.name);

      // 取消所有标签激活状态
      this.routeTags.forEach(item => {
        item.isActive = false;
      });

      if (typeof tag !== "undefined") {
        // 当前路由在路由标签中
        // 激活当前路由对应标签
        tag.isActive = true;
        // 设置导航激活索引
        if (typeof tag.navIndex !== "undefined") {
          this.navMenu.activeIndex = tag.navIndex.top;
          this.asideNavActiveIndex = tag.navIndex.left;
          this.storageActiveIndex();
        }
      } else {
        // 当前激活路由索引
        let navIndex = {
          top: this.navMenu.activeIndex,
          left: this.asideNavActiveIndex
        };
        // 添加路由标签
        this.routeTags.push({
          title: meta.title,
          pathName: this.$route.name,
          navIndex,
          isActive: true
        });
      }

      this.$store.commit("setRouteTags", this.routeTags);
    },
    // 监听路由标签关闭事件
    handleTagClose(item) {
      let index = this.routeTags.findIndex(
        tag => tag.pathName === item.pathName
      );
      // 关闭的是当前路由
      if (this.$route.name === item.pathName) {
        // 返回上一路由
        this.$router.back();
      }
      this.routeTags.splice(index, 1);

      this.$store.commit("setRouteTags", this.routeTags);
    },
    // 前往路由
    toRoute(pathName) {
      if (this.$route.name !== pathName) {
        this.$router.push({ name: pathName });
      }
    }
  },
  filters: {
    numToStr(num) {
      return num.toString();
    }
  },
  created() {
    this.navMenu = this.$conf.navMenu;
    // 恢复路由标签
    this.$store.commit("recoverRouteTags");
    // 初始化 vuex 详情表单数据
    this.$store.commit("recoverDetailData");
    // 恢复用户信息
    this.$store.commit("recoverUserInfo");
    // 恢复激活导航路由、索引
    this.recoverActiveNav();
  }
};
</script>

<style>
.el-header {
  background-color: #304156;
  /* color: #409eff; */
  text-align: center;
  line-height: 60px;
}
</style>
