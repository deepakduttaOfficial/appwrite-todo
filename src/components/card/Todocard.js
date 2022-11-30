import { MdDelete } from "react-icons/md";
import Button from "./Button";
import EditTodo from "../../pages/todo/EditTodo";

const Todocard = () => {
  const isDelete = () => {
    console.log("delete");
  };
  return (
    <div className="py-2 px-3 rounded-lg shadow-lg bg-white w-full flex justify-between items-center mb-3">
      <div className="flex items-center">
        <span className="px-1 py-[2px] rounded-sm text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease mr-2">
          1
        </span>
        <h5 className="text-gray-900 text-lg leading-tight font-medium">
          My todo
        </h5>
      </div>
      <div className="flex space-x-2">
        <EditTodo />
        <Button
          color={`bg-red-600 hover:bg-red-700 focus:bg-red-700 active:bg-red-800`}
          icon={<MdDelete />}
          onClick={isDelete}
        />
      </div>
    </div>
  );
};

export default Todocard;
