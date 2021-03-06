# 지뢰 찾기 게임

<!-- <img width="400" height = "450" alt="스크린샷 2022-06-10 오전 1 46 28" src="https://user-images.githubusercontent.com/98930796/172900871-8b4683be-7f76-4277-816c-0f9fd92899ea.png"> -->

![Jun-10-2022 09-09-09](https://user-images.githubusercontent.com/98930796/172965186-bc73674a-7adf-49c6-a8f8-59cdd599958b.gif)

<br/>

### 📍 개요

- **작업 기간** : 6월 7일 ~ 6월 10일 (72 시간)
- **사용 기술 및 라이브러리** : React (vite), Redux-toolkit<br/>
  사용이유 <br/>
  - React (vite) : 배열 메서드를 활용해 짧은 코드로 DOM을 구상할 수 있으며, 각 셀을 클릭함에 따라 (state 변화) ui 가 동적으로 변화하는 프로젝트에 적합하다 생각하였다.
    또한, cra 보다 vite 가 속도면에서 우수하여 채택하였다.
  - Redux-toolkit : 실제 프로젝트들과 규모는 달라 props 를 통해 전달이 가능하긴 하지만, 모든 컴포넌트에서 mineData를 사용해 Board 를 그리고 있기 때문에 전역으로 관리를 하였고, 직관적으로 reducer type 명시가 가능한 Redux-toolkit을 사용하였다.

<br/>

### 📍 컴포넌트 구성

- **MineGame.jsx** : Title, InfoBox(지뢰갯수, start/restart 버튼, 시간), Board
- **Board.jsx** : 2차원 배열을 기반으로 tr 생성
- **Tr.jsx** : 2차원 배열을 기반으로 td생성
- **Td.jsx** : td 상세 내용
  <br/>
  구성 이유 <br/>
  각 셀의 모양세와 근본적인 이벤트 동작 기능은 같은데, 셀 마다 보여줄 내용이 다르고, 그에 따른 이벤트를 적용해야 하기 때문에
  컴포넌트를 위와 같은 방식으로 나누게 되었다.

<br/>

### 📍 구현 기능

- **초기 화면**
  - 닫혀있는 셀 8x8
  - 남은 지뢰 개수
  - start, restart 버튼
  - 소요 시간
- **start 버튼 클릭시 임의의 지뢰 data와 함께 Board 생성**
- **닫혀있는 셀 왼쪽 클릭 이벤트**
  - 지뢰인 경우: 지뢰가 표시되고 게임 종료 ⇒> 자동으로 reset
  - 지뢰가 아닌 경우: 해당 셀에 인접한 셀 중 지뢰가 있는 만큼의 숫자가 표시됨 ⇒ 숫자가 0인 경우 아무것도 표시하지 않음
  - 깃발인 경우 : 왼쪽 클릭 불가 처리
- **닫혀있는 셀 오른쪽 클릭 이벤트**
  - 화면에 표시된 남은 지뢰 개수에서 1이 줄어들고 클릭한 셀에 깃발이 표시
  - 남은 지뢰 개수가 0인 경우 아무일도 일어나지 않음
  - 깃발이 표시된 셀을 다시 오른쪽 클릭하면 깃발이 없어지고 남은 지뢰 개수가 1 늘어남
- **모든 셀을 열거나 깃발로 표시하면 게임이 종료**
- **restart 버튼을 통한 초기화**
- **start 후 소요된 시간을 표시**

<br/>

### 📍 배운 점 및 보완하면 좋은 점

- **배운 점**
  - React 사용 의의을 고려하여 로직을 고민해볼 수 있었다.
  - 전역 관리의 필요성을 고려하며, 로직을 고민해볼 수 있었다.
  - 조건들을 구현하면서 발생하는 예상치 못한 예외 처리들을 경험해 볼 수 있었다.
  - Redux-toolkit을 활용해 전역 상태 관리를 직접 구현해볼 수 있었다.

<br/>

- **보완하면 좋은 점**

  - mineData를 State를 통해 관리 하는 로직 구상
  - 해당 State 변화에 따른 사이드 이펙트 잡기
    (useMemo, useCallback 등 메모이제이션을 통한 최적화)
  - 클릭한 셀에 인접한 셀이 빈칸이라면, 연쇄적으로 여는 기능 추가

   <br/>

  해당 내용들을 보완하여, 좀 더 React 사용 이유와 의의에 가깝도록 설계/구상하는 방법을 익히고, 사이드 이펙트 컨트롤을 할 수 있도록 리팩토링을 진행해보면 좋을 것 같다.
