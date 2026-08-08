import { useEffect, useRef, useState } from 'react';

export default function Exercise() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const titleInputRef = useRef(null);

  useEffect(() => {
    if (isFormOpen) {
      titleInputRef.current.focus();
    }
  }, [isFormOpen]);

  return (
    <section className="exercise-card">
      <p className="exercise-label">useRef로 입력창 포커스하기</p>
      <h2>새 게시물</h2>
      <button type="button" onClick={() => setIsFormOpen((prev) => !prev)}>
        {isFormOpen ? '폼 닫기' : '폼 열기'}
      </button>
      {isFormOpen && (
        <form className="post-form">
          <label htmlFor="post-title">제목</label>
          <input id="post-title" ref={titleInputRef} />
        </form>
      )}
    </section>
  );
}
