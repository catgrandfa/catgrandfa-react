// 运行时配置
import { history } from "@umijs/max";
// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate

const loginPath = '/login'

type CurrentUser = {
  username: string;
  realName: string;
  nickName?: string;
}

// const bMapKey = 'wiK7TA380vuaK7eGEPjVh7qrhbE1jptv'
// const bMapUrl = '//api.map.baidu.com/api?type=webgl&v=1.0&ak=';
// // window['BMAPGL_URL'] = BMAPGL_URL;
// // window['BMAPGL_OFFLINE_AK'] = 'wiK7TA380vuaK7eGEPjVh7qrhbE1jptv';
// // window['BMAPGL_84'] = false;
// (function () {
//   console.log('百度地图')
//   document.write(
//     '<script type="text/javascript" src="+' + bMapUrl + bMapKey + '"></script>'
//   );
// })();


export async function getInitialState(): Promise<{ currentUser: CurrentUser, fetchUserInfo: () => any }> {
  let currentUser;
  //提取用户信息
  const fetchUserInfo = async () => {
    try {
      const token = localStorage.getItem('loginKey')
      if (!token) {
        history.push(loginPath);
      }
    } catch (error) {
      console.log(error)
      history.push(loginPath);
    }
  }

  return { currentUser };
}

export const layout = () => {
  return {
    // logo: '',
    menu: {
      locale: false,
    },
  };
};