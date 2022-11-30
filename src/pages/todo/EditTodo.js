import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import Button from "../../components/card/Button";
import EditInput from "./EditInput";
import LoadingBar from "../../components/loading/LoadingBar";

const EditTodo = () => {
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

  const isEdit = () => {
    setValues({ ...values, success: false, loading: true, error: false });
    setTimeout(() => {
      setValues({ ...values, success: false, loading: false, error: false });
    }, 2000);
    console.log(values);
  };
  return (
    <>
      <Button
        color={`bg-sky-600 hover:bg-sky-700 focus:bg-sky-700 active:bg-sky-800`}
        icon={loading ? <LoadingBar /> : <FiEdit />}
        data-bs-toggle="modal"
        data-bs-target="#exampleModalCenter"
      />

      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="exampleModalCenter"
        tabIndex="-1"
        aria-labelledby="exampleModalCenterTitle"
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-3 border-b border-gray-200 rounded-t-md">
              <h5
                className="text-xl font-medium leading-normal text-gray-800"
                id="exampleModalScrollableLabel"
              >
                Update Todo
              </h5>
              <button
                type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
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
                className={`inline-block px-6 py-2.5 text-white font-medium text-sm leading-tight rounded shadow-md  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out ml-1 ${
                  todo.length === 0
                    ? "cursor-not-allowed bg-green-300"
                    : "active:bg-green-800 hover:bg-green-700 focus:bg-green-700 bg-green-600"
                }`}
                data-bs-dismiss="modal"
                onClick={isEdit}
                disabled={todo.length === 0}
              >
                update todo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTodo;
