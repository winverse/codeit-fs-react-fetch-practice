import Exercise from './Exercise';

export default function ApiCrudPractice() {
  return (
    <section>
      <header className="practice-heading">
        <p className="step">실습 04</p>
        <h3>CRUD 동작 연결하기</h3>
        <p>게시물 생성·수정·삭제 요청의 결과를 목록 state에 반영합니다.</p>
      </header>
      <p className="work-files">
        <strong>작업 파일</strong>
        <code>src/features/api-crud/Exercise.jsx</code>
      </p>
      <ol className="task-list">
        <li>생성된 게시물을 목록에 추가합니다.</li>
        <li>수정된 게시물로 목록의 첫 항목을 교체합니다.</li>
        <li>삭제된 게시물을 목록에서도 제거합니다.</li>
      </ol>
      <p className="answer-path">
        <strong>정답 파일</strong>
        <code>src/features/api-crud/answers/Exercise.jsx</code>
      </p>
      <Exercise />
    </section>
  );
}
