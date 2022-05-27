import { MdEmail } from "react-icons/md";
import { AiTwotoneLock } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { AiTwotoneLock } from "react-icons/ai";
import { LoadingSpinner } from "../../../Components";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../firebase/firebase-auth";
import { toast } from "react-toastify";
import { toastConstants } from "../../../constants/constants";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LoadingSpinner } from "../../../Components";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../firebase/firebase-auth";
import { toast } from "react-toastify";
import { toastConstants } from "../../../constants/constants";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [testLoading, setTestLoading] = useState(false);

  async function testUserLogin() {
    try {
      setTestLoading(true);
      formik.resetForm({
        values: { email: "ramanjoshi999@gmail.com", password: "Raman@123" },
      });

      await loginUser(
        { email: "ramanjoshi999@gmail.com", password: "Raman@123" },
        dispatch
      );
      toast.success(toastConstants.loginSuccess);
      navigate(location.state?.path || "/user/home");
    } catch (err) {
      toast.error(toastConstants.serverError);
    } finally {
      setTestLoading(false);
    }
  }
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        setLoading(true);
        await loginUser(values, dispatch);
        toast.success(toastConstants.loginSuccess);
        resetForm({ values: { email: "", password: "" } });
        navigate(location.state?.path || "/user/home");
      } catch (err) {
        if (err.code === "auth/user-not-found")
          toast.error(toastConstants.invalidUser);
        else if (err.code === "auth/wrong-password")
          toast.error(toastConstants.wrongPassword);
        else toast.error(toastConstants.serverError);
      } finally {
        setLoading(false);
        setTestLoading(false);
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
      if (!values.password) {
        errors.password = "Valid password is required";
      }

      return errors;
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="input-container mb-4">
        <MdEmail className="icon" />
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
        <p className="text-red-600 mb-2">{formik.errors.email}</p>
      ) : null}

      <div className="input-container">
        <AiTwotoneLock className="icon" />
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

export default Login;
