import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import PhoneCard from './PhoneCard';

const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Can’t be empty"),
    name: Yup.string().required("Can’t be empty"),
    surname: Yup.string().required("Can’t be empty")
});

const Details = () => {
    const [phoneData, setPhoneData] = useState({ name: "", surname: "", email: "" });
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0]; 
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result); 
            };
            reader.readAsDataURL(file); 
        }
    };


    return (
        <div className='customize-details-wrappers'>
            <div className="customize-container">
                <div className="customize">
                    <Formik
                        initialValues={{ email: "", name: "", surname: "" }}
                        validationSchema={validationSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            console.log("Form submitted:", values); 
                            setPhoneData(values); 
                            setTimeout(() => {
                                setSubmitting(false);
                            }, 500);
                        }}
                    >
                        {({ errors, touched, isSubmitting }) => (
                            <Form className="customize">
                                <div className="customize-head">
                                    <h2>Profile Details</h2>
                                    <p>Add your details to create a personal touch to your profile.</p>
                                </div>

                                <div className="profile-img">
                                    <p>Profile picture</p>
                                    <div className="image-upload">
                                        <div className="image" onClick={() => document.getElementById('file-input').click()}>
                                            {image ? (
                                                <img src={image} alt="err"/> 
                                            ) : (
                                                <>
                                                    <i className="fa-solid fa-image"></i> 
                                                    <p>+ Şəkil Yüklə</p> 
                                                </>
                                            )}
                                        </div>
                                        <input
                                            type="file"
                                            id="file-input" 
                                            accept="image/*" 
                                            style={{ display: 'none' }} 
                                            onChange={handleImageChange} required
                                        />
                                    </div>
                                    <span>Image must be below 1024x1024px. Use PNG or JPG format.</span>
                                </div>

                                <div className='form'>
                                    <div className="inputs">
                                        <label htmlFor="name">
                                            <span className={errors.name && touched.name ? "labelName-err" : "labelName"}>First name*</span>
                                            <div className={errors.name && touched.name ? "inputDiv-err" : "inputDiv"}>
                                                <Field
                                                    id="name"
                                                    name="name"
                                                    placeholder="Ben"
                                                    type="text"
                                                    className={errors.name && touched.name ? "input-error" : ""}
                                                />
                                                <ErrorMessage name="name" component="div" className="error" />
                                            </div>
                                        </label>

                                        <label htmlFor="surname">
                                            <span className={errors.surname && touched.surname ? "labelName-err" : "labelName"}>Last name*</span>
                                            <div className={errors.surname && touched.surname ? "inputDiv-err" : "inputDiv"}>
                                                <Field
                                                    id="surname"
                                                    name="surname"
                                                    placeholder="Wright"
                                                    type="text"
                                                    className={errors.surname && touched.surname ? "input-error" : ""}
                                                />
                                                <ErrorMessage name="surname" component="div" className="error" />
                                            </div>
                                        </label>

                                        <label htmlFor="email">
                                            <span className={errors.email && touched.email ? "labelName-err" : "labelName"}>Email</span>
                                            <div className={errors.email && touched.email ? "inputDiv-err" : "inputDiv"}>
                                                <Field
                                                    id="email"
                                                    name="email"
                                                    placeholder="ben@example.com"
                                                    type="email"
                                                    className={errors.email && touched.email ? "input-error" : ""}
                                                />
                                                <ErrorMessage name="email" component="div" className="error" />
                                            </div>
                                        </label>
                                    </div>

                                        <button className='savee-btn' type='submit' >Save</button>
                                </div>
                            </Form>
                        )}
                    </Formik>



                    {/* {phoneData && (
                        <PhoneCard name={phoneData.name} surname={phoneData.surname} email={phoneData.email} />
                    )} */}

                </div>
            </div>
        </div>
    )
}

export default Details;
