//路由配置

export default [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: '登录',
    path: '/login',
    component: './login',
    layout: false,
  },
  {
    name: '首页',
    path: '/home',
    component: './home',
    meta: {
      icon: 'home',
    },
  },
  {
    name: '百度地图',
    path: '/bMap',
    component: './bMap',
    meta: {
      icon: 'home',
    },
  },
];
