import React from 'react'

const ReviewPlugin = () => {
  return (
    <>
  <title>Review System</title>
  {/* Bootstrap CSS */}
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n    .review {\n      margin-bottom: 20px;\n    }\n    .review .review-body {\n      background-color: #f7f7f7;\n      padding: 10px;\n      border-radius: 5px;\n    }\n    .review .review-info {\n      margin-bottom: 5px;\n    }\n    .review .review-info .review-author {\n      font-weight: bold;\n    }\n    .review .review-info .review-rating {\n      color: #f8bb06;\n      font-weight: bold;\n      font-size: 18px;\n    }\n    .review .review-text {\n      margin-top: 10px;\n    }\n  "
    }}
  />
  <div className="container mt-5">
    <h1>Review System</h1>
    {/* Review 1 */}
    <div className="review">
      <div className="review-body">
        <div className="review-info">
          <span className="review-author">John Doe</span>
          <span className="review-rating">★★★★★</span>
        </div>
        <div className="review-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra
          dolor a ex pharetra gravida.
        </div>
      </div>
    </div>
    {/* Review 2 */}
    <div className="review">
      <div className="review-body">
        <div className="review-info">
          <span className="review-author">Jane Smith</span>
          <span className="review-rating">★★★☆☆</span>
        </div>
        <div className="review-text">
          Nullam auctor nisi justo, nec dignissim mauris pellentesque at.
        </div>
      </div>
    </div>
    {/* Review 3 */}
    <div className="review">
      <div className="review-body">
        <div className="review-info">
          <span className="review-author">Mike Johnson</span>
          <span className="review-rating">★★★☆☆</span>
        </div>
        <div className="review-text">
          Fusce euismod, enim et volutpat lobortis, nibh nisi tristique tellus,
          et volutpat mauris mauris id tellus.
        </div>
      </div>
    </div>
    {/* Add Review Form */}
    <div className="review">
      <h4>Add a Review</h4>
      <form>
        <div className="form-group">
          <label htmlFor="nameInput">Name</label>
          <input type="text" className="form-control" id="nameInput" />
        </div>
        <div className="form-group">
          <label htmlFor="ratingInput">Rating</label>
          <select className="form-control" id="ratingInput">
            <option value={5}>★★★★★</option>
            <option value={4}>★★★★☆</option>
            <option value={3}>★★★☆☆</option>
            <option value={2}>★★☆☆☆</option>
            <option value={1}>★☆☆☆☆</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="reviewInput">Review</label>
          <textarea
            className="form-control"
            id="review Input"
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

export default ReviewPlugin;