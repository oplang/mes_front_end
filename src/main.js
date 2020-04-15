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
  Select,
  Option,
  DatePicker,
  Icon,
  Form,
  FormItem,
  Input,
  Container,
  Header,
  Aside,
  Main,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Avatar,
  Backtop,
  Tag,
  Card,
  Table,
  TableColumn,
  Pagination,
  Link,
  Message,
  MessageBox,
  Dialog,
  Loading,
  Calendar,
  Tooltip,
  Row,
  Col,
} from 'element-ui';

Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Select);
Vue.use(Option);
Vue.use(DatePicker);
Vue.use(Icon);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Avatar);
Vue.use(Backtop);
Vue.use(Tag);
Vue.use(Card);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Pagination);
Vue.use(Link);
Vue.use(Dialog);
Vue.use(Calendar);
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