## 배포 링크
[MailedIt Vote!](https://mailedit-vote.vercel.app)
vercel을 통해 배포하였습니다.

## 시연 화면
<img width="1624" alt="스크린샷 2021-12-26 오후 5 44 30" src="https://user-images.githubusercontent.com/79887293/147411902-b2ba0c7c-3504-4686-a1bb-e4063c5e33f9.png">

![Dec-26-2021 18-30-37](https://user-images.githubusercontent.com/79887293/147411876-30de1759-0f6f-465d-9702-b353fbd10f1f.gif)


## 미션 목표

- REST API, AJAX등을 통한 서버와의 통신 방법을 이해합니다
- async/await, Promise등 JavaScript 내애서의 비동기 처리를 이해합니다
- API document를 통해 백엔드 개발자와 소통하는 방법을 익힙니다
- 팀 내의 프론트엔드 개발자와 적절한 역할 분담을 통해 개발 효율을 높이는 방법에 대해 고민합니다


## 역할 분담

### 현재

- [x] 로그인
- [x] 회원가입

### 주현

- [x] 투표 페이지
- [x] 결과 페이지  


## 구현에 신경 쓴 부분

### 현재

- [x] useContext로 전역 상태 관리

  > 로그인 form, 회원가입 form에서 로직이 비슷하기 때문에 `useContext`를 이용하여 반복되는 로직을 분리하였습니다.<br>
  > api 호출 시 지연 시간동안 spinner를 띄우기 위해 페이지 어느 곳이든 필요한 곳에서 가져다 쓸 수 있도록 `useContext`로 분리하였습니다.

- [x] custom Hook을 통한 반복되는 로직 처리

  > 회원가입, 로그인 form에서 form의 내용이 다 채워져 있을 경우에 button을 활성화하기 위해 form을 체크하는 로직을 분리하여 custom hook으로 구현하였습니다.<br>
  > 역시 `text input`을 두 페이지 모두 구현하려면 로직이 겹치기 때문에 따로 custom hook을 만들어 구현하였고, `useReducer`를 추가로 사용해 보았습니다.  

### 주현

- [x] API 호출 시 반복되는 `base url`을 따로 분리하였습니다.

  > `axios.create` 를 사용하여 baseURL, header를 공통적으로 적용하였고, 로그인 시 사용자에게 부여되는 `token`을 가져오는 로직 또한 공통적으로 호출하였습니다.

- [x] 투표 종료 시 `animation` 구현

  > 특수효과, 화면 전환에 필요한 애니매이션을 `useCallBack`과 라이브러리들을 사용하여 `UX`를 향상하였습니다.

- [x] 반복적으로 사용되는 `component` 분리
  > 투표 화면, 결과 화면에서 반복적으로 나타나는 컴포넌트들을 분리하여 재사용성을 높였습니다.  


## API Fetch에 사용한 방식

`axios`를 사용하였고, `promise`, `then` 방식과 `async/await` 방식 둘 다 사용하였습니다.

백엔드에서의 `api` 호출의 `response`에 대한 방식 또한 두 가지 방법에 맞춰 각기 다른 방식으로 구현해 보았습니다.

추가로 `postman`을 사용하여 먼저 `API` 테스트를 진행하고, 그 후 실제 코드에서 사용하는 방식으로 협업의 효율을 높였습니다.


## 팀원과의 협업과 백엔드와의 협업

### 프론트엔드끼리의 협업 방식

- 먼저 각자 개발할 파트를 분리하였고, `directory` 구조 작성을 끝낸 뒤에 각자 구현해야 하는 페이지 개발에 들어갔습니다.

- 추가로 공통적으로 쓰이는 `COLOR`나 함수들은 `util`에 모아, 함께 사용하여 효율을 높였습니다.

- 커밋 방식 또한 `gitmoji`를 사용함과 동시에 `commit message` 방식도 통일하여 쉽게 피드백이 가능하도록 하였습니다.

- `pull request` 방식으로 코드를 `push`한 후, 코드 리뷰를 통해 상대방의 코드를 쉽게 이해할 수 있었습니다.

### 백엔드와의 협업 방식

- 구현에 필요한 기능들에 대한 협의를 먼저 진행한 후, `response`에 대한 논의를 진행했습니다.

- Slack 채널을 만들어 `ERD`와 `API` 공유를 하였습니다.

- Slack 에 `github action`을 연동하여 `commit`, `push`, `deploy`에 대한 push 알람을 설정하였습니다.

- `Django` admin 페이지를 사용하여 쉽게 여러 `API`들에 대한 테스트를 진행할 수 있었습니다.
