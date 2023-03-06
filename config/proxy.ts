//代理配置
export default {
  dev: {
    '/api': {
      target: 'localhost:8089/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  test: {},
  pre: {},
};
