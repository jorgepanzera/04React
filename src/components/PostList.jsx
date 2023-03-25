import Post from "./Post";

const posts = [
  {
    img: "Avengers.jpg",
    postDate: [2023,3,10, 11, 52],
    user: "eric",
    likes: 43,
    message: "Los miembros supervivientes de Los Vengadores y sus aliados intentan revertir el daño causado por Thanos en Infinity War.",
    comments: 15
  },
  {
    img: "Matrix.jpg",
    postDate: [2023,3,15, 2, 16],
    user: "pamela",
    likes: 35,
    message: "Matrix es una tetralogía de películas de ciencia ficción escritas y dirigidas por las hermanas Wachowski. Se compone de The Matrix (1999), The Matrix Reloaded (2003), The Matrix Revolutions (2003) y The Matrix Resurrections (2021)",
    comments: 9
  },
  {
    img: "Spiderman.jpg",
    postDate: [2023,3,25, 14, 20],
    user: "david",
    likes: 18,
    message: "Posteriormente a los eventos de Avengers: Endgame,2​3​ y tras 8 meses de la muerte de su mentor Tony Stark, Peter Parker decide pasar unas merecidas vacaciones en Europa junto a sus amigos Ned Leeds y Michelle; pero sus planes al final se ven truncados cuando Nick Fury le encomienda una nueva misión",
    comments: 12
  }
];

function PostList() {
  return (
    <div className="row gx-5 gy-3 mx-auto">
      {posts.map((post, i) => (
        <Post
          key={i}
          img={post.img}
          postDate={post.postDate}
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
