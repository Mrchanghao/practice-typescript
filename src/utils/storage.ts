export function setCookie(cookieName: string, cookieValue: string, exdays = 0, cookieDomain?: string, cookiePath?: string) {
  const d = new Date();
  let cookieText = escape(cookieName) + '=' + escape(cookieValue);
  cookieText += exdays ? '; Expires=' + d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000) : '';
  cookieText += cookieDomain ? '; Domain=' + cookieDomain : '';
  cookieText += cookiePath ? '; Path=' + cookiePath : '';
  document.cookie = cookieText;
}

export function getCookie(cname: string) {
  const name = cname + '=';
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}
