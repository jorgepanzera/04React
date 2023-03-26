import Post from "./Post";

const posts = [
  {
    img: "Avengers.png",
    age: "3min",
    user: "eric",
    likes: 43,
    message: "Los miembros supervivientes de Los Vengadores y sus aliados intentan revertir el daño causado por Thanos en Infinity War.",
    comments: 15
  },
  {
    img: "Spiderman.png",
    age: "16hour",
    user: "david",
    likes: 18,
    message: "Tras 8 meses de la muerte de su mentor Tony Stark, Peter Parker decide pasar unas merecidas vacaciones en Europa junto a sus amigos Ned Leeds y Michelle; pero sus planes al final se ven truncados cuando Nick Fury le encomienda una nueva misión",
    comments: 12
  },
  {
    img: "Matrix.png",
    age: "2day",
    user: "pamela",
    likes: 35,
    message: "Matrix es una tetralogía de películas de ciencia ficción escritas y dirigidas por las hermanas Wachowski. Se compone de The Matrix (1999), The Matrix Reloaded (2003), The Matrix Revolutions (2003) y The Matrix Resurrections (2021)",
    comments: 9
  }
];

function PostList() {
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
