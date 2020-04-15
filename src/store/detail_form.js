export default  {
  state: {
    // 所有已打开的详情页面的表单数据
    data: {}
  },
  mutations: {
    // 页面刷新时初始化数据
    recoverDetailData(state) {
      let data = sessionStorage.getItem('detailFormData');
      state.data = data ? JSON.parse(data) : {};
    },
    // 添加详情页面表单数据
    addDataForm(state, {routeName, data}) {
      state.data[routeName] = data;
      // 本地存储数据
      sessionStorage.setItem('detailFormData', JSON.stringify(state.data));
    },
    // 设置某个详情页面的表单
    setDataForm(state, {routeName, form}) {
      state.data[routeName].form = form;
      state.data[routeName].initForm = { ...form };
      // 本地存储数据
      sessionStorage.setItem('detailFormData', JSON.stringify(state.data));
    }
  },
  actions: {
  },
};
