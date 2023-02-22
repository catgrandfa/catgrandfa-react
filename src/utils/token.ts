import CryptoJS from 'crypto-js';

const TokenKey = 'x-token';
const GlobalKey = 'x-global';

export function setUserToken(userInfo: object) {
  if (userInfo) {
    localStorage.setItem(TokenKey, encrypt(JSON.stringify(userInfo)))
  }
}