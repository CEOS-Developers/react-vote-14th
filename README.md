# 마지막 미션 : React vote!

## 서론
이번 과제는 구현도 신경을 썼지만, 웨일링을 시작하기 전에 협업 프로세스를 정하기 아주 좋은 기회이지 않았나 싶네요!


## 그래서 이번 과제에서 한 것
### 협업
- Jira 이슈 관리
- slack 개발채널을 이용한 소통
- Notion에 개발 문서 정리
- 브랜치/커밋룰/네이밍룰/work tree 정하기 <br> 

-> 사소해보이지만 협업을 시작하기 전에 꼭 정해야 할 것들에 대해 정했습니다. ^_^

### 개발 스택
- 프레임워크: Typescript 기반 React
- 상태관리: redux, redux-thunk with typesafe-actions
- 스타일: styled-components, antd design
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

본격적으로 로직을 작성하기에 앞서 태은님과 네이밍, 디렉토리 구조, 사용할 라이브러리, 브랜치/커밋 규칙 등에 대해 논의를 하고 세팅을 해서 그런지 별다른 conflict 없이 수웛하게 협업을 진행할 수 있었습니다!

이전까지 redux와 redux 미들웨어를 사용할 때 [Ducks](https://medium.com/@matthew.holman/what-is-redux-ducks-46bcb1ad04b7) 패턴을 주로 사용했었는데 이번 과제에서는 action, reudcer, thunk, type을 모듈로 나눠서 만들었습니다. 웨일링 플젝 코드도 이렇게 나눠서 관리할 것 같아요. 아무래도 나누면 코드를 수정할 때 이 파일 저 파일 옮겨다니는 게 귀찮을 수 있지만 어차피 덕 패턴도 한 파일 안에서 위 아래로 훑는 게 손목이 아픈지라.. 플젝 코드가 커지면 나누는 게 나을 것 같습니다!

인증관련 로직은 함수형 프로그래밍 접근 중 하나인 [hof](https://medium.com/javascript-scene/higher-order-functions-composing-software-5365cf2cbe99)(JS의 map, filter 등도 hof죠!) 를 통해 구현했습니다! 

[hof 가 녹아든 React의 HOC](https://ko.reactjs.org/docs/higher-order-components.html#dont-mutate-the-original-component-use-composition)
리액트 컴포넌트를 받는 withAuth 함수 내부에서 인증됐는지 여부를 확인하는 로직을 두고, react-router-dom의 route별로 withAuth를 실행시켜주는 방식을 사용했습니다. 이에 따라 withAuth에서  return하는 컴포넌트를 다르게 분기시켜줄 수 있었습니다.


### Vote (태은 담당)
 
### 구현 내용
