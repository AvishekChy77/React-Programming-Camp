import { useContext } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Provider/AuthProvider";

const SocialLogIn = () => {
  const { googleLogIn } = useContext(AuthContext);

  const handleSocialSignIn = (social) => {
    social()
      .then((res) => console.log(res.user))
      .catch((error) => console.log(error));
  };
  return (
    <div className="flex flex-col gap-5 w-full">
      <div
        onClick={() => handleSocialSignIn(googleLogIn)}
        className=" cursor-pointer flex rounded-md gap-5 justify-center items-center hover:bg-slate-200 text-lg "
      >
        <span className="py-2  font-semibold">Continue with</span>
        <FcGoogle></FcGoogle>
      </div>
      <div className="flex rounded-md gap-5 justify-center items-center hover:bg-slate-200 text-lg  ">
        <span className="py-2  font-semibold">Continue with</span>
        <FaFacebook></FaFacebook>
      </div>
    </div>
  );
};

export default SocialLogIn;
