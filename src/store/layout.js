export default  {
  state: {
    // 路由标签
    routeTags: []
  },
  mutations: {
    // 从本地存储中恢复数据
    recoverRouteTags(state) {
      let tags = sessionStorage.getItem('routeTags');
      
      state.routeTags = tags ? JSON.parse(tags) : [
        { 
          title: '首页',
          pathName: 'index',
          isActive: true
        }
      ];
    },
    // 设置路由标签
    setRouteTags(state, routeTags) {
      state.routeTags = routeTags
      // 本地存储路由标签
      sessionStorage.setItem('routeTags', JSON.stringify(routeTags));
    },
  },
  actions: {
  },
};
