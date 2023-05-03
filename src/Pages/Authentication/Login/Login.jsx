import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { Github, EyeOff, Eye } from "lucide-react";

const Login = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [ErrorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { EmailLogin, GoogleLogin, GithubLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const target = event.target;
    const emailValue = target.email.value;
    const passwordValue = target.password.value;

    EmailLogin(emailValue, passwordValue)
      .then((user) => {
        console.log(user);
        setErrorMessage("");
        setSuccessMessage("Login Successfully !!!");
        target.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
        setSuccessMessage("");
      });
  };

  const handleGoogleLogin = () => {
    GoogleLogin()
      .then((result) => {
        console.log(result);
        setErrorMessage("");
        setSuccessMessage("Login Successfully !!!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
        setSuccessMessage("");
      });
  };

  const handleGithubLogin = () => {
    GithubLogin()
      .then((result) => {
        console.log(result.user);
        setErrorMessage("");
        setSuccessMessage("Login Successfully !!!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
        setSuccessMessage("");
      });
  };

  return (
    <div className="bg-base-200">
      <div className="flex flex-col items-center justify-center py-10">
        <div className="text-center">
          <h1 className="text-5xl font-bold py-6">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin}>
            <div className="px-8 py-8">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control relative ">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  className="input input-bordered"
                  name="password"
                  required
                />
                <p
                  className="absolute top-12 right-3 bg-slate-200 p-1 rounded-2xl"
                  onClick={handleTogglePasswordVisibility}
                >
                  {showPassword ? (
                    <div>
                      <span>
                        <EyeOff color="black" size={20} />
                      </span>
                    </div>
                  ) : (
                    <div>
                      <span>
                        <Eye color="black" size={20} />
                      </span>
                    </div>
                  )}
                </p>
                <label className="label">
                  <Link
                    to="/registration"
                    className="label-text-alt link link-hover my-2"
                  >
                    Registration Here ???
                  </Link>
                </label>
              </div>
              {ErrorMessage && (
                <p className="text-red-500 pb-2">{ErrorMessage}</p>
              )}
              {successMessage && (
                <p className="text-green-500 pb-2">{successMessage}</p>
              )}
              <div className="form-control">
                <button className="btn">Login</button>
              </div>
            </div>
          </form>
        </div>
        <h1 className="pt-10 pb-2 text-3xl font-bold">Or Sign Up Using</h1>
        <div className="md:flex md:w-2/4 mx-auto md:pb-10 pb-1">
          <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center mt-5 md:mt-0">
            <button onClick={handleGoogleLogin} className="btn bg-slate-500">
              <span className="me-2">
                <img
                  className="w-12 rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqkyW8ueUFuOyzZwA2PxadlUAyNL0glIQxXA&usqp=CAU"
                  alt="Google"
                />
              </span>
              Google Login
            </button>
          </div>
          <div className="divider md:divider-horizontal divider-vertical">
            OR
          </div>
          <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
            <button onClick={handleGithubLogin} className="btn bg-slate-500">
              <span className="me-2">
                <Github color="black" size={20} />
              </span>
              Github Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
