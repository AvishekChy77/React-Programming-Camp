import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useAuth = () => {
  const ac = useContext(AuthContext);
  return ac;
};

export default useAuth;
