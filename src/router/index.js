import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 全局路由守卫
router.beforeEach((to, from, next) => {
  let token = sessionStorage.getItem('token');

  if (token) {
    // 已登录的禁止加入登录页
    if (to.path === '/login') {
      return next({
        name: from.name ? from.name : 'index'
      });
    }

    next();
  } else {
    // 登录页跳过验证
    if (to.path === '/login') {
      return next();
    }

    // 首次进入主页时不提示
    if(from.name !== null && to.name != 'index') {
      Vue.prototype.$message({
        message: '请先登录',
        type: 'error'
      });
    }
    

    next({
      name: 'login'
    })
  }
})

export default router