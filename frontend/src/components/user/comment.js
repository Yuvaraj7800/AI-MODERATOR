import React from 'react'

const CommentPlugin = () => {
  return (
    <>
      <title>Comment System</title>
      {/* Bootstrap CSS */}
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    .comment {\n      margin-bottom: 20px;\n    }\n    .comment .comment-body {\n      background-color: #f7f7f7;\n      padding: 10px;\n      border-radius: 5px;\n    }\n    .comment .comment-info {\n      margin-bottom: 5px;\n    }\n    .comment .comment-info .comment-author {\n      font-weight: bold;\n    }\n    .comment .comment-info .comment-date {\n      color: #777;\n      font-size: 12px;\n    }\n    .comment .comment-text {\n      margin-top: 10px;\n    }\n  "
        }}
      />
      <div className="container mt-5">
        <h1>Comment System</h1>
        {/* Comment 1 */}
        <div className="comment">
          <div className="comment-body">
            <div className="comment-info">
              <span className="comment-author">John Doe</span>
              <span className="comment-date">May 1, 2023</span>
            </div>
            <div className="comment-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra
              dolor a ex pharetra gravida.
            </div>
          </div>
        </div>
        {/* Comment 2 */}
        <div className="comment">
          <div className="comment-body">
            <div className="comment-info">
              <span className="comment-author">Jane Smith</span>
              <span className="comment-date">May 2, 2023</span>
            </div>
            <div className="comment-text">
              Nullam auctor nisi justo, nec dignissim mauris pellentesque at.
            </div>
          </div>
        </div>
        {/* Comment 3 */}
        <div className="comment">
          <div className="comment-body">
            <div className="comment-info">
              <span className="comment-author">Mike Johnson</span>
              <span className="comment-date">May 3, 2023</span>
            </div>
            <div className="comment-text">
              Fusce euismod, enim et volutpat lobortis, nibh nisi tristique tellus,
              et volutpat mauris mauris id tellus.
            </div>
          </div>
        </div>
        {/* Add Comment Form */}
        <div className="comment">
          <h4>Add a Comment</h4>
          <form>
            <div className="form-group">
              <label htmlFor="nameInput">Name</label>
              <input type="text" className="form-control" id="nameInput" />
            </div>
            <div className="form-group">
              <label htmlFor="commentInput">Comment</label>
              <textarea
                className="form-control"
                id="commentInput"
                rows={3}
                defaultValue={""}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
      {/* Bootstrap JS */}
    </>

  )
}

export default CommentPlugin;