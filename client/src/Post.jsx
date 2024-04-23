import { format } from "date-fns";
import { Link } from "react-router-dom";

const Post = ({ _id, title, summery, cover, content, createdAt, author }) => {
  return (
    <div className="post">
      <div className="image">
      <Link to={`/post/${_id}`}>
          <img src={"http://localhost:4000/" + cover} alt="Blog image" />
        </Link>
      </div>
      <div className="texts">
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>
        <p className="info">
          <a className="author">{author.username}</a>
          <time>{format(new Date(createdAt), " MMM d, yyyy HH:mm ")}</time>
        </p>
        <p className="summery">{summery}</p>
      </div>
    </div>
  );
};

export default Post;
