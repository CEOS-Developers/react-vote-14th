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

### Vote (태은 담당)
 
### 구현 내용
