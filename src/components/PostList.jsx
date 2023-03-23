import Post from "./Post";

const posts = [
  {
    img: "https://via.placeholder.com/150",
    title: "Episode 1",
    description: "Episode 1 description",
  },
  {
    img: "https://via.placeholder.com/150",
    title: "Episode 2",
    description: "Episode 2 description",
  },
  {
    img: "https://via.placeholder.com/150",
    title: "Episode 3",
    description: "Episode 3 description",
  },
  {
    img: "https://via.placeholder.com/150",
    title: "Episode 4",
    description: "Episode 4 description",
  },
];

function PostList() {
  return (
    <div className="d-flex p-5">
      {posts.map((episode, i) => (
        <Post
          key={i}
          img={episode.img}
          title={episode.title}
          description={episode.description}
        />
      ))}
    </div>
  );
}

export default PostList;
