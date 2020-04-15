export default  {
  state: {
    // 路由标签
    user: {},
    token: ''
  },
  mutations: {
    // 从本地存储中恢复用户信息
    recoverUserInfo(state) {
      let user = sessionStorage.getItem('user');
      let token = sessionStorage.getItem('token');
      
      state.user = user ? JSON.parse(user) : {};
      state.token = token ? JSON.parse(token) : '';
    },
    // 用户登录
    login(state, { user, token }) {
      state.user = user;
      state.token = token;

      sessionStorage.setItem('user', JSON.stringify(user));
      sessionStorage.setItem('token', JSON.stringify(token));
    },
    // 用户登出
    logout(state) {
      state.user = {};
      state.token = '';

      sessionStorage.clear();
      localStorage.clear();
    }
  },
  actions: {
  },
};
