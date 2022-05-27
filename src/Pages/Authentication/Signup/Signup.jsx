import { BsPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiTwotoneLock } from "react-icons/ai";
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

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        setLoading(true);
        await signUp(values.name, values.email, values.password);
        toast.success(toastConstants.signupSuccess);
        resetForm({ values: "" });
      } catch (err) {
        err.code === "auth/email-already-in-use"
          ? toast.error(toastConstants.signupFailedByEmail)
          : toast.error(toastConstants.serverError);
      } finally {
        setLoading(false);
      }
    },
    validate: (values) => {
      const regularExpression = new RegExp(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
      );
      let errors = {};
      if (!values.email) {
        errors.email = "Valid email is required";
      } else if (
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.name) {
        errors.name = "Valid name is required";
      }
      if (!values.password) {
        errors.password = "Valid password is required";
      } else if (!regularExpression.test(values.password)) {
        errors.password =
          "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character";
      }
      return errors;
    },
  });
  return (
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

export default Signup;
