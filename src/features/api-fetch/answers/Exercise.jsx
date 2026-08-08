import { useEffect, useState } from 'react';
import { fetchPosts } from '../../../api/posts';

export default function Exercise() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      const { data } = await fetchPosts(1, 5);
      setPosts(data);
    };

    loadPosts();
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
