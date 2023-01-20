# ⛰ WeTrekking

<p align="center">
<br>
<img width="60%" src="https://user-images.githubusercontent.com/107983013/205194971-11f741b7-a8cf-488b-981d-3de0e8c2c658.png">
</br>
</p>

## 프로젝트 소개

<p align="justify">

**WeTrekking**은 기존의 동호회와는 달리

등산이라는 취미를 가진 여러 다양한 사람들이 모여 일회성 크루를 형성해주는 서비스를 제공합니다.

등산을 처음 해보시는 등린이분들도, 

등산이 너무 좋아 해외까지 산타러가는 등산 매니아분들도,

집 주변 산으로 운동삼아 등산을 가는 분들도

**위트레킹을 이용해보시는 것은 어떨까요?**

### [URL] : https://wetrekking.kr
</p>

<br>

## 백엔드 기술 스택

Javascript, Typescript, NestJS, TypeORM, GraphQL, MySQL, MongoDB, Redis, WebSocket


<br>

## 담당 역할

- 등산로 API [바로가기](https://github.com/hoon2-kim/WeTrekking_server/tree/develop/src/apis/trekking)
- 채팅 API [바로가기](https://github.com/hoon2-kim/WeTrekking_server/tree/develop/src/apis/chat)
- 포인트 이용내역 API [바로가기](https://github.com/hoon2-kim/WeTrekking_server/tree/develop/src/apis/pointHistory)
- 댓글,대댓글 API [바로가기](https://github.com/hoon2-kim/WeTrekking_server/tree/develop/src/apis/crewComments)
- Git 관리자
- API Docs 제작

<br>

## 팀 프로젝트를 통해 배운점

<p align="justify">

### 팀프로젝트를 통해 배운점

- 공공데이터포털 활용

팀프로젝트인 wetrekking에서 메인 기능 중 하나인 등산로 보여주기를 맡게 되었고, 백엔드인 저는 전국 등산로의 좌표를 추출하여 프론트에게 넘겨야 했습니다.
그래서 저는 V월드의 등산로 오픈API를 사용하기로 결정하였습니다.

V월드의 등산로 오픈API를 활용하여 읍면동코드와 산 이름을 입력하게 되면 해당 산의 등산로 좌표가 나오도록 구현을 하였습니다.
읍면동코드 입력을 위해 읍,면,리를 입력하면 읍면동코드가 나오는 오픈API를 하나 더 활용하였습니다.
하지만 오픈API를 이용한 방식의 단점으로 해당 산의 주소와 읍면동이 일치하지 않으면 결과가 나오지 않았습니다.

그래서 두번째 방법으로 산림청 홈페이지의 데이터를 이용하였습니다. 전국 등산로의 정보와 좌표가 GPX파일에 담겨 있었고, GPX파일을 QGIS라는 프로그램을 이용하여
등산로의 이름, 난이도, 좌표만을 추출하여 JSON파일로 가공하였습니다. 그리고 JSON파일의 정보들을 MongoDB에 저장하여 산 이름을 검색하면 등산로 좌표가 나오는
조회API를 작성하였습니다.

이러한 역할을 맡은 계기로 다양한 공공데이터포털을 사용해볼 수 있게 되었으며, 활용방법도 알게 되었습니다.

- 협업의 중요성

부트캠프에서 프로젝트 팀 편성이 되었을 때, 저를 포함한 팀원 전부가 팀 프로젝트 경험이 처음이라 다들 걱정이 많았습니다.
특히, 프론트엔드와 백엔드간의 소통이 제일 힘들었던거 같습니다. 프론트엔드에서는 백엔드에 대해 잘 몰랐으며, 마찬가지로 백엔드에서도 프론트엔드에 대해 몰라서
작업 도중 서로 우리 쪽에서는 이렇게 하면 되는데 왜? 저 쪽에서는 안된다고 할까? 라고 생각이 많이 들었습니다.
그래서 처음에는 의견충돌도 많았고 기획도 계속해서 변경이 되었습니다.

그래서 이러한 충돌을 해결하기 위해 매일 프론트와 백엔드가 같이 모여 회의를 진행하였으며, 서로가 모르는 부분과 이해하지 못하는 부분을 설명해주며 하나하나씩 의견출동을
해결해 나갔습니다.

이러한 경험을 통해 얻은 교훈은 서로의 입장에서만 생각하면 안되고 대화를 통해 의견을 조율해 나가는 과정이 매우 중요하다는 것을 알게되었습니다.

</p>
<br>
