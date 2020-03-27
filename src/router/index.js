import Vue from "vue";
import VueRouter from "vue-router";
import Login from "./../views/login";
import Layout from "./../components/Layout";
import Domo1 from "./../views/demo1";
import Domo2 from "./../views/demo2";
import Domo3 from "./../views/demo3";
Vue.use(VueRouter);

export default new VueRouter({
   routes:[
     {
       path:'/login',
       name:'login',//路由名称
       component:Login //组件对象
     },
     {
      path: "/",
      name: "layout", 
      component: Layout, 
      redirect: "/demo1",
      children: [
        {
          path: "/demo1",
          component: Domo1
        }
      ]
    },
    {
      path: "/demo2",
      component: Layout,
      children: [
        {
          path: "/",
          component: Domo2
        }
      ]
    },
    {
      path: "/demo3",
      component: Layout,
      children: [
        {
          path: "/",
          component: Domo3
        }
      ]
    },
   ]
});

