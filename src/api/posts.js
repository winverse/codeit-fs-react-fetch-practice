const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export async function fetchPosts(page = 1, limit = 5) {
  const response = await fetch(
    `${API_BASE_URL}/posts?_page=${page}&_limit=${limit}`,
  );

  if (!response.ok) {
    throw new Error('게시물을 불러오는 데 실패했습니다.');
  }

  const data = await response.json();
  const totalCount = Number(response.headers.get('X-Total-Count'));

  return { data, totalCount };
}

export async function createPost(postData) {
  const response = await fetch(`${API_BASE_URL}/posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData),
  });

  if (!response.ok) {
    throw new Error('게시물 추가에 실패했습니다.');
  }

  return response.json();
}

export async function updatePost(id, postData) {
  const response = await fetch(`${API_BASE_URL}/posts/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData),
  });

  if (!response.ok) {
    throw new Error('게시물 업데이트에 실패했습니다.');
  }

  return response.json();
}

export async function deletePost(id) {
  const response = await fetch(`${API_BASE_URL}/posts/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('게시물 삭제에 실패했습니다.');
  }
}
