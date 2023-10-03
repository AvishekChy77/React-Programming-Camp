import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import SocialLogIn from "./SocialLogIn";

const Register = () => {
  const { createUser } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    // values
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password, password.length);

    // validation
    if (password.length < 6) {
      toast.error("Password must be atleast 6 characters", {
        position: "bottom-center",
      });
      return;
    }

    createUser(email, password)
      .then((res) => console.log(res.user))
      .catch((error) => console.log(error));
  };

  return (
    <div className="sign-in-container">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-5">Register Today!</h1>
        </div>
        <div className="card frosted-glass flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  name="name"
                  className="input input-bordered"
                />
              </div>
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
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <ToastContainer></ToastContainer>
            <div className="-mt-2 flex items-center justify-between">
              <p className=" text-sm">Already have an account?</p>
              <NavLink className=" font-bold" to="/signin">
                LogIn here
              </NavLink>{" "}
            </div>
            <SocialLogIn></SocialLogIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
