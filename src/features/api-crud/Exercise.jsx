import { useState } from 'react';
import { createPost, deletePost, updatePost } from '../../api/posts';

const initialPosts = [
  { id: 1, title: '첫 번째 게시물', body: '수정과 삭제를 연습합니다.' },
  { id: 2, title: '두 번째 게시물', body: '목록 상태를 확인합니다.' },
];

export default function Exercise() {
  const [posts, setPosts] = useState(initialPosts);

  const handleCreate = async () => {
    // TODO: createPost()의 응답을 목록에 추가하세요.
  };

  const handleUpdate = async () => {
    // TODO: 첫 번째 게시물을 수정하고 응답 데이터로 목록을 갱신하세요.
  };

  const handleDelete = async () => {
    // TODO: 첫 번째 게시물을 삭제한 뒤 목록에서도 제거하세요.
  };

  return (
    <section className="exercise-card">
      <p className="exercise-label">CRUD 동작 연결하기</p>
      <h2>게시물 관리</h2>
      <div className="button-row">
        <button type="button" onClick={handleCreate}>
          추가
        </button>
        <button type="button" disabled={!posts.length} onClick={handleUpdate}>
          첫 게시물 수정
        </button>
        <button type="button" disabled={!posts.length} onClick={handleDelete}>
          첫 게시물 삭제
        </button>
      </div>
      <ul className="post-list" data-testid="crud-post-list">
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
