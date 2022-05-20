# 원티드 프리온보딩 휴먼스케이프 과제 7-A팀

[🌐 배포주소](https://humanscape-7a.netlify.app/)<br />
[🐶 팀 노션](https://www.notion.so/Humanscape-7A-e8b93a1d7adb4dfd9e530bae5ea2075e)

<br />

## 👬 **팀원**

- 남효현, 한지선, 배수인, 설혜린, 이득규

<br />

## 📅 **개발 기간**

- 기간: 2022년 5월 18일 ~ 2022년 5월 20일

<br />

## 🔧 **기술스택**

- Typescript, react, scss, react-query, redux-toolkit, recoil <br />

<br />

## 🌲 **파일 구조**

```
-src
├─assets
│  └─svgs
├─components
│  ├─Footer
│  ├─Header
│  ├─Layout
│  ├─Loading
│  ├─Search
│  │  ├─SearchInput
│  │  └─SearchResult
│  ├─Seo
│  └─Spinner
├─hooks
│  ├─keyPress
│  └─worker
├─routes
│  ├─ReactQuerySearch
│  ├─RecoilSearch
│  └─ReduxToolkitSearch
├─services
├─states
├─styles
│  ├─base
│  ├─constants
│  └─mixins
├─types
└─utils
```

## **💻 설치 및 실행 방법**

1. yarn 설치

```
 npm i yarn
```

2. 레포지토리 클론

```
git clone git@https://github.com/wanted-pre-onboarding-7team/Humanscape-7A.git
```

3. dependencies 설치

```
yarn install
```

4. 실행

```
yarn start
```

## 📝 **과제 구현 목록 및 사용 방법**

**![검색시 스피너](https://user-images.githubusercontent.com/69314161/169557631-a4c54487-e398-4eaf-b89c-c962b7b35679.gif)**

- 검색어 입력 시, 로딩 화면

**![키다운 및 엔터 선택](https://user-images.githubusercontent.com/69314161/169557718-655ae7b3-b134-437e-bb68-2aa4b1adf889.gif)**

- 검색어 리스트 키보드로 이동 및 Enter시, input창으로 text 이동

**![검색결과 없음](https://user-images.githubusercontent.com/69314161/169557724-d5569f97-a8e9-4dbc-b180-5fe52a502544.gif)**

- 검색 결과 없을 시, `검색 결과가 없습니다` 화면 출력

 <br />

### recoil, useQuery를 사용한 로컬 캐싱 구현

- 캐싱, 값 업데이트 등 비동기 과정을 관리
- suspense를 활용한 에러 핸들링

<br />

### Recoil를 통한 global State 관리

- 검색 키워드 관리
- 검색 결과창 index 값 관리(키보드 이벤트)

<br />

### Redux-toolkit

- 비동기 통신 구현
- redux-toolkit-query를 이용한 캐싱 미구현

<br />

### 키보드로 추천 검색어 이동

- 검색창에서 onkeydown 이벤트를 활용하여 구현
- recoil로 global State 사용하여 keydown 이벤트 발생 시 인덱스 관리
- 리스트의 인덱스와 global State와 비교 후 같을 경우 클릭 이벤트 및 색상 적용

<br />

### 검색어 일치 부분 Bold 처리

- `검색어 결과 값`과 내가 입력한 `검색어`를 파라미터로 받는다.
- `split` 으로 입력한 검색어를 기준으로 문자열을 분리하여 배열로 반환해준다. 이때, `정규표현식`을 사용하여 대소문자 구분이 없도록 만들고, 검색어 결과 값에 내가 입력한 검색어가 여러번 나와도 모두 포함해주도록 한다.
- 문자열 분리가 된 배열을 `map` 함수를 이용하여, 검색어와 일치하는 부분만 inline-style으로 fontWeight을 bold 처리 해주었다.

<br />  

### API 최적화

한글 입력 시, 연속 되는 호출을 막아주기 위해서 seTimeout 함수를 사용하여 디바운싱 작업
<br />

#### recoil

1. selector의 get async를 사용하여 비동기 호출을 하여 케싱 적용 cachePolicy_UNSTABLE keep-all 값 적용(기본값)

#### useQuery

1. staleTime, cacheTime을 설정하여 fresh 상태 유지
2. retry: 호출 실패 시 재요청 횟수를 2번으로 제한
3. refetchOnWindowFocus: stale 상태인 경우 refetch 옵션 사용하지 않기 때문에 기본 값 false 설정
4. refetchOnMount: 추천 검색 리스트의 서버 데이터 변동이 없기 때문에 기본 값 false 설정

<br />

## 😅 **어려웠던 점**

- recoil, useQuery, redux를 같이 사용하며 하나의 공통 컴포넌트 이용에 있어서 Suspense 사용하는데 Suspense의 Loading 범위를 제안하며 코딩하는 부분이 어려웠다.
- 로컬에서는 api통신이 원활했지만, 배포 시 통신 오류로 인해 http-proxy-middleware를 이용하여 중간 url를 바꿔줌으로써 오류를 해결했다.
- redux-toolkit: 전역상태 리덕스 사용하여 캐싱 처리를 하려고 했으나, 복잡한 리덕스 설정 방법과 리덕스 툴킷을 사용해서 캐싱 처리를 하는 방법들의 정보가 매우 부족했다. redux-toolkit-query를 이용해서 api 통신 설정을 해주면 useQuery처럼 data, error, isLoading 값들을 불러올 수 있고, 기본적으로 캐시 동작 60초 동안 유지된다.

<br />

## 🤔 **프로젝트 소감**

Humanscape-7팀은 Store와 비동기 통신을 할 때 `React Query`를 함께 사용하면 더 좋다고 해서 그냥 사용하는 것이 아닌, 많은 개발자들이 왜 `Redux/Redux-Toolkit/Recoil` 과 React Query의 조합으로 스토어와 비동기 통신 관리를 하는지, 그렇다면 더 나은 방법은 없을까 같은 의문에서 부터 이러한 기획을 하게 되었습니다. 저희는 상태관리, 캐싱 처리, 비동기 통신, 전역 state 관리를 redux-toolkit, recoil, useQuery 통해 각각 진행했습니다.


1. Recoil: 비동기 통신의 결과값을 global state 처럼 다룰 수 있고 캐싱 기능을 제공 한다. Suspense를 사용하는 경우와 사용하지 않는 경우를 분할할 수 있지만, use-query 보다 간결성이 떨어진다.

2. React-query: 통신 데이터를 global state 형식으로 지정 할 필요 없이 어느 곳에서나 사용할 수 있는 장점이 있다. 또한 isLoading, isError, isSuccess 등 부수적인 state 와 suspense, retry, staleTiem 등 여러 기능을 제공해준다.

3. Redux-toolkit: store는 전역으로 상태를 관리가 필요한 팝업, 여러 UI 상태관리, 인증 정보 관리 등 Client 전반에 전역으로 관리되는 상태만 가지고 본래의 목적에 맞게 사용을 해야 하고, useQuery를 사용한 비동기 캐싱처리가 가장 편리하고 적합한 것 같다.

<br />

비동기 통신에 최적화 된 useQuery를 사용함으로 가독성 및 편의성을 증진하고, redux-toolkit & recoil 같은 상태 관리 라이브러리는 전역으로 관리되는 상태에만 적용하여 본래의 목적에 맞게 사용하는게 좋다고 생각합니다.
