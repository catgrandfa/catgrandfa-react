//umi配置读取文件
import { defineConfig } from '@umijs/max';
import routes from './routes';
import proxy from './proxy';
import defaultSettings from './defaultSettings';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: { ...defaultSettings },
  proxy: proxy['dev'],
  //路径配置
  alias: {},
  jsMinifier: 'terser',
  routes,
  npmClient: 'pnpm',
  targets: {
    ie: 11,
  },
});
