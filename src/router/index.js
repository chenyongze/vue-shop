import Vue from 'vue'
import VueRouter from 'vue-router'
/*
import Home from '../pages/home'
*/
import Detail from '../pages/goodsDetail'
import Msg from '../components/message'
import center from '../pages/center'


Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: resolve => require(['../pages/home'],resolve),
    meta: {
      title:'home'
    }
  },
  {
    path: '/msg',
    component: Msg
  },
  {
    path: '/detail',
    component: Detail,
    children: [
      {
        path:'msg',
        component: Msg
      }
    ]
  },
  {
      path: '/center',
      component: center,
  }
]
export default new VueRouter({
    mode: 'history',
    routes
})