import { MdDelete } from "react-icons/md";
import Button from "./Button";
import { FiEdit } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { databases } from "../../appwrite/appwrite";
import { toast, ToastContainer } from "react-toastify";
import { useContext } from "react";
import { Todocontext } from "../../context/Todocontext";

const Todocard = ({ todo, todoId, index }) => {
  const { refTodo, setRefTodo } = useContext(Todocontext);
  const isDelete = () => {
    const promise = databases.deleteDocument(
      "6385aae0582084e64837",
      "6385ab1283a3c6285dd0",
      todoId
    );
    promise.then(
      function (response) {
        toast.success(`Todo removed`, {
          theme: "dark",
          autoClose: 2000,
        });

        setRefTodo(!refTodo);
      },
      function (error) {
        toast.error(`${error}`, { theme: "dark", autoClose: 2000 });
      }
    );
  };
  return (
    <>
      <ToastContainer />
      <div className="py-2 px-3 rounded-lg shadow-lg bg-white w-full flex justify-between items-center mb-3">
        <div className="flex items-center">
          <span className="px-1 py-[2px] rounded-sm text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease mr-2">
            {index}
          </span>
          <h5 className="text-gray-900 text-lg leading-tight font-medium">
            {todo}
          </h5>
        </div>
        <div className="flex space-x-2">
          <NavLink
            className={`btn px-4 py-2 text-white font-medium text-lg leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out flex items-center bg-sky-600 hover:bg-sky-700 focus:bg-sky-700 active:bg-sky-800`}
            to={`/todo/update/${todoId}`}
          >
            <FiEdit />
          </NavLink>
          <Button
            color={`bg-red-600 hover:bg-red-700 focus:bg-red-700 active:bg-red-800`}
            icon={<MdDelete />}
            onClick={isDelete}
          />
        </div>
      </div>
    </>
  );
};

export default Todocard;
