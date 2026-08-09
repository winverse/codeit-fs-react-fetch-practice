import Exercise from './Exercise';

export default function ApiStatusPractice() {
  return (
    <section>
      <header className="practice-heading">
        <p className="step">실습 02</p>
        <h3>로딩·에러 상태 처리하기</h3>
        <p>API 요청 상태에 따라 로딩, 성공, 에러 화면을 구분합니다.</p>
      </header>
      <p className="work-files">
        <strong>작업 파일</strong>
        <code>src/features/api-status/Exercise.jsx</code>
      </p>
      <ol className="task-list">
        <li>요청 성공 시 게시물 배열을 state에 저장합니다.</li>
        <li>요청 실패 시 에러 메시지를 state에 저장합니다.</li>
        <li>요청이 끝나면 로딩 상태를 종료합니다.</li>
      </ol>
      <Exercise />
    </section>
  );
}
