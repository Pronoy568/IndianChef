import React, { useState } from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [ErrorMessage, setErrorMessage] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    const target = event.target;
    const emailValue = target.email.value;
    const passwordValue = target.password.value;
    console.log(emailValue, passwordValue);
  };

  return (
    <div className="bg-base-200">
      <div className="flex flex-col items-center justify-center py-10">
        <div className="text-center">
          <h1 className="text-5xl font-bold py-6">Register now!</h1>
        </div>
        <div className="card flex-shrink-0 pb-6 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister}>
            <div className="px-8 pt-8">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
                <label className="label">
                  <Link
                    to="/login"
                    className="label-text-alt link link-hover my-2"
                  >
                    Already have an account? Login Here
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
                <button className="btn">Register</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
