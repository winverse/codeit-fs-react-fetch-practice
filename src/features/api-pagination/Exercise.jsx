import { useEffect, useState } from 'react';
import { fetchPosts } from '../../api/posts';

const LIMIT = 5;

export default function Exercise() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const loadPosts = async () => {
      // TODO: 현재 page에 해당하는 게시물과 전체 개수를 저장하세요.
    };

    loadPosts();
  }, [page]);

  const totalPages = Math.ceil(totalCount / LIMIT);

  return (
    <section className="exercise-card">
      <p className="exercise-label">페이지네이션 연결하기</p>
      <h2>게시물 목록</h2>
      <p className="page-indicator">
        {page} / {totalPages || 1} 페이지
      </p>
      <ul className="post-list" data-testid="pagination-post-list">
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
          </li>
        ))}
      </ul>
      <div className="button-row">
        <button
          type="button"
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          이전
        </button>
        <button
          type="button"
          disabled={page === totalPages}
          onClick={() => setPage((prev) => prev + 1)}
        >
          다음
        </button>
      </div>
    </section>
  );
}
