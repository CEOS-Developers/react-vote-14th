import API from './API';

// check email form
export function isEmail(asValue: string) {
  var regExp =
    // eslint-disable-next-line
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
}
export function isPassword(asValue: string) {
  var regExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/; //  6자 이상의 영어소문자, 숫자 조합
  return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
}

export function isUserName(asValue: string) {
  var regExp = /^[가-힣a-zA-Z]+$/;
  // 한글,영문으로만 되어있는 이름일 경우
  if (regExp.test(asValue)) {
    if (asValue === 'admin') {
      window.alert('ㅎㅎ장난질하지마쇼');
      return false;
    } else return true;
  }
}

export function isPart(asValue: string) {
  if (asValue === 'frontend') return true;
  else if (asValue === 'backend') return true;
  else return false;
}

export async function emailDuplicateCheck(input: string) {
  return new Promise((resolve, reject) => {
    API.post('/duplicate/email', { email: input }).then((res) => {
      if (res.status === 200) {
        return resolve(res.data);
      } else {
        return reject(false);
      }
    });
  });
}
export async function userNameDuplicateCheck(input: string) {
  return new Promise((resolve, reject) => {
    API.post('/duplicate/username', { username: input }).then((res) => {
      if (res.status === 200) {
        return resolve(res.data);
      } else {
        return reject(false);
      }
    });
  });
}
