import { useRecoilValue } from "recoil";
import authScreenAtom from "../../atoms/authAtoms";
import Login from "./Login";
import SignUp from "./SignUp";
const AuthPage = () => {
  const authScreenState = useRecoilValue(authScreenAtom);
  console.log("authScreenState: ", authScreenState);
  return <div>{authScreenState === "login" ? <Login /> : <SignUp />}</div>;
};

export default AuthPage;
