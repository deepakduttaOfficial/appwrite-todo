import { useContext, useState } from "react";
import Loadingbutton from "../../components/button/button";
import { databases } from "../../appwrite/appwrite";
import { ID } from "appwrite";
import { toast, ToastContainer } from "react-toastify";
import { Todocontext } from "../../context/Todocontext";

const Createtodo = () => {
  const { REACT_APP_DATABASE_ID, REACT_APP_COLLECTION_ID } = process.env;
  const { refTodo, setRefTodo } = useContext(Todocontext);
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
    const promise = databases.createDocument(
      REACT_APP_DATABASE_ID,
      REACT_APP_COLLECTION_ID,
      ID.unique(),
      { todo }
    );

    promise.then(
      function (response) {
        toast.success(`Todo created successfully`, {
          theme: "dark",
          autoClose: 2000,
        });
        setValues({
          todo: "",
          success: { response },
          loading: false,
          error: false,
        });
        setRefTodo(!refTodo);
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
    <>
      <ToastContainer />
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
