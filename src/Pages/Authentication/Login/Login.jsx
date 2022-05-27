<<<<<<< Updated upstream
import {MdEmail} from "react-icons/md";
import {AiTwotoneLock} from "react-icons/ai";

=======
import { LoadingSpinner } from "../../../Components";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../firebase/firebase-auth";
import { toast } from "react-toastify";
import { toastConstants } from "../../../constants/constants";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { EmailIcon, LockIcon } from "../../../Components/Icons/Icons";
>>>>>>> Stashed changes
const Login = () => {
  return (
<<<<<<< Updated upstream
   <form> 
   <div className="input-container mb-4">
   <MdEmail className="icon"/>
    <input type="email" name="email" placeholder="Enter Email"  className="input-field"/>
  </div>
=======
    <form onSubmit={formik.handleSubmit}>
      <div className="input-container mb-4">
        <EmailIcon className="icon" />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          className="input-field"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />
      </div>
>>>>>>> Stashed changes

  <p className="text-red-600 mb-2"></p>

<<<<<<< Updated upstream
  <div className="input-container">
  <AiTwotoneLock className="icon"/>
    <input
      type="password"
      name="password"
      placeholder="Enter Password"
      className="input-field"
    />
  </div>
  <button
    type="submit"
    className="btn"
  >
      Login
  </button>
  <button
    type="submit"
    className="btn bg-white text-blue-600 border-2 border-gray-300"
  >
      Login with test credentials
  </button>
  </form>
  )
}
=======
      <div className="input-container">
        <LockIcon className="icon" />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          className="input-field"
          onChange={formik.handleChange}
          value={formik.values.password}
          onBlur={formik.handleBlur}
        />
      </div>
      {formik.touched.password && formik.errors.password ? (
        <p className="text-red-600 mb-2">{formik.errors.password}</p>
      ) : null}
      <button type="submit" className="btn">
        {loading ? <LoadingSpinner> Logging in..</LoadingSpinner> : "Login"}
      </button>
      <span
        className="btn bg-white text-blue-600 border-2 border-gray-300 cursor-pointer"
        onClick={testUserLogin}
      >
        {testLoading ? (
          <LoadingSpinner> Logging in..</LoadingSpinner>
        ) : (
          " Login with test credentials"
        )}
      </span>
    </form>
  );
};
>>>>>>> Stashed changes

export default Login;