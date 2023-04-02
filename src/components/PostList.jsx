import Post from "./Post";

function PostList({posts}) {
  return (
    <div className="row gx-5 gy-3 mx-auto mt-2 mb-3">
      {posts.map((post, i) => (
        <Post
          key={i}
          img={post.img}
          age={post.age}
          user={post.user}
          likes={post.likes}
          message={post.message}
          comments={post.comments}
        />
      ))}
    </div>
  );
}

export default PostList;
