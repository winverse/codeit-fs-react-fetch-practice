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
        <li>폼이 열렸는지 확인합니다.</li>
        <li>
          <code>titleInputRef.current.focus()</code>를 호출합니다.
        </li>
      </ol>
      <Exercise />
    </section>
  );
}
