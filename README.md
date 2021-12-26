# 마지막 미션 : React vote!

## 서론

이번 과제는 구현도 신경을 썼지만, 웨일링을 시작하기 전에 협업 프로세스를 정하기 아주 좋은 기회였다고 생각합니다.

[구현링크](https://react-vote-14th-ph7sbw7e4-team-whaling.vercel.app/)

## 그래서 이번 과제에서 한 것

### 협업

- Jira 이슈 관리
- slack 개발채널을 이용한 소통
- Notion에 개발 문서 정리
- 브랜치/커밋룰/네이밍룰/work tree 정하기

-> 사소해보이지만 협업을 시작하기 전에 꼭 정해야 할 것들에 대해 정했습니다. ^\_^

### 개발 스택

- 프레임워크: Typescript 기반 React
- 상태관리: redux, redux-thunk with typesafe-actions
- api 통신: axios
- 스타일: styled-components, antd
- 코드 관리: eslint, prettier
- 파일 트리

```bash
+---app
|   |   api.tsx
|   |   customAxios.ts
|   |   rootReducer.ts
|   |   store.ts
|   +---auth
|   |       actions.tsx
|   |       reducer.tsx
|   |       thunks.tsx
|   |       types.tsx
|   \---vote
|           actions.tsx
|           reducer.tsx
|           thunks.tsx
|           types.tsx
+---components
|       Containers.tsx
|       useInput.tsx
+---hoc
|       withAuth.tsx
+---hooks
|       useAuth.tsx
|       useVote.tsx
+---pages
|   +---login
|   |       Login.tsx
|   +---signUp
|   |       SignUp.tsx
|   |
|   \---vote
|           Vote.tsx
\---utils
        createAsyncThunk.tsx
```

### Auth (기욱 담당)

안녕하세요! 이번 과제에서는 크게 인증로직과 투표로직이 있었는데요, 저는 인증로직을 만들었습니다.

본격적으로 로직을 작성하기에 앞서 태은님과 네이밍, 디렉토리 구조, 사용할 라이브러리, 브랜치/커밋 규칙 등에 대해 논의를 하고 세팅을 해서 그런지 별다른 conflict 없이 수월하게 협업을 진행할 수 있었습니다!

이전까지 redux와 redux 미들웨어를 사용할 때 [Ducks](https://medium.com/@matthew.holman/what-is-redux-ducks-46bcb1ad04b7) 패턴을 주로 사용했었는데 이번 과제에서는 action, reducer, thunk, type을 모듈로 나눠서 만들었습니다. 웨일링 플젝 코드도 이렇게 나눠서 관리할 것 같아요. 아무래도 나누면 코드를 수정할 때 이 파일 저 파일 옮겨다니는 게 귀찮을 수 있지만 어차피 덕 패턴도 한 파일 안에서 위 아래로 훑는 게 손목이 아픈지라.. 플젝 코드가 커지면 나누는 게 나을 것 같습니다!

인증관련 로직은 함수형 프로그래밍 접근 중 하나인 [hof](https://medium.com/javascript-scene/higher-order-functions-composing-software-5365cf2cbe99)(JS의 map, filter 등도 hof죠!) 를 통해 구현했습니다!

[hof 가 녹아든 React의 HOC](https://ko.reactjs.org/docs/higher-order-components.html#dont-mutate-the-original-component-use-composition)
리액트 컴포넌트를 받는 withAuth 함수 내부에서 인증됐는지 여부를 확인하는 로직을 두고, react-router-dom의 route별로 withAuth를 실행시켜주는 방식을 사용했습니다. 이에 따라 withAuth에서 return하는 컴포넌트를 다르게 분기시켜줄 수 있었습니다.

### Vote (태은 담당)

안녕하세요 투표를 담당한 김태은입니다. 투표는 굉장히 간단한 로직이기때문에 짧게 설명하자면, GET 요청을 통해 저장된 후보 목록을 받아오고, POST 요청을 통해 해당하는 후보의 표 수를 +1 시켜줍니다. 그리고 깔쌈하게 정리하고 싶지만 디자인에는 자신이 없어 antd table을 사용했습니다.

그리고 투표하자마자 순위가 바로 바뀌었으면 좋겠어서 deps로 넣어준다던가 하는 꼼수를 부리려고 했지만 로직이 더 커진다면 무한로딩으로 실행이 되지 않을 수도 있기 때문에 그냥 간단하게 받아온 candidate 목록을 sorting하는 알고리즘을 사용했습니다. (생각보다 단순해서 허탈했음.....^^;)

이번 과제는 기욱님이 세팅을 너무 잘해주셔서 편하게 했고, 또 많은 것을 배울 수 있었습니다.

## 구현 내용

### 1. 회원가입

중복되는 이메일/아이디는 가입할 수 없습니다.

![image](https://user-images.githubusercontent.com/55427367/147399169-191e4f04-82e9-4162-ae20-b29ca05ab771.png)

### 2. 로그인

회원가입을 했을 때 가능합니다. 이메일/아이디/비밀번호가 틀리면 로그인 할 수 없습니다.

![image](https://user-images.githubusercontent.com/55427367/147399173-b60fdfef-2acd-4419-87e9-7134c0822bf9.png)

### 3. 투표

한 아이디 당 1번 가능합니다. 로그인 완료시 투표 창으로 이동합니다.

![image](https://user-images.githubusercontent.com/55427367/147399176-31471903-e918-41dc-ae2b-0bcb53b7153d.png)

### 4. 이미 투표를 완료한 경우

![image](https://user-images.githubusercontent.com/55427367/147399773-392dd8fd-f9f0-41a2-a27e-8bc22e405684.png)
