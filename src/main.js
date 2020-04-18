import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import config from './common/config'
import DataShower from './components/base/DataShower.vue';
import DataEditor from './components/base/DataEditor.vue';

Vue.component('data-shower', DataShower)
Vue.component('data-editor', DataEditor)

// 按需引入 element 组件
import {
  Button,
  ButtonGroup,
  Icon,
  Form,
  FormItem,
  Input,
  Card,
  Link,
  Message,
  MessageBox,
  Dialog,
  Loading,
  Tooltip,
  Row,
  Col,
} from 'element-ui';

Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Icon);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Card);
Vue.use(Link);
Vue.use(Dialog);
Vue.use(Tooltip);
Vue.use(Row);
Vue.use(Col);
Vue.use(Loading.directive);
Vue.prototype.$loading = Loading.service;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message;
Vue.prototype.$conf = config;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')