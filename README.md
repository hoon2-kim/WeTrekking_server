# ⛰ 귀염 2조 - WeTrekking

<p align="center">
<img width="60%" src="https://user-images.githubusercontent.com/107983013/205194971-11f741b7-a8cf-488b-981d-3de0e8c2c658.png">
</p>

<br><br>

# 📝 WeTrekking 소개

**위트레킹**은 기존의 동호회와는 달리

등산이라는 취미를 가진 여러 다양한 사람들이 모여 일회성 크루를 형성해주는 서비스를 제공합니다.

등산을 처음 해보시는 등린이분들도, 

등산이 너무 좋아 해외까지 산타러가는 등산 매니아분들도,

집 주변 산으로 운동삼아 등산을 가는 분들도

**위트레킹을 이용해보시는 것은 어떨까요?**

<br><br>

# 😄 배포 주소

**✨ WeTrekking** : https://wetrekking.kr

<br><br>

# ❤️ 팀원 소개

<p align="center">
<img width="60%" src="https://user-images.githubusercontent.com/107983013/205196274-f22c0a63-dd07-4912-81f5-e8ab8e1ea1c8.jpeg">
<img width="60%" src="https://user-images.githubusercontent.com/107983013/205196658-81a115c7-6734-4e66-b5e1-5acecf64d278.jpeg">
</p>

<br><br>

# 🛠 기술 스택

<p align="center">
<img width="60%" src="https://user-images.githubusercontent.com/107983013/205196814-f1ed73f8-7eb5-4b91-bdf2-34d80bdd2cf0.jpeg">
</p>

<br><br>

# ⭐️ Data Flow

<p align="center">
<img width="50%" src="https://user-images.githubusercontent.com/107983013/205197140-f3e83eaa-d6f6-4d0c-95de-3c528c5a701c.png">
</p>

<br><br>

# 🌈 ERD

<p align="center">
<img width="70%" src="https://user-images.githubusercontent.com/107983013/205197502-c8e61906-a0f7-4860-b081-aab881a3b5c5.png">
</p>

<br><br>

# 📔 API Docs

<p align="center">
<img src="https://user-images.githubusercontent.com/107983013/205201424-5f99dc2d-7b9a-44e5-8f1e-512b1e2cd9aa.png">
</p>

# 🗂 프로젝트 폴더 구조

```
📁wetrekking-server
├── .vscode
│   └── settings.json
├── elk
│   └── logstash
│       ├── logstash.conf
│       ├── mysql-connector-java-8.0.28.jar
├── src
│   ├── apis
│   │   ├── auth
│   │   │   ├── auths.controller.ts
│   │   │   ├── auths.module.ts
│   │   │   ├── auths.resolver.ts
│   │   │   └── auths.service.ts
│   │   ├── chat
│   │   │   ├── schemas
│   │   │   │   └── chat.schema.ts
│   │   │   │   └── room.schema.ts
│   │   │   ├── chat.gateway.ts
│   │   │   ├── chat.module.ts
│   │   │   ├── chat.resolver.ts
│   │   │   └── chat.service.ts
│   │   ├── crewBoardImages
│   │   │   ├── crewBoardImage.module.ts
│   │   │   ├── crewBoardImage.resolver.ts
│   │   │   ├── crewBoardImage.service.ts
│   │   │   └── entities
│   │   │       └── crewBoardImage.entity.ts
│   │   ├── crewBoards
│   │   │   ├── crewBoard.module.ts
│   │   │   ├── crewBoard.resolver.ts
│   │   │   ├── crewBoard.service.ts
│   │   │   ├── dto
│   │   │   │   ├── createCrewBoard.input.ts
│   │   │   │   ├── crewBoardAndUser.output.ts
│   │   │   │   ├── crewUserList.output.ts
│   │   │   │   └── updateCrewBoard.input.ts
│   │   │   └── entities
│   │   │       └── crewBoard.entity.ts
│   │   ├── crewComments
│   │   │   ├── crewComment.module.ts
│   │   │   ├── crewComment.resolver.ts
│   │   │   ├── crewComment.service.ts
│   │   │   ├── dto
│   │   │   │   ├── createCrewComment.input.ts
│   │   │   │   ├── createSubCrewComment.input.ts
│   │   │   │   ├── updateCrewComment.input.ts
│   │   │   │   └── updateSubCrewComment.input.ts
│   │   │   └── entities
│   │   │       └── crewComment.entity.ts
│   │   ├── crewUserList
│   │   │   ├── crewUserList.module.ts
│   │   │   ├── crewUserList.resolver.ts
│   │   │   ├── crewUserList.service.ts
│   │   │   ├── dto
│   │   │   │   └── crewUserList.output.ts
│   │   │   └── entities
│   │   │       └── crewUserList.entity.ts
│   │   ├── dib
│   │   │   ├── dib.module.ts
│   │   │   ├── dib.resolver.ts
│   │   │   ├── dib.service.ts
│   │   │   ├── dto
│   │   │   │   └── dibsWithCrewBoard.output.ts
│   │   │   └── entities
│   │   │       └── dib.entity.ts
│   │   ├── email
│   │   │   └── email.service.ts
│   │   ├── files
│   │   │   ├── file.module.ts
│   │   │   ├── file.resolver.ts
│   │   │   ├── file.service.ts
│   │   │   └── postman.multiple.txt
│   │   ├── iamport
│   │   │   └── iamport.service.ts
│   │   ├── likes
│   │   │   ├── like.module.ts
│   │   │   ├── like.resolver.ts
│   │   │   ├── like.service.ts
│   │   │   ├── entities
│   │   │       └── like.entity.ts
│   │   ├── mountains
│   │   │   ├── mountain.module.ts
│   │   │   ├── mountain.resolver.ts
│   │   │   ├── mountain.service.ts
│   │   │   └── entities
│   │   │       └── mountain.entity.ts
│   │   ├── phone
│   │   │   ├── phone.module.ts
│   │   │   ├── phone.resolver.ts
│   │   │   └── phone.service.ts
│   │   ├── pointHistory
│   │   │   ├── pointHistory.module.ts
│   │   │   ├── pointHistory.resolver.ts
│   │   │   ├── pointHistory.service.ts
│   │   │   └── entities
│   │   │       └── pointHistory.entity.ts
│   │   ├── pointPayments
│   │   │   ├── pointPayment.html
│   │   │   ├── pointPayment.module.ts
│   │   │   ├── pointPayment.resolver.ts
│   │   │   ├── pointPayment.service.ts
│   │   │   └── entities
│   │   │       └── pointPayment.entity.ts
│   │   ├── reviewBoardImages
│   │   │   ├── reviewBoardImage.module.ts
│   │   │   ├── reviewBoardImage.resolver.ts
│   │   │   ├── reviewBoardImage.service.ts
│   │   │   └── entities
│   │   │       └── reviewBoardImage.entity.ts
│   │   ├── reviewBoards
│   │   │   ├── reviewBoard.module.ts
│   │   │   ├── reviewBoard.resolver.ts
│   │   │   ├── reviewBoard.service.ts
│   │   │   ├── dto
│   │   │   │   ├── createReviewBoard.input.ts
│   │   │   │   └── updateReviewBoard.input.ts
│   │   │   └── entities
│   │   │       └── reviewBoard.entity.ts
│   │   ├── reviewComments
│   │   │   ├── reviewComment.module.ts
│   │   │   ├── reviewComment.resolver.ts
│   │   │   ├── reviewComment.service.ts
│   │   │   ├── dto
│   │   │   │   └── updateReviewComment.input.ts
│   │   │   └── entities
│   │   │       └── reviewComment.entity.ts
│   │   ├── reviewCount
│   │   │   └── reviewCount.entity.ts
│   │   ├── trekking
│   │   │   ├── map.html
│   │   │   ├── map2.html
│   │   │   ├── trekking.module.ts
│   │   │   ├── trekking.resolver.ts
│   │   │   ├── trekking.service.ts
│   │   │   └── schemas
│   │   │   │   ├── trekking.schema.ts
│   │   │   │   └── trekkingInfo.schema.ts
│   │   ├── users
│   │   │   ├── user.module.ts
│   │   │   ├── user.resolver.ts
│   │   │   ├── user.service.ts
│   │   │   ├── dto
│   │   │   │   ├── createSocialUser.input.ts
│   │   │   │   ├── createUser.input.ts
│   │   │   │   └── updateUser.input.ts
│   │   │   └── entities
│   │   │       └── user.entity.ts
│   ├── commons
│   │   ├── auth
│   │   │   ├── gql-auth.guard.ts
│   │   │   ├── jwt-access.strategy.ts
│   │   │   ├── jwt-refresh.strategy.ts
│   │   │   ├── jwt-social-google.strategy.ts
│   │   │   ├── jwt-social-kakao.strategy.ts
│   │   │   └── jwt-social-naver.strategy.ts
│   │   ├── graphql
│   │   │   └── schema.gql
│   │   └── type
│   │       └── context.ts 
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── main.ts
│   └── static
│       └── index.html
├── .dockerignore
├── .eslintrc.js
├── .gitignore
├── .prettierrc
├── docker-compose.dev.yaml
├── docker-compose.prod.yaml
├── docker-compose.yaml
├── Dockerfile
├── Dockerfile.dev
├── Dockerfile.prod
├── nest-cli.json
├── package.json
├── README.md
├── tsconfig.build.json
├── tsconfig.json
└── yarn.lock
```

<br><br>

# 💻 프로젝트 설치 및 실행

1. Repository를 Fork 한다.
2. git clone 한다.
3. yarn install 한다.
4. docker-compose -f docker-compose.dev.yaml up --build 한다.

<br><br>

# 🔒 env

```
DATABASE_TYPE
DATABASE_HOST
DATABASE_PORT
DATABASE_USERNAME
DATABASE_PASSWORD
DATABASE_DATABASE

STORAGE_PROJECT_ID
STORAGE_KEY_FILE_NAME
STORAGE_BUCKET

ACCESSTOKEN_KEY
REFRESHTOKEN_KEY

GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET
GOOGLE_CALLBACK_URL

NAVER_CLIENT_ID
NAVER_CLIENT_SECRET
NAVER_CALLBACK_URL

KAKAO_CLIENT_ID
KAKAO_CLIENT_SECRET
KAKAO_CALLBACK_URL

EMAIL_USER
EMAIL_PASS
EMAIL_SENDER

SMS_KEY
SMS_SECRET
SMS_SENDER
```
