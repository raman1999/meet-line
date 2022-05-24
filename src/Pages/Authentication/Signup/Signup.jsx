import {BsPersonFill} from "react-icons/bs";
import {MdEmail} from "react-icons/md";
import {AiTwotoneLock} from "react-icons/ai";

const Signup = () => {
  return (
    <form>
    <div className="input-container mb-4">
    <BsPersonFill className="icon"/>
    <input
      type="text"
      name="name"
      id=""
      placeholder="Enter Name"
      className="input-field"
    />
  </div>
  <div className="input-container mb-4">
    <MdEmail className="icon"/>
    <input
      type="email"
      name="email"
      placeholder="Enter Email"
      className="input-field"
    />
  </div>
  
  <div className="input-container">
    <AiTwotoneLock className="icon" />
    <input
      type="password"
      name="password"
      placeholder="Enter Password" 
      className="input-field"
    />
  </div>
  
  <button  type="submit" className="btn">
         Signup
  </button>
  </form>
  )
}

export default Signup;