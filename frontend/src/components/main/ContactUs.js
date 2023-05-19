import React, { useState } from 'react'
import './contact.css';
import { MDBBtn, MDBInput, MDBTextArea } from 'mdb-react-ui-kit';
import { Formik } from 'formik'
import Swal from 'sweetalert2'



const ContactUs = () => {


  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
  console.log(currentUser);

  const ContactData = async (formdata, { resetForm }) => {
    formdata.user = currentUser._id;
    console.log(formdata)
    

    const res = await fetch('http://localhost:5000/contactUs/add', {
      method: 'POST',
      body: JSON.stringify(formdata),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    console.log(res.status)

    if (res.status === 200) {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Submitted'
      })
      resetForm()
    }

  }



  return (

    

    <div className='container my-5'>

      <div className="row">

        <div className="col-md-6">
          <img src="https://img.freepik.com/premium-vector/isometric-style-illustration-about-registration-app-login-website-online-game_529804-422.jpg" alt="" style={{ width: '100%' }} />
        </div>

        <div className="col-md-6">

          <div className="card">
            <div className="card-body">
              <h1 className="card-title text-center">Contact Us</h1>

              <Formik
                initialValues={{ name: "", email: "", message: "" }}
                onSubmit={ContactData}
              >
                {
                  ({ values, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>

                      <div className="mb-3">


                        <MDBInput className='my-3' label='Name' id='name' type='text' onChange={handleChange} value={values.name} />
                        <MDBInput className='my-3' label='Email' id='email' type='email' onChange={handleChange} value={values.email} />
                        <MDBTextArea label='Message'
                          className="form-control"
                          id="textAreaExample"
                          rows={5}
                          name='message'
                          onChange={handleChange}
                          value={values.message}
                        />
                      </div>

                      <button type="submit" className="btn btn-primary">
                        Submit   
                      </button>


                    </form>
                  )
                }
              </Formik>




            </div>
          </div>


        </div>



      </div>

    </div>




  )
}

export default ContactUs;
