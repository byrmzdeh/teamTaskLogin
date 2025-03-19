import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import PhoneCard from './PhoneCard';

const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Can’t be empty"),
    name: Yup.string().required("Can’t be empty"),
    surname: Yup.string().required("Can’t be empty"),
    image: Yup.mixed().required("Can’t be empty")
});

const Details = () => {
    const [phoneData, setPhoneData] = useState({ name: "", surname: "", email: "", image: null });

    return (
        <div className='customize-details-wrappers'>
            <div className="customize-container">
                <div className="customize">
                    <Formik
                        initialValues={{ email: "", name: "", surname: "", image: null }}
                        validationSchema={validationSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            console.log("Form submitted:", values);
                            setPhoneData(values); // Form dəyərlərini saxlayırıq
                            setSubmitting(false);
                        }}
                    >
                        {({ errors, touched, isSubmitting, setFieldValue, values }) => (
                            <Form className="customize">
                                <div className="customize-head">
                                    <h2>Profile Details</h2>
                                    <p>Add your details to create a personal touch to your profile.</p>
                                </div>

                                <div className="profile-img">
                                    <p>Profile picture</p>
                                    <div className="image-upload">
                                        <div className="image" onClick={() => document.getElementById('file-input').click()}>
                                            {values.image ? (
                                                <img src={URL.createObjectURL(values.image)} alt="Profile" />
                                            ) : (
                                                <>
                                                    <i className="fa-solid fa-image"></i>
                                                    <p>+ Şəkil Yüklə</p>
                                                </>
                                            )}
                                        </div>
                                        <input
                                            id="file-input"
                                            type="file"
                                            name="image"
                                            accept="image/png, image/jpeg"
                                            style={{ display: "none" }}
                                            onChange={(event) => {
                                                const file = event.currentTarget.files[0];
                                                if (file) {
                                                    setFieldValue("image", file);
                                                }
                                            }}
                                        />
                                        <ErrorMessage name="image" component="div" className="error" />
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

                                    <button className='savee-btn' type='submit' disabled={isSubmitting}>Save</button>
                                </div>
                            </Form>
                        )}
                    </Formik>

                    {phoneData.name && phoneData.surname && phoneData.email && (
                        <PhoneCard name={phoneData.name} surname={phoneData.surname} email={phoneData.email} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Details;
