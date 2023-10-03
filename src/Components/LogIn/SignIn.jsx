import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import SocialLogIn from "./SocialLogIn";
const SignIn = () => {
  const { signInWithEmail } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    // values
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password, password.length);

    // validation
    if (password.length < 6) {
      toast.error("Password must be atleast 6 characters", {
        position: "bottom-center",
      });
      return;
    }

    signInWithEmail(email, password)
      .then((res) => console.log(res.user))
      .catch((error) => console.log(error));
  };

  return (
    <div className="sign-in-container">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-5">Login now!</h1>
        </div>
        <div className="card frosted-glass flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <ToastContainer></ToastContainer>
            <div className="-mt-2 flex items-center justify-between">
              <p>New student?</p>
              <NavLink className=" text-lg font-bold" to="/register">
                Register here
              </NavLink>{" "}
            </div>
            <SocialLogIn></SocialLogIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
