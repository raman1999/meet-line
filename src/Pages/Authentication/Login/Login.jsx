import {MdEmail} from "react-icons/md";
import {AiTwotoneLock} from "react-icons/ai";

const Login = () => {
  return (
   <form> 
   <div className="input-container mb-4">
   <MdEmail className="icon"/>
    <input type="email" name="email" placeholder="Enter Email"  className="input-field"/>
  </div>

  <p className="text-red-600 mb-2"></p>

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

export default Login;