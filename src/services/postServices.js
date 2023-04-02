import data from "../data/posts.json"

// 3 segundos de demora
export function getPosts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.posts);
    }, 3000);
  });
}