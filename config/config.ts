//umi配置读取文件
import { defineConfig } from '@umijs/max';
import routes from './routes';
import proxy from './proxy';
import defaultSettings from './defaultSettings';
const { REACT_APP_ENV } = process.env;

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: { ...defaultSettings },
  proxy: proxy[REACT_APP_ENV || 'dev'],
  //路径配置
  alias: {},
  jsMinifier: 'terser',
  routes,
  npmClient: 'pnpm',
  targets: {
    ie: 11,
  },
  mock: {},
  define: {
    Request_Success_code: 200,
  }
});
