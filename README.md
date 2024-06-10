# 모동숲 백과사전

![empty-item](https://github.com/springhana/animal_crossing/assets/97121074/0af1e4a0-bf22-47b8-8910-3b34bc415eb4)

# 모동숲 백과사전

Nookipedia에서 제공해준 모여봐요 동물의숲 오픈 API를 사용하여 만든 모동숲 백과사전 사이트입니다.

> <a href="https://api.nookipedia.com/doc">Nookipedia 오픈 API</a>

## 배포 기간

기간: 2024-06-03 ~ 2024-06-09

## 배포 주소

vercel: [모동숲 백과사전](https://animal-crossing-delta.vercel.app/)

## 프로젝트 소개

평소에 좋아하던 게임의 오픈 API를 가지고 만든 백과사전입니다. 게임에서 등장하는 주민과 아이템들을 카드 형태로 보여주며 카드를 선택하여 더 자세히 정보를 알 수 있습니다.

---

# 시작 가이드

## 요구 사항

- Node: 20
- npm : 9.8.1

## 설치

```bash
$ git clone https://github.com/springhana/animal_crossing.git
$ cd animal_crossing
$ npm install
$ npm dev
```

## 기술 스택

<div>
  <p><strong>FrontEnd</strong></p>
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>&nbsp 
  <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>&nbsp 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"/>&nbsp 
  <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>&nbsp 
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"/>&nbsp 
  <img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=next.js&logoColor=white"/>&nbsp 
  <img src="https://img.shields.io/badge/zustand-764ABC?style=for-the-badge&logo=zustand&logoColor=white"/>&nbsp 
  <img src="https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=redux&logoColor=white"/>&nbsp 
</div>

---

## 화면

|<a href="">홈</a>|<a href="">프로젝트</a>|
|:---:|:---:|
|<a href="https://animal-crossing-delta.vercel.app/"><img src="https://github.com/springhana/animal_crossing/assets/97121074/cabc95d9-ec7a-4b0e-a184-10b55ca0f2a1" /></a>|<a href="https://animal-crossing-delta.vercel.app/villagers/cBJxF2eoM4Cymei82"><img src="https://github.com/springhana/animal_crossing/assets/97121074/08f49bba-32cf-47c2-83f4-43b7374f5d29" /></a>|
|<a href="https://animal-crossing-delta.vercel.app/">홈같은 리스트 페이지</a>|<a href="https://animal-crossing-delta.vercel.app/villagers/cBJxF2eoM4Cymei82">디테일 페이지</a>|

## 주요 기능

⭐ SVG 이미지 사용

- 벡터 기반으로 화질을 잃지 않고 확대할 수 있으며 기존 이미지 형식에 비해 **작은 파일 크기**를 제공합니다.
- 아이콘은 웹 사이트의 **로드 속도를 향상** 시킵니다.

⭐ 이미지 최적화

- **이미지 포맷 Avif**를 사용하여 기존의 png, jpg 보다 적은 용량으로 **네트워크 성능을 최적화**했습니다.

⭐ 메모이제이션

- `useMemo`의  사용으로 메모이제이션 사용으로 **불필요한 연산을 줄여 성능을 개선**했습니다.
