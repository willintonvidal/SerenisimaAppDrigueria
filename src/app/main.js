import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import App from './App.vue';
import CreateItem from './components/CreateItem.vue';
import DisplayItemEdit from './components/DisplayItemEdit.vue';
import DisplayItem from './components/DisplayItem.vue';
import EditItem from './components/EditItem.vue';
import CreateUsu from './components/CreateUsu.vue';
import DisplayUsuarios from './components/DisplayUsuarios.vue';
import EditUsuario from './components/EditUsuario.vue';
import ItemInfo from './components/ItemInfo.vue';
import DisplayItemUsos from './components/DisplayItemUsos.vue';
const routes = [
  {
    name: 'DisplayItem',
    path: '/',
    component: DisplayItem
  },{
    name: 'DisplayItemEdit',
    path: '/DisplayItemEdit',
    component: DisplayItemEdit
  },
  {
    name: 'CreateItem',
    path: '/create/item',
    component: CreateItem
  },
  {
    name: 'EditItem',
    path: '/edit/:id',
    component: EditItem
  },
  {
    name: 'CreateUsu',
    path: '/usuario/addusuarios',
    component: CreateUsu
  },
  {
    name: 'DisplayUsuarios',
    path: '/DisplayUsuarios',
    component: DisplayUsuarios
  },
  {
    name: 'EditUsuario',
    path: '/editusuario/:id',
    component: EditUsuario
  },
  {
    name: 'ItemInfo',
    path: '/ItemInfo',
    component: ItemInfo
  },
  {
    name: 'DisplayItemUsos',
    path: '/DisplayItemUsos',
    component: DisplayItemUsos
  }
];

const router = new VueRouter({ mode: 'history', routes: routes });
new Vue(Vue.util.extend({ router }, App)).$mount('#app');
