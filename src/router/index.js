import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "1_About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/1_About.vue"),
    children:[
      {
        path:'a',
        components:{
          a:()=>import('../components/ComponentsA.vue'),
        },
      },
      {
        path:'b',
        components:{
          b:()=>import('../components/ComponentsB.vue'),
        },
      },
      {
        path:'c',
        components:{
          left:()=>import('../components/ComponentsC.vue'),
          right:()=>import('../components/ComponentsD.vue'),
        },
      }
    ]
  },
  {
    path:"/ruler",
    name:"2_Ruler",
    component:()=>
      import("../views/2_Ruler.vue"),
  },
  {
    path:"/image",
    name:"3_Image",
    component:()=>
      import("../views/3_Image.vue"),
  },
  {
    path:"/cart",
    name:"4_Cart",
    component:()=>
      import("../views/4_Cart.vue"),
  },
  {
    path:"/message",
    name:"5_Message",
    component:()=>
      import("../views/5_Message.vue"),
  },
  {
    path:"/movie",
    name:"6_Movie",
    component:()=>
      import("../views/6_Movie.vue"),
  },
  {
    path:"/RandomID/:id",
    name:"RandomID",
    component:()=>
      import("../views/RandomID.vue"),
    props:(route)=>{
      return{
        id:route.params.id,
      }
    }
  },
  // 404
  {
    path:'/:pathMatch(.*)*',
    component:()=>import('../views/NotFound.vue'),
  //返回name頁
    // redirect:{
    //   name:'5_Movie'
    // }
  },
  {
    path:'/login',
    component:()=>import('../views/Login.vue'),

  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
