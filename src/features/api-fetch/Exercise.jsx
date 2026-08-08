import { useEffect, useState } from 'react';
import { fetchPosts } from '../../api/posts';

export default function Exercise() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // TODO: fetchPosts()로 게시물을 불러오고 로딩·성공·실패 상태를 갱신하세요.
  }, []);

  if (isLoading) {
    return <p role="status">게시물을 불러오는 중...</p>;
  }

  if (error) {
    return <p role="alert">{error}</p>;
  }

  return (
    <section className="exercise-card">
      <p className="exercise-label">API 데이터 불러오기</p>
      <h2>게시물 목록</h2>
      <ul className="post-list" data-testid="api-post-list">
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
