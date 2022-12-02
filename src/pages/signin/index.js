import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Loadingbutton from "../../components/button/button";
import Input from "../../components/input";
import { ToastContainer, toast } from "react-toastify";
import { account } from "../../appwrite/appwrite";
import { isAuthenticate } from "../auth";

const Signin = () => {
  const navigate = useNavigate();
  isAuthenticate() && navigate("/");
  const [values, setValues] = useState({
    email: "",
    password: "",
    success: false,
    loading: false,
    error: false,
  });
  const { email, password, loading } = values;
  const handleChange = (name) => (e) => {
    setValues({
      ...values,
      [name]: e.target.value,
      success: false,
      loading: false,
      error: false,
    });
  };

  const isSignin = (e) => {
    e.preventDefault();
    setValues({ ...values, success: false, loading: true, error: false });
    const promise = account.createEmailSession(email, password);
    promise.then(
      function (response) {
        navigate("/");
        toast.success(`Login successfully`, {
          theme: "dark",
          autoClose: 2000,
        });
        setValues({
          email: "",
          password: "",
          success: { response },
          loading: false,
          error: false,
        });
      },
      function (error) {
        toast.error(`${error}`, { theme: "dark", autoClose: 2000 });
        setValues({
          ...values,
          success: false,
          loading: false,
          error: { error },
        });
        console.log(error);
      }
    );
  };

  return (
    <div className="bg-transparent min-h-screen flex flex-col">
      <ToastContainer />
      <div className="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2 ">
        <div className="px-6 py-8 rounded shadow-md w-full border border-gray-300">
          <h1 className="mb-8 text-3xl text-center text-slate-700">Sign In</h1>

          <form onSubmit={isSignin}>
            <Input
              type={"email"}
              placeholder="Enter email address"
              classStyle={"mb-5"}
              value={email}
              onChange={handleChange("email")}
              label={"Enter email address"}
              disabled={loading}
              autoFocus
            />
            <Input
              type={"password"}
              placeholder="Enter password"
              classStyle={"mb-5"}
              autoComplete={"true"}
              value={password}
              onChange={handleChange("password")}
              label="Enter password"
              disabled={loading}
            />

            <Loadingbutton
              type={"submit"}
              loading={loading}
              disabled={loading}
              text={"Sign in"}
            />
          </form>
        </div>

        <div className="text-slate-700 mt-6 ">
          Don't have any account?
          <NavLink
            className="no-underline border-b border-blue text-blue-500 ml-3"
            to="/signup"
          >
            Sign up
          </NavLink>
          .
        </div>
      </div>
    </div>
  );
};

export default Signin;
