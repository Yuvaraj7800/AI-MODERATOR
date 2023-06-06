import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { toast } from "react-hot-toast";
import Rating from "react-rating";

const ReviewPlugin = ({ userid }) => {
  const [reviewsList, setReviewsList] = useState([]);

  const getToxicity = (text, cb) => {
    const threshold = 0.9;
    // Load the model. Users optionally pass in a threshold and an array of
    // labels to include.
    window.toxicity.load(threshold).then((model) => {
      const sentences = [text];

      model
        .classify(sentences)
        .then(async (result) => {
          // console.log(result);
          await cb(result);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  const saveAnalysis = async (values) => {
    const res = await fetch("http://localhost:5000/analysis/add", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(res.status);

    if (res.status === 200) {
      toast.success("Analysis Saved");
    }
  };

  const fetchReviews = async () => {
    const res = await fetch("http://localhost:5000/review/getall");
    const data = await res.json();
    console.log(data);
    setReviewsList(data);
  };

  const reviewForm = useFormik({
    initialValues: {
      name: "",
      rating: "",
      review: "",
      createdAt: new Date(),
    },
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      getToxicity(values.review, async (result) => {
        console.log(result);
        const isToxic = result.filter((obj) => obj.results[0].match);
        // console.log(isToxic);
        let status = "Not Toxic";
        if (isToxic.length > 0) {
          Swal.fire({
            title: "Oops",
            icon: "error",
            text: "Your comment is toxic",
          });
          status = "Toxic";
        } else {
          const res = await fetch("http://localhost:5000/review/add", {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
              "Content-Type": "application/json",
            },
          });

          console.log(res.status);

          if (res.status === 200) {
            Swal.fire({
              title: "Well Done",
              icon: "success",
              text: "Thank You for your comment",
            });
            fetchReviews();
          }
        }
        setSubmitting(false);
        await saveAnalysis({
          text: values.comment,
          toxicity: result,
          plugin: "Comment",
          user: userid,
          status,
          createdAt: new Date(),
        });
      });
    },
  });

  useEffect(() => {
    fetchReviews();
  }, []);

  const displayReviews = () => {
    return reviewsList.map((review) => (
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{review.name}</h5>
          <p className="card-text">{review.rating}</p>
          <p>{review.review}</p>
          <p>{new Date(review.createdAt).toLocaleDateString()}</p>
        </div>
      </div>
    ));
  };

  return (
    <>
      <section className=" # " style={{ backgroundColor: "#a3e7f7" }}>
        <title>Review System</title>
        {/* Bootstrap CSS */}
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    .review {\n      margin-bottom: 20px;\n    }\n    .review .review-body {\n      background-color: #f7f7f7;\n      padding: 10px;\n      border-radius: 5px;\n    }\n    .review .review-info {\n      margin-bottom: 5px;\n    }\n    .review .review-info .review-author {\n      font-weight: bold;\n    }\n    .review .review-info .review-rating {\n      color: #f8bb06;\n      font-weight: bold;\n      font-size: 18px;\n    }\n    .review .review-text {\n      margin-top: 10px;\n    }\n  ",
          }}
        />
        <div className="container mt-5">
          <h1>Review System</h1>

          {displayReviews()}

          {/* <div className="review">
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
    </div> */}

          {/* Add Review Form */}
          <div className="review">
            <h4>Add a Review</h4>
            <form onSubmit={reviewForm.handleSubmit}>
              <div className="form-group">
                <label htmlFor="nameInput">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={reviewForm.values.name}
                  onChange={reviewForm.handleChange}
                />
              </div>
              <div className="form-group">
                <Rating
                  emptySymbol="fa fa-star-o fa-2x"
                  fullSymbol="fa fa-star fa-2x"
                />
                <label htmlFor="ratingInput">Rating</label>
                <select
                  className="form-control"
                  id="rating"
                  onChange={reviewForm.handleChange}
                  value={reviewForm.values.rating}
                >
                  <option value="5">★★★★★</option>
                  <option value="4">★★★★☆</option>
                  <option value="3">★★★☆☆</option>
                  <option value="2">★★☆☆☆</option>
                  <option value="1">★☆☆☆☆</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="reviewInput">Review</label>
                <textarea
                  className="form-control"
                  id="review"
                  rows={3}
                  defaultValue={""}
                  value={reviewForm.values.review}
                  onChange={reviewForm.handleChange}
                />
              </div>
              {/* <div className="col-md-9 pe-5">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="name"
                      value={reviewForm.values.name}
                      onChange={reviewForm.handleChange}
                    />
                  </div> */}
              <br />
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
        {/* Bootstrap JS */}
      </section>
    </>
  );
};

export default ReviewPlugin;
