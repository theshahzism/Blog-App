
const Post = () => {
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
          Tumblr tests ‘Communities,’ semi-private groups with their own
          moderators and feeds
        </h2>
        <p className="info">
          <a href="" className="author">
            Shahzain
          </a>
          <time>2024</time>
        </p>
        <p className="summery">Tumblr owner Automattic’s CEO Matt Mullenweg</p>
      </div>
    </div>
  );
};

export default Post;
