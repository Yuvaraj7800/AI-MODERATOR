import React from 'react'
import './contact.css';

const ContactUs = () => {
  return (

    <p style={{ backgroundImage: 'url("contact.jpeg")' }}>

    <div>
      
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins&family=Roboto+Slab&display=swap"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="contact.css" />
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
    crossOrigin="anonymous"
  />
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
    crossOrigin="anonymous"
  />

  
  <div className="container">
   <div className='head2'>
    <h1>Contact Us</h1>
   </div>
    <div className="content">
      <div className="content-form">
        <section>
          <i className="fa fa-map-marker fa-2x" aria-hidden="true" />
          <h2>address</h2>
          <p>
            Babu Banarasi Das University <br />
            Lucknow <br />
            Uttar Pradesh
          </p>
        </section>
        <section>
          <i className="fa fa-phone fa-2x" aria-hidden="true" />
          <h2>Phone</h2>
          <p>8840290552</p>
        </section>
        <section>
          <i className="fa fa-envelope fa-2x" aria-hidden="true" />
          <h2>E-mail</h2>
          <p>aimoderator8800@gmail.com</p>
        </section>
      </div>
    </div>
    <form>
      <div className="form">
        <div className="right">
          <div className="contact-form">
            <input type="text" required="" />
            <span>Full Name</span>
          </div>
          <div className="contact-form">
            <input type="E-mail" required="" />
            <span>E-mail Id</span>
          </div>
          <div className="contact-form">
            <textarea
              name="text"
              defaultValue={"                    \n                  "}
            />
            <span> Type your Message....</span>
          </div>
          <div className="contact-form">
            <input type="submit" name="submit" />
          </div>
        </div>
      </div>
    </form>
  </div>
  <div className="media">
    <li>
      <i className="fa fa-facebook-square fa-2x" aria-hidden="true" />
    </li>
    <li>
      <i className="fa fa-instagram fa-2x" aria-hidden="true" />
    </li>
    <li>
      <i className="fa fa-whatsapp fa-2x" aria-hidden="true" />
    </li>
    <li>
      <i className="fa fa-twitter-square fa-2x" aria-hidden="true" />
    </li>
  </div>
  <div className="empty"></div>


    </div>
    </p>
  )
}

export default ContactUs;
