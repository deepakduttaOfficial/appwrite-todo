import { useState } from "react";
import { NavLink } from "react-router-dom";
import Loadingbutton from "../../components/button/button";
import Input from "../../components/input";

const Signin = () => {
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

  const isSignup = (e) => {
    e.preventDefault();
    setValues({ ...values, success: false, loading: true, error: false });
    setTimeout(() => {
      setValues({ ...values, success: false, loading: false, error: false });
    }, 2000);
    console.log(values);
  };
  return (
    <div className="bg-transparent min-h-screen flex flex-col  ">
      <div className="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2 ">
        <div className="px-6 py-8 rounded shadow-md w-full border border-gray-300">
          <h1 className="mb-8 text-3xl text-center text-slate-700">Sign In</h1>

          <form onSubmit={isSignup}>
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
              text={"Create account"}
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
