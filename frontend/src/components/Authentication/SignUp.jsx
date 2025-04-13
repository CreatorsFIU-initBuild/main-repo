import { useState } from "react";
import { auth, db } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
//import ErrorAlert from "../ui/ErrorAlert";

const Signup = ({ formClass, toggle }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .matches(/^[a-zA-Z\s]+$/, "Only letters are allowed (A-Z, a-z).")
      .required("Username is required."),
    email: Yup.string()
      .email("Must be a valid email (e.g., name@example.com).")
      .required("Email is required."),
    phoneNumber: Yup.string().matches(
      /^\(\d{3}\) \d{3}-\d{4}$/,
      "Format: (XXX) XXX-XXXX."
    ),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters.")
      .matches(
        /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "At least 1 number, 1 uppercase, 1 special character."
      )
      .required("Password is required."),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match.")
      .required("Confirm password is required."),
  });

  const handleFormSubmit = async (values) => {
    const { username, email, phoneNumber, password } = values;
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await sendEmailVerification(user);
      await setDoc(doc(db, "users", user.uid), {
        username,
        email,
        phoneNumber,
        uid: user.uid,
        createdAt: new Date(),
        verified: false,
      });
      navigate("/");
    } catch (error) {
      setShowErrorAlert(true);
      console.error(error);
    }
  };

  return (
    <div className="form-wrapper">
      <Formik
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
        initialValues={{
          username: "",
          email: "",
          phoneNumber: "",
          password: "",
          confirmPassword: "",
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          setFieldValue,
          values,
          touched,
          errors,
          isValid,
        }) => {
          const handlePhoneNumberChange = (e) => {
            const { value } = e.target;
            let numbers = value.replace(/\D/g, ""); // Remove non-numeric characters
            if (numbers.length > 10) numbers = numbers.slice(0, 10); // Limit to 10 digits

            let formattedNumber = numbers;
            if (numbers.length >= 4)
              formattedNumber = `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
            if (numbers.length >= 7)
              formattedNumber = `(${numbers.slice(0, 3)}) ${numbers.slice(
                3,
                6
              )}-${numbers.slice(6)}`;

            setFieldValue("phoneNumber", formattedNumber);
          };

          return (
            <form
              className={`form ${formClass} space-y-6`}
              noValidate
              onSubmit={handleSubmit}
            >
              <h1 className="text-center">CreatorsFIU</h1>
              <p className="text-center">
                Sign up to join our marketplace & connect with creators.
              </p>

              {showErrorAlert && (
                <ErrorAlert
                  message="Something went wrong. Please try again."
                  dismiss={() => setShowErrorAlert(false)}
                />
              )}

              <div>
                <label
                  htmlFor="username"
                  className="block font-normal text-gray-900 text-lg"
                >
                  Username <span className="text-red-500">*</span>
                </label>
                <div className="mt-1">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={`block w-full rounded-md bg-white px-3 py-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 ${
                      touched.username && errors.username
                        ? "border-red-500 outline-red-500"
                        : "focus:outline-[#B6862C]"
                    }`}
                    placeholder="Enter your username"
                  />
                  {touched.username && errors.username && (
                    <p className="text-red-500 text-sm mt-1 ml-1">
                      {errors.username}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-normal text-gray-900"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="mt-1">
                  <input
                    id="email"
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

              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-lg font-normal text-gray-900"
                >
                  Phone Number
                </label>
                <div className="flex flex-row mt-1 space-x-2">
                  <select className="bg-white text-gray-800 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="+1">+1</option>
                  </select>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    value={values.phoneNumber}
                    onChange={handlePhoneNumberChange}
                    onBlur={handleBlur}
                    className={`block w-full rounded-md bg-white px-3 py-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 ${
                      touched.phoneNumber && errors.phoneNumber
                        ? "border-red-500 outline-red-500"
                        : "focus:outline-[#B6862C]"
                    }`}
                    placeholder="(xxx) xxx-xxxx"
                  />
                </div>
                {touched.phoneNumber && errors.phoneNumber && (
                  <p className="text-red-500 text-sm mt-1 ml-1">
                    {errors.phoneNumber}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-lg font-normal text-gray-900"
                >
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="mt-1 password-container">
                  <div className="relative w-full">
                    <input
                      id="password"
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

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-lg font-normal text-gray-900"
                >
                  Retype Password <span className="text-red-500">*</span>
                </label>
                <div className="mt-1 password-container">
                  <div className="relative w-full">
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      value={values.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      className={`block w-full rounded-md bg-white px-3 py-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 ${
                        touched.confirmPassword && errors.confirmPassword
                          ? "border-red-500 outline-red-500"
                          : "focus:outline-[#B6862C]"
                      }`}
                      placeholder="Confirm password"
                    />
                    <button
                      type="button"
                      className="toggle-password"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
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

                  {touched.confirmPassword && errors.confirmPassword && (
                    <p className="text-red-500 text-sm mt-1 ml-1">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md px-3 py-3.5 font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2"
                  disabled={!isValid}
                >
                  Sign Up
                </button>
              </div>
              <p className="mt-3 text-center">
                <span>Already have an account? </span>
                <b className="text-blue-500 cursor-pointer" onClick={toggle}>
                  Sign in here
                </b>
              </p>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Signup;
