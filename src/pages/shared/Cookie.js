// 쿠키에서 받아오는 함수
const getCookie = (name) => {
  //쿠키는 세미콜론 단위로 저장되었고, 이전에 setCookie를 해주었다면
  //cookie 안에 `; name=ACCESS_TOKEN` 형태로 저장되어 있을 것임!
  //split을 통해서 쿠키를 파싱해서 `; name=ACCESS_TOKEN`가 있는지 확인해보자!
  //있다면 length가 2인 배열에 parts[1]에는 ACCESS_TOKEN이, parts[0]에는 나머지 쿠키가 담길 것
  let value = '; ' + document.cookie;
  let parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts[1];
  }
};

// 쿠키에 저장하는 함수
const setCookie = (name, token) => {
  let date = new Date();
  //30분 뒤 cookie expire
  date.setTime(date.getTime() + 30 * 60 * 1000);
  document.cookie = `${name}=${token};expires=${date.toUTCString()};`;
};

export { getCookie, setCookie };
