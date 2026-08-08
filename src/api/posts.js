const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts?_limit=5';

export async function fetchPosts() {
  const response = await fetch(POSTS_URL);

  if (!response.ok) {
    throw new Error('게시물을 불러오는 데 실패했습니다.');
  }

  return response.json();
}
