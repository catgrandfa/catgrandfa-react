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
];
