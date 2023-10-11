const Comment = () => {
  return (
    <div className="blog-comment">
      <h2 className="blog-comment__title">Leave a Comment</h2>
      <form className="blog-comment__form">
        <div className="blog-comment__wrapper">
          <label className="blog-comment__label">
            <span className="blog-comment__text">Your name*</span>
            <input type="text" className="blog-comment__input" />
          </label>
          <label className="blog-comment__label">
            <span className="blog-comment__text">Your email*</span>
            <input type="email" className="blog-comment__input" />
          </label>
          <label className="blog-comment__label">
            <span className="blog-comment__text">Comment*</span>
            <textarea className="blog-comment__input textarea" rows={7} />
          </label>
        </div>
        <button className="btn blog-comment__btn" type="submit">
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default Comment;
