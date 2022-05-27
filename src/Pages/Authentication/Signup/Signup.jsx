<<<<<<< Updated upstream
import {BsPersonFill} from "react-icons/bs";
import {MdEmail} from "react-icons/md";
import {AiTwotoneLock} from "react-icons/ai";
=======
import { signUp } from "../../../firebase/firebase-auth";
import { useFormik } from "formik";
import { useState } from "react";
import { toast } from "react-toastify";
import { toastConstants } from "../../../constants/constants";
import {
  EmailIcon,
  LockIcon,
  PersonIcon,
} from "../../../Components/Icons/Icons";
>>>>>>> Stashed changes

const Signup = () => {
  return (
<<<<<<< Updated upstream

=======
    <form onSubmit={formik.handleSubmit}>
      <div className="input-container mb-4">
        <PersonIcon className="icon" />
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          className="input-field"
          onChange={formik.handleChange}
          value={formik.values.name}
          onBlur={formik.handleBlur}
        />
      </div>
      {formik.touched.name && formik.errors.name ? (
        <p className="mb-2 text-red-600">{formik.errors.name}</p>
      ) : null}
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
      {formik.touched.email && formik.errors.email ? (
        <p className="mb-2 text-red-600">{formik.errors.email}</p>
      ) : null}
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
        {loading ? "Signing in..." : "Signup"}
      </button>
    </form>
  );
};
>>>>>>> Stashed changes

export default Signup;