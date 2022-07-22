
import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'


import Home from '../view/Home.vue'
import Layout from '../view/Layout.vue'
import Intor from '../view/Intor.vue'
import Switch from '../view/Switch.vue'
const routes: RouteRecordRaw[] = [
  {
    path: '/', component: Home
  },
  {
    path: '/doc', component: Layout,
    children: [
      {
        path: 'intor', component: Intor
      },
      {
        path: 'switch', component: Switch
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router