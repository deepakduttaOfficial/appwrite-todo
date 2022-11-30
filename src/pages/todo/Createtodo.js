import { useState } from "react";
import Loadingbutton from "../../components/button/button";

const Createtodo = () => {
  const [values, setValues] = useState({
    todo: "",
    success: false,
    loading: false,
    error: false,
  });
  const { todo, loading } = values;

  const handleChange = (name) => (e) => {
    setValues({
      ...values,
      [name]: e.target.value,
      success: false,
      loading: false,
      error: false,
    });
  };

  const addTodo = (e) => {
    e.preventDefault();
    setValues({ ...values, success: false, loading: true, error: false });
    setTimeout(() => {
      setValues({ ...values, success: false, loading: false, error: false });
    }, 2000);
    console.log(values);
  };
  return (
    <>
      <div className="flex justify-center">
        <div className="w-full">
          <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
            <input
              type="text"
              className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
              placeholder="Add your todo"
              value={todo}
              onChange={handleChange("todo")}
            />

            <Loadingbutton
              text={"Add todo"}
              classStyle={`inline-block px-6 py-2.5 text-white font-medium text-sm focus:outline-none w-auto`}
              loading={loading}
              onClick={addTodo}
              disabled={todo.length === 0}
              noTodo={todo.length === 0}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Createtodo;
