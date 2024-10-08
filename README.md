# safemall
쇼핑몰 신뢰도 검색기

## 🎣프로젝트 소개
SafeMall은 쇼핑 중 사기 사이트를 미리 식별하고 경고함으로써 온라인 쇼핑몰 사기 피해를 줄이는 데 도움을 주는 프로젝트입니다.

## IA (Information Architecture)
<img src="https://github.com/norebese/safemall/blob/master/sample/readmeimg/IA.jpeg" height="300">

## 주요 기능 및 특징
### 메인화면 & 상세조회 화면
<img src="https://github.com/norebese/safemall/blob/master/sample/readmeimg/main.jpeg" height="300">

### 피해 다발 사이트 검색 화면
<img src="https://github.com/norebese/safemall/blob/master/sample/readmeimg/search1.jpeg" height="300">

### 제보, 건의 게시판
<img src="https://github.com/norebese/safemall/blob/master/sample/readmeimg/report.jpeg" height="300">

## ⏱개발 기간
 * 2024년 4월 25일 ~ 2024년 5월 30일

## 👨‍👨‍👦‍👦팀원 구성
* 김보미
* 김동인(norebese)
* 전민우
* 황동현
* 조동수(팀장)


## 기술 스택
<img src="https://github.com/norebese/safemall/blob/master/sample/readmeimg/tools.jpeg" height="300">

`Communication`
<img src="https://img.shields.io/badge/notion-000000?style=flat-square&logo=notion&logoColor=white">
<img src="https://img.shields.io/badge/github-181717?style=flat-square&logo=github&logoColor=white">

## 백엔드 실행하기

1. 터미널에서 아래 명령어를 입력해 `Server` 폴더 위치로 이동합니다.

    ```bash
    cd safemall\Server
    ```

2. 터미널에서 아래 명령어를 입력해 가상환경을 설치합니다. 이미 설치되어있으면 다음 단계로 넘어갑니다.

    ```bash
    python -m venv venv
    ```

3. 터미널에서 아래 명령어를 입력해 가상환경을 실행합니다.

    - **Windows**

        ```bash
        .\venv\Scripts\activate
        ```

    - **MacOS/Linux**

        ```bash
        source venv/bin/activate
        ```

4. 의존성 설치:

   프로젝트 디렉토리 안에서 `package.json` 파일에 명시된 의존성 모듈을 설치하려면 다음 명령어를 실행하세요:

    ```bash
    npm install
    ```

5. 서버 시작하기:

    ```bash
    npm start
    ```

## 프론트엔드 실행하기

1. 터미널에서 아래 명령어를 입력해 `client` 폴더 위치로 이동합니다.

    ```bash
    cd safemall\client
    ```
2. 아래 명령어를 입력하서 npm을 설치합니다. 이미 설치되어있으면 다음 단계로 넘어갑니다.

   ```bash
    npm install
    ```
3. 터미널에서 아래 명령어를 입력해 프론트 서버를 실행합니다.

   ```bash
    npm start
    ```
