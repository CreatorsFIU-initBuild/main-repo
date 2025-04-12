import { useEffect, useRef, useState } from "react";
import Signup from "../components/Signup/Signup";
import SignIn from "../components/SignIn/SignIn";
import ForgotPassword from "../components/ForgotPass/ForgotPassword";
import "./authentication.css";

const Authentication = () => {
  const containerRef = useRef(null);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.classList.add("sign-in");
      }
    }, 200);

    return () => clearTimeout(timeout);
  }, []);

  const toggle = () => {
    containerRef.current.classList.toggle("sign-in");
    containerRef.current.classList.toggle("sign-up");
  };

  const toggleForgotPassword = () => {
    setShowForgotPassword(!showForgotPassword);
  };

  return (
    <div className="_container" ref={containerRef}>
      <div className="row">
        <div
          className="col align-items-center flex-col sign-up"
          style={{ flexDirection: "column" }}
        >
          <Signup formClass="sign-up" toggle={toggle} />
        </div>

        <div className="col align-items-center flex-col sign-in">
          {!showForgotPassword ? (
            <div className="sign-in">
              <SignIn
                formClass="sign-in"
                toggle={toggle}
                toggleForgotPassword={toggleForgotPassword}
              />
            </div>
          ) : (
            <div className="forgot-password">
              <ForgotPassword toggleForgotPassword={toggleForgotPassword} />
            </div>
          )}
        </div>
      </div>
      <div className="row content-row">
        <div className="col align-items-center flex-col">
          <div className="text sign-in">
            <h2>Welcome</h2>
          </div>
        </div>
        <div className="col align-items-center flex-col">
          <div className="text sign-up">
            <h2>Join with us</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
