import { getCookie, setCookie } from '~/utils/storage';
import { userTokenKey } from '~/containers/Home/constants';

export const tokenManager = (() => {
  let token = getCookie(userTokenKey);
  return {
    get token() {
      return token;
    },
    set token(value: string) {
      setCookie(userTokenKey, value, undefined, window.location.hostname.replace(/(?:.+\.)?(.+\..+)/, '$1'));
    },
  };
})();
