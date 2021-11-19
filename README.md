# 마지막 미션 : React vote!

# 서론

안녕하세요 프론트엔드 14기 여러분! 파트장입니다.


어느덧 약 두달간의 프론트엔드 스터디의 마지막까지 달려오게 되었습니다.
그동안 여러분들에게 개인적인 성장이 있었길 바라는 마음입니다. 이번 스터디는 백엔드와 함께 진행하게 됩니다. 모던 웹에서, REST API가 주류로 떠오름에 따라, 프론트엔드와 백엔드의 구분이 이전보다 매우 명확해졌습니다.
주로 백엔드는 API 서버의 역할을, 프론트엔드는 이를 이용해 사용자에게 UI를 제공하는 역할로 웹이 분화되었습니다. 그 말은 곧, API 없이는 사용자에게 의미있는 서비스를 제공하기 힘들어 지겠죠. 여러분께서도 차후 팀에서 프로젝트를 진행하시게 되면서 팀 내의 백엔드 개발자들과 API에 대해 소통하시게 될 일이 많아질 것입니다.

이번 과제는 백엔드 개발자들이 전달해준 API를 사용해 보는것 입니다!
일종의 투표 서비스를 개발해 보는 것인데요, 이 투표 결과가 실제 파트장 투표로 이어질수도... 아닐수도,...
백엔드 개발자와 함께, 기획 의도에 따라 클라이언트 사이드에서 API를 조금 더 효율적으로 사용할 수 있는 방법에 대해 고민해보고, 논의해보는 시간을 가져보시기 바랍니다.

또한 이번 과제는 팀 단위로 진행하게 되는데요, 팀 내의 백엔드 개발자는 물론이고, 같은 팀 내의 프론트와도 협업하게 되는 이번 과제에서, 어떻게 하면 실제 프로덕트 개발시에 역할 분담을 효율적으로 할 수 있을지에 대해서 기반을 다질 수 있는 계기가 되길 바랍니다!

# 미션

## 미션 목표
- REST API, AJAX등을 통한 서버와의 통신 방법을 이해합니다
- async/await, Promise등 JavaScript 내애서의 비동기 처리를 이해합니다
- API document를 통해 백엔드 개발자와 소통하는 방법을 익힙니다
- 팀 내의 프론트엔드 개발자와 적절한 역할 분담을 통해 개발 효율을 높이는 방법에 대해 고민합니다

## 미션 기한
이번 미션 제출은 과제 공개 후 2주 후 입니다 (2021년 12월 3일) 다만 시험기간을 고려하여 스터디는 시험기간이 끝난 이후로 예정되어있습니다.
따라서 과제 제출 기간 이후로 자유롭게 수정이 가능합니다.

## 필수요건
- 사이트를 여러분만의 감각으로 꾸며보세요. (UI/UX에 대한 여러분의 감각을 최대한 발휘해주시기 바랍니다)
- HTTPS를 통해 서버와 통신하세요
- 외의 사항은 기획 문서를 참고하세요

## 선택요건
- API Fetch는 어떤 방식을 사용하던 무방합니다 (axios, Fetch API, $.ajax)
- `Promise.then()` 보단 `async/await`를 사용해 보세요. 더 최신 스펙이랍니다.

## 링크 및 참고자료

- [리액트 API 연동의 기본](https://react.vlpt.us/integrate-api/01-basic.html)
- [자바스크립트 - 동기(Synchronous)? 비동기(asynchronous)?](https://ljtaek2.tistory.com/142)
- [async와 await, 비동기를 동기코드 처럼](https://kamang-it.tistory.com/entry/JavaScript11async%EC%99%80-await-%EB%B9%84%EB%8F%99%EA%B8%B0%EB%A5%BC-%EB%8F%99%EA%B8%B0%EC%BD%94%EB%93%9C-%EC%B2%98%EB%9F%BC)
- [REST API 제대로 알고 사용하기](https://meetup.toast.com/posts/92)
- [axios란? (feat. Fetch API)](https://velog.io/@shin6403/React-axios%EB%9E%80-feat.-Fetch-API)

