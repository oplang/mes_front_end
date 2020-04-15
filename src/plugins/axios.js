"use strict";

import Vue from 'vue';
import axios from "axios";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

// 响应拦截器
_axios.interceptors.response.use(response => {
  // 对响应数据做点什么
  return response;
}, error => {
  // 全局错误提示
  if (error.response.data && error.response.data.errorCode) {
    Vue.prototype.$message({
      message: error.response.data.msg,
      type: 'error'
    });
  }
  return Promise.reject(error);
});

// 请求拦截器
_axios.interceptors.request.use(config => {
  // 全局请求添加请求头 token
  if (config.token) {
    config.headers['token'] = sessionStorage.getItem('token');
  }
  
  return config;
}, error => {
  return Promise.reject(error);
});

Plugin.install = function(Vue) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    },
  });
};

Vue.use(Plugin)

export default Plugin;
