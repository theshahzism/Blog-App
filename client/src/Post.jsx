import {format} from 'date-fns'

const Post = ({title,summery,cover,content,createdAt,author}) => {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://techcrunch.com/wp-content/uploads/2019/08/GettyImages-1158411075.jpg?w=1390&crop=1"
          alt="Blog image"
        />
      </div>
      <div className="texts">
        <h2>
          {title}
        </h2>
        <p className="info">
          <a  className="author">
            {author.username}
          </a>
          <time>{format(new Date(createdAt), " MMM d, yyyy HH:mm ")}</time>
        </p>
        <p className="summery">{summery}</p>
      </div>
    </div>
  );
};

export default Post;
