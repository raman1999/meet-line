import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { login } from "../redux/slice/auth-slice";
import { auth } from "./firebase-config";
import { createUser } from "./firestore-methods";

const loginUser = async (loginCredentials, dispatch) => {
  const { email, password } = loginCredentials;
  try {
    const {
      user: { uid },
    } = await signInWithEmailAndPassword(auth, email, password);
    dispatch(login(uid));
  } catch (err) {
    throw err;
  }
};

const signUp = async (name, email, password) => {
  try {
    const {
      user: { uid },
    } = await createUserWithEmailAndPassword(auth, email, password);
    createUser(name, email, uid);
  } catch (err) {
    throw err;
  }
};

export { loginUser, signUp };
