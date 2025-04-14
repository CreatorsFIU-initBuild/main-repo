import { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import ErrorAlert from "../ui/ErrorAlert";

const SignIn = ({ formClass, toggle, toggleForgotPassword }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Must be a valid email (e.g., name@example.com).")
      .required("Email is required."),
    password: Yup.string().required("Password is required."),
  });

  const handleFormSubmit = async (values) => {
    const { email, password } = values;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/"); // Redirect after successful login
    } catch (error) {
      setErrorMessage("Invalid email or password.");
      setShowErrorAlert(true);
    }
  };

  return (
    <div className="form-wrapper">
      <Formik
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
        initialValues={{
          email: "",
          password: "",
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          errors,
          isValid,
        }) => (
          <form
            className={`form ${formClass}`}
            noValidate
            onSubmit={handleSubmit}
          >
            <div className="space-y-6">
              <h1 className="text-center">CreatorsFIU</h1>
              <p className="text-center">
                Sign in to our marketplace & connect with creators.
              </p>

              {/* Error Alert */}
              {showErrorAlert && (
                <ErrorAlert
                  message={errorMessage}
                  dismiss={() => setShowErrorAlert(false)}
                />
              )}

              {/* Email Field */}
              <div>
                <label
                  htmlFor="signin-email"
                  className="block text-lg font-normal text-gray-900"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="mt-1">
                  <input
                    id="signin-email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={`block w-full rounded-md bg-white px-3 py-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 ${
                      touched.email && errors.email
                        ? "border-red-500 outline-red-500"
                        : "focus:outline-[#B6862C]"
                    }`}
                    placeholder="Enter your email"
                  />
                  {touched.email && errors.email && (
                    <p className="text-red-500 text-sm mt-1 ml-1">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label
                  htmlFor="signin-password"
                  className="block text-lg font-normal text-gray-900"
                >
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="mt-1 password-container">
                  <div className="relative w-full">
                    <input
                      id="signin-password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      className={`block w-full rounded-md bg-white px-3 py-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 ${
                        touched.password && errors.password
                          ? "border-red-500 outline-red-500"
                          : "focus:outline-[#B6862C]"
                      }`}
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      className="toggle-password"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 5C7 5 2 9 2 12C2 15 7 19 12 19C17 19 22 15 22 12C22 9 17 5 12 5ZM12 17C9 17 6 14 6 12C6 10 9 7 12 7C15 7 18 10 18 12C18 14 15 17 12 17ZM12 9C10.5 9 9 10.5 9 12C9 13.5 10.5 15 12 15C13.5 15 15 13.5 15 12C15 10.5 13.5 9 12 9Z"
                          fill="gray"
                        />
                      </svg>
                    </button>
                  </div>

                  {touched.password && errors.password && (
                    <p className="text-red-500 text-sm mt-1 ml-1">
                      {errors.password}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Forgot Password Link */}
            <div className="text-center my-3">
              <button
                className="forgot-password-btn text-blue-500 underline cursor-pointer"
                onClick={toggleForgotPassword}
              >
                Forgot Password?
              </button>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="flex w-full justify-center rounded-md px-3 py-3.5 font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2"
              disabled={!isValid}
            >
              Sign In
            </button>

            {/* Sign Up Redirect */}
            <p className="text-center mt-3">
              <span>Don't have an account? </span>
              <b className="text-blue-500 cursor-pointer" onClick={toggle}>
                Sign Up here
              </b>
            </p>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SignIn;
