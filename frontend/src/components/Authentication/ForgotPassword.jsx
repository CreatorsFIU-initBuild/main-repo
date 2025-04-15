import { useState } from "react";
import { auth } from "../../firebase";
import { sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = ({ toggleForgotPassword }) => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsEmailValid(validateEmail(value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEmailValid) {
      try {
        await sendPasswordResetEmail(auth, email);
        setIsSubmitted(true);
        setError("");
      } catch (err) {
        setError(err.message);
      }
    }
  };

  return (
    <main className="flex justify-center items-center min-h-screen !px-4">
      <div className="w-full max-w-md bg-white !p-8 rounded-xl shadow-lg">
        <h1 className="text-center !text-3xl font-bold text-gray-900 !pt-4">
          CreatorsFIU
        </h1>
        <p className="text-center text-gray-600 !mb-4">Forgot Password?</p>

        {/* Success Message */}
        {isSubmitted && (
          <div
            className="!text-sm bg-green-100 text-green-700 !p-3 rounded !mb-4 !mx-4"
            role="alert"
          >
            A password reset link has been sent to your email.
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div
            className="!text-sm bg-red-100 text-red-700 !p-3 rounded !mb-4"
            role="alert"
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="!p-4">
          <div className="!mb-3">
            <label htmlFor="email" className="block !mb-1 text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="w-full !px-3 !py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              onFocus={() => setIsTouched(true)}
              required
            />
            <div className="h-5 !mt-1">
              {" "}
              {/* Fixed height container for validation message */}
              <p
                className={`text-red-600 !text-sm ${
                  isTouched && (!isEmailValid || !email) ? "" : "invisible"
                }`}
              >
                Must be a valid email (e.g., name@example.com).
              </p>
            </div>
          </div>

          <button
            type="submit"
            className="w-full text-white text-lg !py-3 rounded-lg transition-all duration-300
            bg-blue-600 hover:bg-blue-800 active:bg-blue-700 shadow-md"
            disabled={!isEmailValid}
          >
            Send Reset Link
          </button>

          <p className="text-center !mt-3">
            <b
              onClick={toggleForgotPassword}
              className="text-primary cursor-pointer hover:underline"
            >
              Back to Sign In
            </b>
          </p>
        </form>
      </div>
    </main>
  );
};

export default ForgotPassword;
