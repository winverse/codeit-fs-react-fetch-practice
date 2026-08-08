import { useEffect, useState } from 'react';
import { fetchPosts } from '../../api/posts';

export default function Exercise() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // TODO: fetchPosts()로 첫 페이지의 게시물 5개를 불러와 posts에 저장하세요.
  }, []);

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
