# React API 데이터 연동 실습

18번 과정의 API 데이터 연동 문제 해결 실습입니다.

## 실행

Node.js 26을 사용합니다.

```bash
nvm use
npm install
npm run dev
```

화면 왼쪽에서 수업 진도에 맞는 실습을 선택하고, 해당 폴더의
`Exercise.jsx`를 수정합니다.

| 실습 ID          | 학습 내용                           | 정답 경로                                          |
| ---------------- | ----------------------------------- | -------------------------------------------------- |
| `api-fetch`      | `fetch`와 `useEffect`로 데이터 조회 | `src/features/api-fetch/answers/Exercise.jsx`      |
| `api-status`     | 로딩·성공·실패 상태 처리            | `src/features/api-status/answers/Exercise.jsx`     |
| `api-pagination` | 페이지별 데이터 조회                | `src/features/api-pagination/answers/Exercise.jsx` |
| `api-crud`       | 생성·수정·삭제와 목록 state 연결    | `src/features/api-crud/answers/Exercise.jsx`       |
| `ref-focus`      | `useRef`로 입력창 포커스            | `src/features/ref-focus/answers/Exercise.jsx`      |

각 실습은 독립적이므로 앞 실습의 정답 코드가 필요하지 않습니다.

정답 코드는 각 실습 폴더의 `answers/Exercise.jsx`에서 확인할 수 있습니다.
정답 파일은 앱에서 자동으로 불러오지 않습니다.
