import Exercise from './Exercise';

export default function ApiFetchPractice() {
  return (
    <section>
      <header className="practice-heading">
        <p className="step">실습 01</p>
        <h3>fetch와 useEffect로 데이터 불러오기</h3>
        <p>컴포넌트가 처음 렌더링된 뒤 API에서 게시물을 불러옵니다.</p>
      </header>
      <p className="work-files">
        <strong>작업 파일</strong>
        <code>src/features/api-fetch/Exercise.jsx</code>
      </p>
      <ol className="task-list">
        <li>
          <code>useEffect</code> 안에서 비동기 함수를 만듭니다.
        </li>
        <li>
          <code>fetchPosts()</code>로 첫 페이지의 게시물 5개를 불러옵니다.
        </li>
        <li>응답의 게시물 배열을 state에 저장합니다.</li>
      </ol>
      <Exercise />
    </section>
  );
}
