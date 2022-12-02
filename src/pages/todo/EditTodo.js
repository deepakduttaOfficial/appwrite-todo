import { useContext, useState } from "react";
import EditInput from "./EditInput";
import { databases } from "../../appwrite/appwrite";
import { toast, ToastContainer } from "react-toastify";
import { Todocontext } from "../../context/Todocontext";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/navbar";

const EditTodo = () => {
  const { REACT_APP_DATABASE_ID, REACT_APP_COLLECTION_ID } = process.env;
  const { todoId } = useParams();
  const navigate = useNavigate();
  const { refTodo, setRefTodo } = useContext(Todocontext);
  const [values, setValues] = useState({
    todo: "",
    success: false,
    loading: false,
    error: false,
  });
  const { todo } = values;
  const handleChange = (name) => (e) => {
    setValues({
      ...values,
      [name]: e.target.value,
      success: false,
      loading: false,
      error: false,
    });
  };

  const isEdit = () => {
    setValues({ ...values, success: false, loading: true, error: false });
    const promise = databases.updateDocument(
      REACT_APP_DATABASE_ID,
      REACT_APP_COLLECTION_ID,
      todoId,
      { todo }
    );
    promise.then(
      function (response) {
        setTimeout(() => {
          navigate("/");
        }, 2000);
        toast.success(`Todo updated successfully, redirecting...`, {
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
      }
    );
  };
  return (
    <>
      <ToastContainer />
      <Navbar />
      <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
        <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
          <div className="modal-header flex flex-shrink-0 items-center justify-between p-3 border-b border-gray-200 rounded-t-md">
            <h5
              className="text-xl font-medium leading-normal text-gray-800"
              id="exampleModalScrollableLabel"
            >
              Update Todo
            </h5>
          </div>
          <div className="modal-body relative p-4">
            <EditInput
              placeholder="update todo..."
              value={todo}
              name="todo"
              onChange={handleChange("todo")}
            />
          </div>
          <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-3 border-t border-gray-200 rounded-b-md">
            <button
              type="button"
              className={`inline-block px-6 py-2.5 text-white font-medium text-sm leading-tight rounded shadow-md  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out ml-1 
               
                   active:bg-red-800 hover:bg-red-700 focus:bg-red-700 bg-red-600
              `}
              onClick={() => {
                navigate("/");
              }}
            >
              Back
            </button>
            <button
              type="button"
              className={`inline-block px-6 py-2.5 text-white font-medium text-sm leading-tight rounded shadow-md  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out ml-1 ${
                todo.length === 0
                  ? "cursor-not-allowed bg-green-300"
                  : "active:bg-green-800 hover:bg-green-700 focus:bg-green-700 bg-green-600"
              }`}
              onClick={isEdit}
              disabled={todo.length === 0}
            >
              update todo
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTodo;
