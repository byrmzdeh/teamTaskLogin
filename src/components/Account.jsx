import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Can’t be empty"),
    password: Yup.string().min(8, "Please check again").required("Can’t be empty"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .min(8, "Please check again")
        .required("Can’t be empty"),
});

const Account = () => {
    const navigate = useNavigate();
    return (
        <div className="sigIn">
            <div className="devlinks">
                <img src="/src/assets/image/dev.png" alt="err" />
                <p>devlinks</p>
            </div>
            <Formik
                initialValues={{ email: "", password: "", confirmPassword: "" }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(values);
                    setTimeout(() => {
                        setSubmitting(false);
                        navigate("/");
                    }, 500);
                }}
            >
                {({ errors, touched, isSubmitting, isValid, dirty }) => (
                    <Form>
                        <div className="text">
                            <h1>Create account</h1>
                            <p>Let’s get you started sharing your links!</p>
                        </div>

                        <label htmlFor="email">
                            <span className={errors.email && touched.email ? "labelName-err" : "labelName"}>Email address</span>
                            <div className={errors.email && touched.email ? "inputDiv-err" : "inputDiv"} >
                                <i className="fa-regular fa-envelope"></i>
                                <Field
                                    id="email"
                                    name="email"
                                    placeholder="e.g. alex@email.com"
                                    type="email"
                                    className={errors.email && touched.email ? "input-error" : ""}
                                />
                                <ErrorMessage name="email" component="div" className="error" />
                            </div>
                        </label>

                        <label htmlFor="password">
                            <span className={errors.password && touched.password ? "labelName-err" : "labelName"}>Password</span>
                            <div className={errors.password && touched.password ? "inputDiv-err" : "inputDiv"} >
                                <i className="fa-solid fa-lock"></i>
                                <Field
                                    id="password"
                                    name="password"
                                    placeholder="At least 8 characters"
                                    type="password"
                                    className={errors.password && touched.password ? "input-error" : ""}
                                />
                                <ErrorMessage name="password" component="div" className="error" />
                            </div>
                        </label>


                        <label htmlFor="confirmPassword">
                            <span className={errors.confirmPassword && touched.confirmPassword ? "labelName-err" : "labelName"}>Confirm password</span>
                            <div className={errors.confirmPassword && touched.confirmPassword ? "inputDiv-err" : "inputDiv"} >
                                <i className="fa-solid fa-lock"></i>
                                <Field
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    placeholder="At least 8 characters"
                                    type="password"
                                    className={errors.confirmPassword && touched.confirmPassword ? "input-error" : ""}
                                />
                                <ErrorMessage name="confirmPassword" component="div" className="error" />
                            </div>
                        </label>

                        <button type="submit" disabled={isSubmitting || !isValid || !dirty}>
                            {isSubmitting ? "Create new account" : "Create new account"}
                        </button>

                        <div className="create">
                            <span>Already have an account ? <Link to={'/'}>Login</Link></span>

                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Account;
