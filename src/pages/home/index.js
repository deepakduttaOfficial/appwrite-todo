import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { databases } from "../../appwrite/appwrite";
import Todocard from "../../components/card/Todocard";
import Navbar from "../../components/navbar";
import { Todocontext } from "../../context/Todocontext";
import { isAuthenticate } from "../auth";
import Createtodo from "../todo/Createtodo";

const Home = () => {
  const { REACT_APP_DATABASE_ID, REACT_APP_COLLECTION_ID } = process.env;
  const navigate = useNavigate();
  const { refTodo } = useContext(Todocontext);
  const [values, setValues] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    !isAuthenticate() && navigate("/signin");
    setLoading(true);
    const promise = databases.listDocuments(
      REACT_APP_DATABASE_ID,
      REACT_APP_COLLECTION_ID
    );
    promise.then(
      function (response) {
        setValues(response.documents);
        setLoading(false);
      },
      function (error) {
        toast.error(`${error}`, { theme: "dark", autoClose: 2000 });
        setLoading(false);
      }
    );
  }, [refTodo, navigate]);
  return (
    <>
      <ToastContainer />
      <div className="sticky-top bg-white border-b-2 border-gray-300">
        <Navbar isAuthenticate={false} />
        <div className="container max-w-2xl mx-auto mt-2">
          <Createtodo />
        </div>
      </div>
      <div className="container max-w-2xl mx-auto mt-2">
        <div className="container w-full bg-gray-200 mt-3 rounded-md px-4 py-5">
          {loading ? (
            <div className="flex justify-center items-center">
              <div
                className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0"
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            values?.map((value, index) => {
              return (
                <Todocard
                  key={index}
                  todo={value.todo}
                  todoId={value.$id}
                  index={index + 1}
                />
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
