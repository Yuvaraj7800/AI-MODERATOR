import { useFormik } from 'formik';
import React from 'react'
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { NavLink, useNavigate } from 'react-router-dom';
const Signup = () => {
    const navigate = useNavigate();
    const SignupSchema = Yup.object().shape({
        name: Yup.string() 
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().required('Please Enter your password')
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),

    });

    const signupForm = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            createdAt: ''
        },
        onSubmit: async (values, { setSubmitting }) => {
            console.log(values);

            const res = await fetch('http://localhost:5000/user/add', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log(res.status);

            if (res.status === 200) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500,
                })
                
                navigate('/main/Login');
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                })
            }
        },
        // validationSchema: SignupSchema,

    });





    return (
        <section className="h-100 form mb-1 " style={{ backgroundColor: "#a3e7f7" }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card" style={{ borderRadius: "1rem" }}>
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img
                                        src="/Altloginimg.jpg"
                                        alt="login form"
                                        className="img-fluid"
                                        style={{ borderRadius: "1rem 0 0 1rem" }}
                                    />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black">
                                        <form onSubmit={signupForm.handleSubmit}>
                                            <div className="d-flex align-items-center mb-2 pb-1">
                                                <img src="/AI.gif" alt="error"
                                                    style={{ height: "100px" 
                                                    
                                                    ,marginLeft: "50%"
                                                  }}
                                                    
                                                />
                                            </div>
                                            <h5
                                                className="mb-3 pb-3"
                                                style={{ letterSpacing: 1, textAlign: "center", fontSize: "30px" }}
                                            >
                                                Sign upto your account
                                            </h5>
                                            <div className=" mb-3">
                                                <input
                                                    type="text"
                                                    id="name"
                                                    className="form-control form-control-lg"
                                                    placeholder='Full Name'
                                                    value={signupForm.values.name}
                                                    onChange={signupForm.handleChange}
                                                />
                                                <span className='text-danger'>{signupForm.errors.name}</span>
                                            </div>

                                            <div className=" mb-3">
                                                <input
                                                    type="email"
                                                    id="email"
                                                    autoComplete='off'
                                                    className="form-control form-control-lg"
                                                    placeholder='Email'
                                                    value={signupForm.values.email}
                                                    onChange={signupForm.handleChange}
                                                />
                                                <span className='text-danger' >{signupForm.errors.email}</span>
                                            </div>
                                            <div className="mb-3">
                                                <input
                                                    type="password"
                                                    id="password"
                                                    autoComplete='off'
                                                    className="form-control form-control-lg"
                                                    placeholder='Password'
                                                    value={signupForm.values.password}
                                                    onChange={signupForm.handleChange}
                                                />
                                                <span className='text-danger'>{signupForm.errors.password}</span>
                                            </div>
                                            
                                            <div className="pt-1 mb-2">
                                                <button
                                                    className="btn btn-dark btn-sm btn-block"
                                                    type="submit"
                                                    style={{ fontSize: "20px" }}
                                                >
                                                    Signup
                                                </button>
                                            </div>
                                           
                                            
                                            
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signup