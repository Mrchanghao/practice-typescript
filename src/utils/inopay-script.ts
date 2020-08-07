let ediDate = '';
let merchantKey: string | undefined = undefined;
let payActionUrl = '.';
let device;
const keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

//ediDate 셋팅
function setEdiDate() {
  const dateObj = new Date();
  let hours: number | string = dateObj.getHours();
  let minutes: number | string = dateObj.getMinutes();
  let seconds: number | string = dateObj.getSeconds();
  let month: number | string = dateObj.getMonth() + 1;
  let date: number | string = dateObj.getDate();

  hours = hours ? hours : 0; // the hour '0' should be '12'
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  const strTime = hours.toString() + minutes.toString() + seconds.toString();

  month = month < 10 ? '0' + month.toString() : month.toString();
  date = date < 10 ? '0' + date.toString() : date.toString();
  ediDate = dateObj.getFullYear() + month + date + strTime;
}

// payActionUrl 셋팅
function setPayActionUrl(x: any) {
  payActionUrl = x;
}

/**
 * 결제모듈 호출 함수
 * @returns {Boolean}
 */
export function goPay(f: HTMLFormElement | null, key: string) {
  if (!f) return;
  setEdiDate();
  checkDevice(f);
  const dvcStr = f.device.value;
  merchantKey = key;
  f.ediDate.value = ediDate;
  if (checkData(f)) {
    makeEncKey(f);
    if (f.FORWARD.value == 'Y') {
      const left = (screen.width - 680) / 2;
      const top = (screen.height - 650) / 2;
      const winopts = 'left=' + left + ',top=' + top + ',toolbar=no,location=no,directories=no, status=no,menubar=no,scrollbars=no, resizable=no,width=680,height=650';
      window.open('', 'payWindow', winopts);
      f.target = 'payWindow';
      f.submit();
    } else {
      f.submit();
    }
    return false;
  } else {
    return false;
  }
}
/*
 *  결제 요청 device 구분 function (모바일/PC , 브라우져 구분)
 */
function checkDevice(frm: HTMLFormElement) {
  const UserAgent = navigator.userAgent;
  // 모바일/PC 구분
  if (
    UserAgent.match(/iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null ||
    UserAgent.match(/LG|SAMSUNG|Samsung/) != null
  ) {
    frm.device.value = 'mobile';
  } else {
    frm.device.value = 'pc';
  }
  // 브라우져 구분
  if (navigator.appName.indexOf('Microsoft') > -1) {
    if (navigator.appVersion.indexOf('MSIE 7') > -1) {
      frm.BrowserType.value = 'MSIE 7';
    } else if (navigator.appVersion.indexOf('MSIE 6') > -1) {
      frm.BrowserType.value = 'MSIE 6';
    }
  }
  return;
}

/*
 *  기본 결제 데이터 검증 function
 */
function checkData(frm: HTMLFormElement) {
  const BuyerEmail = frm.BuyerEmail.value;
  const Moid = frm.Moid.value;
  const MID = frm.MID.value;
  const Amt = frm.Amt.value;
  // 상점아이디 검증
  if (MID == undefined || MID == '') {
    alert('상점 MID 를 입력해 주세요.');
    return false;
  }
  // 결제요청금액 검증
  if (Amt == undefined || Amt == '') {
    alert('결제요청금액을 입력해 주세요.');
    return false;
  }
  // 전문생성일시 검증
  if (ediDate == undefined || ediDate == '') {
    alert('결제요청일시를 확인해 주세요.');
    return false;
  }
  // 상점 MID Key 검증
  if (merchantKey == undefined || merchantKey == '') {
    alert('상점 Key를 확인해 주세요.');
    return false;
  }
  // 메일주소 검증
  // 메일주소 형식 검증
  if (BuyerEmail != undefined && BuyerEmail != '') {
    if (!EmailCheck(BuyerEmail)) {
      alert('구매자메일주소가 형식에 맞지 않습니다.');
      return false;
    }
  }
  // 주문번호 특수문자 체크
  if (isSpecial(Moid)) {
    alert('주문번호에는 특수문자가 허용되지 않습니다.');
    return false;
  }
  return true;
}

/*
 *  거래 검증용 데이터 생성 function
 */
function makeEncKey(frm: HTMLFormElement) {
  let strKey = '';
  const MID = frm.MID.value;
  const Amt = frm.Amt.value;
  strKey = ediDate + MID + Amt + merchantKey;
  frm.EncryptData.value = encode64(MD5(strKey));
}
/*
 *  특수 문자 체크
 */
function isSpecial(checkStr: string) {
  const checkOK = "~`':;{}[]<>,.!@#$%^&*()_+|\\/?";
  for (let i = 0; i < checkStr.length; i++) {
    const ch = checkStr.charAt(i);
    for (let j = 0; j < checkOK.length; j++) {
      if (ch == checkOK.charAt(j)) {
        return true;
        break;
      }
    }
  }
  return false;
}
/*
 *  E-Mail 형식 확인
 */
function EmailCheck(arg: string) {
  let vValue = '';
  if (arg.indexOf('@') < 0) return false;
  for (let i = 0; i < arg.length; i++) {
    vValue = arg.charAt(i);
    if (AlphaCheck(vValue) == false && NumberCheck(vValue) == false && EmailSpecialCheck(vValue) == false) return false;
  }
  return true;
}
/*
 *  영문 판별
 */
function AlphaCheck(arg: string) {
  const alphaStr = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (alphaStr.indexOf(arg) < 0) return false;
  else return true;
}
/*
 *  숫자 판별
 */
function NumberCheck(arg: string) {
  const numStr = '0123456789';
  if (numStr.indexOf(arg) < 0) return false;
  else return true;
}
/*
 *  Email 특수 문자 체크
 */
function EmailSpecialCheck(arg: string) {
  const SpecialStr = '_-@.';
  if (SpecialStr.indexOf(arg) < 0) return false;
  else return true;
}
/*
 * Base64 Encode / Decode 함수
 */
function encode64(input: string) {
  let output = '';
  let chr1, chr2, chr3;
  let enc1, enc2, enc3, enc4;
  let i = 0;
  do {
    chr1 = input.charCodeAt(i++);
    chr2 = input.charCodeAt(i++);
    chr3 = input.charCodeAt(i++);
    enc1 = chr1 >> 2;
    enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
    enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
    enc4 = chr3 & 63;
    if (isNaN(chr2)) {
      enc3 = enc4 = 64;
    } else if (isNaN(chr3)) {
      enc4 = 64;
    }
    output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4);
  } while (i < input.length);
  return output;
}

/****************************************************************************************
 * 금액을 위한 함수, 코더들은 이 function을 직접 부를 필요 없다. numOnly함수에 마지막
 * 파라미터를 true로 주고 numOnly를 부른다.
 ****************************************************************************************/
function cashReturn(numValue: string) {
  let cashReturn = '';
  for (let i = numValue.length - 1; i >= 0; i--) {
    cashReturn = numValue.charAt(i) + cashReturn;
    if (i != 0 && i % 3 == numValue.length % 3) cashReturn = ',' + cashReturn;
  }
  return cashReturn;
}
/**
 *
 *  MD5 (Message-Digest Algorithm)
 *  http://www.webtoolkit.info/
 *
 **/

const MD5 = function (string: string) {
  function RotateLeft(lValue: number, iShiftBits: number) {
    return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
  }

  function AddUnsigned(lX: number, lY: number) {
    const lX8 = lX & 0x80000000;
    const lY8 = lY & 0x80000000;
    const lX4 = lX & 0x40000000;
    const lY4 = lY & 0x40000000;
    const lResult = (lX & 0x3fffffff) + (lY & 0x3fffffff);
    if (lX4 & lY4) {
      return lResult ^ 0x80000000 ^ lX8 ^ lY8;
    }
    if (lX4 | lY4) {
      if (lResult & 0x40000000) {
        return lResult ^ 0xc0000000 ^ lX8 ^ lY8;
      } else {
        return lResult ^ 0x40000000 ^ lX8 ^ lY8;
      }
    } else {
      return lResult ^ lX8 ^ lY8;
    }
  }

  function F(x: number, y: number, z: number) {
    return (x & y) | (~x & z);
  }
  function G(x: number, y: number, z: number) {
    return (x & z) | (y & ~z);
  }
  function H(x: number, y: number, z: number) {
    return x ^ y ^ z;
  }
  function I(x: number, y: number, z: number) {
    return y ^ (x | ~z);
  }

  function FF(a: number, b: number, c: number, d: number, x: number, s: number, ac: number) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
  }

  function GG(a: number, b: number, c: number, d: number, x: number, s: number, ac: number) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
  }

  function HH(a: number, b: number, c: number, d: number, x: number, s: number, ac: number) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
  }

  function II(a: number, b: number, c: number, d: number, x: number, s: number, ac: number) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
  }

  function ConvertToWordArray(string: string) {
    let lWordCount;
    const lMessageLength = string.length;
    const lNumberOfWordsTemp1 = lMessageLength + 8;
    const lNumberOfWordsTemp2 = (lNumberOfWordsTemp1 - (lNumberOfWordsTemp1 % 64)) / 64;
    const lNumberOfWords = (lNumberOfWordsTemp2 + 1) * 16;
    const lWordArray = Array(lNumberOfWords - 1);
    let lBytePosition = 0;
    let lByteCount = 0;
    while (lByteCount < lMessageLength) {
      lWordCount = (lByteCount - (lByteCount % 4)) / 4;
      lBytePosition = (lByteCount % 4) * 8;
      lWordArray[lWordCount] = lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition);
      lByteCount++;
    }
    lWordCount = (lByteCount - (lByteCount % 4)) / 4;
    lBytePosition = (lByteCount % 4) * 8;
    lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
    lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
    lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
    return lWordArray;
  }

  function WordToHex(lValue: number) {
    let WordToHexValue = '',
      WordToHexValueTemp = '',
      lByte,
      lCount;
    for (lCount = 0; lCount <= 3; lCount++) {
      lByte = (lValue >>> (lCount * 8)) & 255;
      WordToHexValueTemp = '0' + lByte.toString(16);
      WordToHexValue = WordToHexValue + WordToHexValueTemp.substr(WordToHexValueTemp.length - 2, 2);
    }
    return WordToHexValue;
  }

  function Utf8Encode(string: string) {
    string = string.replace(/\r\n/g, '\n');
    let utftext = '';

    for (let n = 0; n < string.length; n++) {
      const c = string.charCodeAt(n);

      if (c < 128) {
        utftext += String.fromCharCode(c);
      } else if (c > 127 && c < 2048) {
        utftext += String.fromCharCode((c >> 6) | 192);
        utftext += String.fromCharCode((c & 63) | 128);
      } else {
        utftext += String.fromCharCode((c >> 12) | 224);
        utftext += String.fromCharCode(((c >> 6) & 63) | 128);
        utftext += String.fromCharCode((c & 63) | 128);
      }
    }

    return utftext;
  }

  let x = [];
  let k, AA, BB, CC, DD, a, b, c, d;
  const S11 = 7,
    S12 = 12,
    S13 = 17,
    S14 = 22;
  const S21 = 5,
    S22 = 9,
    S23 = 14,
    S24 = 20;
  const S31 = 4,
    S32 = 11,
    S33 = 16,
    S34 = 23;
  const S41 = 6,
    S42 = 10,
    S43 = 15,
    S44 = 21;

  string = Utf8Encode(string);

  x = ConvertToWordArray(string);

  a = 0x67452301;
  b = 0xefcdab89;
  c = 0x98badcfe;
  d = 0x10325476;

  for (k = 0; k < x.length; k += 16) {
    AA = a;
    BB = b;
    CC = c;
    DD = d;
    a = FF(a, b, c, d, x[k + 0], S11, 0xd76aa478);
    d = FF(d, a, b, c, x[k + 1], S12, 0xe8c7b756);
    c = FF(c, d, a, b, x[k + 2], S13, 0x242070db);
    b = FF(b, c, d, a, x[k + 3], S14, 0xc1bdceee);
    a = FF(a, b, c, d, x[k + 4], S11, 0xf57c0faf);
    d = FF(d, a, b, c, x[k + 5], S12, 0x4787c62a);
    c = FF(c, d, a, b, x[k + 6], S13, 0xa8304613);
    b = FF(b, c, d, a, x[k + 7], S14, 0xfd469501);
    a = FF(a, b, c, d, x[k + 8], S11, 0x698098d8);
    d = FF(d, a, b, c, x[k + 9], S12, 0x8b44f7af);
    c = FF(c, d, a, b, x[k + 10], S13, 0xffff5bb1);
    b = FF(b, c, d, a, x[k + 11], S14, 0x895cd7be);
    a = FF(a, b, c, d, x[k + 12], S11, 0x6b901122);
    d = FF(d, a, b, c, x[k + 13], S12, 0xfd987193);
    c = FF(c, d, a, b, x[k + 14], S13, 0xa679438e);
    b = FF(b, c, d, a, x[k + 15], S14, 0x49b40821);
    a = GG(a, b, c, d, x[k + 1], S21, 0xf61e2562);
    d = GG(d, a, b, c, x[k + 6], S22, 0xc040b340);
    c = GG(c, d, a, b, x[k + 11], S23, 0x265e5a51);
    b = GG(b, c, d, a, x[k + 0], S24, 0xe9b6c7aa);
    a = GG(a, b, c, d, x[k + 5], S21, 0xd62f105d);
    d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
    c = GG(c, d, a, b, x[k + 15], S23, 0xd8a1e681);
    b = GG(b, c, d, a, x[k + 4], S24, 0xe7d3fbc8);
    a = GG(a, b, c, d, x[k + 9], S21, 0x21e1cde6);
    d = GG(d, a, b, c, x[k + 14], S22, 0xc33707d6);
    c = GG(c, d, a, b, x[k + 3], S23, 0xf4d50d87);
    b = GG(b, c, d, a, x[k + 8], S24, 0x455a14ed);
    a = GG(a, b, c, d, x[k + 13], S21, 0xa9e3e905);
    d = GG(d, a, b, c, x[k + 2], S22, 0xfcefa3f8);
    c = GG(c, d, a, b, x[k + 7], S23, 0x676f02d9);
    b = GG(b, c, d, a, x[k + 12], S24, 0x8d2a4c8a);
    a = HH(a, b, c, d, x[k + 5], S31, 0xfffa3942);
    d = HH(d, a, b, c, x[k + 8], S32, 0x8771f681);
    c = HH(c, d, a, b, x[k + 11], S33, 0x6d9d6122);
    b = HH(b, c, d, a, x[k + 14], S34, 0xfde5380c);
    a = HH(a, b, c, d, x[k + 1], S31, 0xa4beea44);
    d = HH(d, a, b, c, x[k + 4], S32, 0x4bdecfa9);
    c = HH(c, d, a, b, x[k + 7], S33, 0xf6bb4b60);
    b = HH(b, c, d, a, x[k + 10], S34, 0xbebfbc70);
    a = HH(a, b, c, d, x[k + 13], S31, 0x289b7ec6);
    d = HH(d, a, b, c, x[k + 0], S32, 0xeaa127fa);
    c = HH(c, d, a, b, x[k + 3], S33, 0xd4ef3085);
    b = HH(b, c, d, a, x[k + 6], S34, 0x4881d05);
    a = HH(a, b, c, d, x[k + 9], S31, 0xd9d4d039);
    d = HH(d, a, b, c, x[k + 12], S32, 0xe6db99e5);
    c = HH(c, d, a, b, x[k + 15], S33, 0x1fa27cf8);
    b = HH(b, c, d, a, x[k + 2], S34, 0xc4ac5665);
    a = II(a, b, c, d, x[k + 0], S41, 0xf4292244);
    d = II(d, a, b, c, x[k + 7], S42, 0x432aff97);
    c = II(c, d, a, b, x[k + 14], S43, 0xab9423a7);
    b = II(b, c, d, a, x[k + 5], S44, 0xfc93a039);
    a = II(a, b, c, d, x[k + 12], S41, 0x655b59c3);
    d = II(d, a, b, c, x[k + 3], S42, 0x8f0ccc92);
    c = II(c, d, a, b, x[k + 10], S43, 0xffeff47d);
    b = II(b, c, d, a, x[k + 1], S44, 0x85845dd1);
    a = II(a, b, c, d, x[k + 8], S41, 0x6fa87e4f);
    d = II(d, a, b, c, x[k + 15], S42, 0xfe2ce6e0);
    c = II(c, d, a, b, x[k + 6], S43, 0xa3014314);
    b = II(b, c, d, a, x[k + 13], S44, 0x4e0811a1);
    a = II(a, b, c, d, x[k + 4], S41, 0xf7537e82);
    d = II(d, a, b, c, x[k + 11], S42, 0xbd3af235);
    c = II(c, d, a, b, x[k + 2], S43, 0x2ad7d2bb);
    b = II(b, c, d, a, x[k + 9], S44, 0xeb86d391);
    a = AddUnsigned(a, AA);
    b = AddUnsigned(b, BB);
    c = AddUnsigned(c, CC);
    d = AddUnsigned(d, DD);
  }

  const temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);

  return temp.toLowerCase();
};
