import { useEffect, useState } from 'react';
import { fetchPosts } from '../../../api/posts';

export default function Exercise() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const { data } = await fetchPosts(1, 5);
        setPosts(data);
      } catch {
        setError('게시물을 불러오는 데 실패했습니다.');
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (isLoading) {
    return <p role="status">게시물을 불러오는 중...</p>;
  }

  if (error) {
    return <p role="alert">{error}</p>;
  }

  return (
    <section className="exercise-card">
      <p className="exercise-label">로딩·에러 상태 처리하기</p>
      <h2>게시물 목록</h2>
      <ul className="post-list" data-testid="status-post-list">
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
          </li>
        ))}
      </ul>
    </section>
  );
}
