import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ID } from "appwrite";
import { account } from "../../appwrite/appwrite";
import Loadingbutton from "../../components/button/button";
import Input from "../../components/input";
import { ToastContainer, toast } from "react-toastify";
import { isAuthenticate } from "../auth";

const Signup = () => {
  const navigate = useNavigate();
  isAuthenticate() && navigate("/");

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    success: false,
    loading: false,
    error: false,
  });
  const { name, email, password, loading } = values;
  const handleChange = (name) => (e) => {
    setValues({
      ...values,
      [name]: e.target.value,
      success: false,
      loading: false,
      error: false,
    });
  };

  const isSignup = async (e) => {
    e.preventDefault();
    setValues({ ...values, success: false, loading: true, error: false });
    const promise = account.create(ID.unique(), email, password, name);

    promise.then(
      function (response) {
        console.log(response);
        toast.success(`Account created successfully`, {
          theme: "dark",
          autoClose: 2000,
        });
        setValues({
          name: "",
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
          <h1 className="mb-8 text-3xl text-center text-slate-700">Sign up</h1>

          <form onSubmit={isSignup}>
            <Input
              autoFocus={true}
              type={"text"}
              placeholder="Enter your full name"
              classStyle={"mb-5"}
              value={name}
              onChange={handleChange("name")}
              label={"Enter your full name"}
              disabled={loading}
            />
            <Input
              type={"email"}
              placeholder="Enter email address"
              classStyle={"mb-5"}
              value={email}
              onChange={handleChange("email")}
              label={"Enter email address"}
              disabled={loading}
            />
            <Input
              type={"password"}
              placeholder="Enter strong password"
              classStyle={"mb-5"}
              autoComplete={"true"}
              value={password}
              onChange={handleChange("password")}
              label="Enter strong password"
              disabled={loading}
            />

            <Loadingbutton
              type={"submit"}
              loading={loading}
              disabled={loading}
              text={"Create account"}
            />
          </form>
        </div>

        <div className="text-slate-700 mt-6 ">
          Already have an account?
          <NavLink
            className="no-underline border-b border-blue text-blue-500 ml-3"
            to="/signin"
          >
            Log in
          </NavLink>
          .
        </div>
      </div>
    </div>
  );
};

export default Signup;
