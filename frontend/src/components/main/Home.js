 import React from 'react';
import './home.css';






const Home = () => {
  return (

    
    <div >
      
      <div className='head'> 
      
      
                <h1>AI-MODERATOR </h1></div>
                <div className='head1'>
                <img
                  src="/ai.png"
                  height={90}
                  
                  loading="lazy"
                />
                </div>

        <p className='para'> In today’s world, Artificial Intelligence (AI) is the next tech revolution. It is a defining technology of the 21st century that will transform the way businesses work and users interact with the data. Artificial Intelligence primarily aims at building smart machines and programs that are capable of performing complex tasks, which require human intelligence.
	AI-powered technologies have made their mark on a lot of user-oriented services. Google leverages machine learning to predict the search intent of the users and offer them results with great accuracy. Amazon uses the same technology for product recommendations and logistics. Even self-driving cars apply various AI techniques to avoid collisions and traffic congestions. The importance of Artificial Intelligence can’t be argued — the technology has already changed and disrupted many industries and aspects of our daily lives.
  </p> 



  <footer
  className="text-center text-white"
  style={{ backgroundColor: "#caced1" }}
>
  {/* Grid container */}
  <div className="container p-4">
    {/* Section: Images */}
    <section className="">
      <div className="row">
        <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
          <div
            className="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
              className="w-100"
            />
            <a href="#!">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
              />
            </a>
          </div>
        </div>
        <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
          <div
            className="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/fluid/city/111.webp"
              className="w-100"
            />
            <a href="#!">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
              />
            </a>
          </div>
        </div>
        <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
          <div
            className="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/fluid/city/112.webp"
              className="w-100"
            />
            <a href="#!">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
              />
            </a>
          </div>
        </div>
        <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
          <div
            className="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/fluid/city/114.webp"
              className="w-100"
            />
            <a href="#!">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
              />
            </a>
          </div>
        </div>
        <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
          <div
            className="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/fluid/city/115.webp"
              className="w-100"
            />
            <a href="#!">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
              />
            </a>
          </div>
        </div>
        <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
          <div
            className="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/fluid/city/116.webp"
              className="w-100"
            />
            <a href="#!">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
    {/* Section: Images */}
  </div>
  {/* Grid container */}
  <footer className="bg-#caced1 text-center text-white">
  {/* Grid container */}
  <div className="container p-4 pb-0">
    {/* Section: Social media */}
    <section className="mb-4">
      {/* Facebook */}
      <a
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor: "#3b5998" }}
        href="#!"
        role="button"
      >
        <i className="fab fa-facebook-f" />
      </a>
      {/* Twitter */}
      <a
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor: "#55acee" }}
        href="#!"
        role="button"
      >
        <i className="fab fa-twitter" />
      </a>
      {/* Google */}
      <a
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor: "#dd4b39" }}
        href="#!"
        role="button"
      >
        <i className="fab fa-google" />
      </a>
      {/* Instagram */}
      <a
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor: "#ac2bac" }}
        href="#!"
        role="button"
      >
        <i className="fab fa-instagram" />
      </a>
      {/* Linkedin */}
      <a
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor: "#0082ca" }}
        href="#!"
        role="button"
      >
        <i className="fab fa-linkedin-in" />
      </a>
      {/* Github */}
      <a
        className="btn text-white btn-floating m-1"
        style={{ backgroundColor: "#333333" }}
        href="#!"
        role="button"
      >
        <i className="fab fa-github" />
      </a>
    </section>
    {/* Section: Social media */}
  </div>
  {/* Grid container */}
 
</footer>

</footer>



        

    </div>
    
  )
}

export default Home;