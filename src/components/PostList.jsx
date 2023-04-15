import Post from "./Post";

function PostList({posts}) {
  return (
    <div className="row gx-5 gy-3 mx-auto mt-2 mb-3">
      {posts.map((post, i) => (
        <Post
          key={post.id}
          img={post.image}
          createdAt={post.createdAt}
          author={post.author.username}
          likes={post.likes}
          text={post.text}
          comments={post.comments.length}
        />
      ))}
    </div>
  );
}

export default PostList;
