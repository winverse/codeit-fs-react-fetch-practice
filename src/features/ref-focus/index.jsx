import Exercise from './Exercise';

export default function RefFocusPractice() {
  return (
    <section>
      <header className="practice-heading">
        <p className="step">실습 05</p>
        <h3>useRef로 입력창 포커스하기</h3>
        <p>폼이 열리면 제목 입력창으로 포커스를 이동합니다.</p>
      </header>
      <p className="work-files">
        <strong>작업 파일</strong>
        <code>src/features/ref-focus/Exercise.jsx</code>
      </p>
      <ol className="task-list">
        <li>제목 입력창에 ref를 연결합니다.</li>
        <li>폼이 열린 뒤 입력창의 DOM 요소를 확인합니다.</li>
        <li>
          <code>focus()</code>로 입력창에 포커스를 이동합니다.
        </li>
      </ol>
      <p className="answer-path">
        <strong>정답 파일</strong>
        <code>src/features/ref-focus/answers/Exercise.jsx</code>
      </p>
      <Exercise />
    </section>
  );
}
