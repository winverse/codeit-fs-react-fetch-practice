import Exercise from './Exercise';

export default function ApiPaginationPractice() {
  return (
    <section>
      <header className="practice-heading">
        <p className="step">실습 03</p>
        <h3>페이지네이션 연결하기</h3>
        <p>현재 페이지가 바뀔 때 해당 페이지의 게시물을 다시 불러옵니다.</p>
      </header>
      <p className="work-files">
        <strong>작업 파일</strong>
        <code>src/features/api-pagination/Exercise.jsx</code>
      </p>
      <ol className="task-list">
        <li>현재 페이지를 인자로 게시물 데이터를 요청합니다.</li>
        <li>게시물 배열과 전체 게시물 개수를 각각 state에 저장합니다.</li>
        <li>페이지가 바뀔 때마다 요청을 다시 실행합니다.</li>
      </ol>
      <p className="answer-path">
        <strong>정답 파일</strong>
        <code>src/features/api-pagination/answers/Exercise.jsx</code>
      </p>
      <Exercise />
    </section>
  );
}
