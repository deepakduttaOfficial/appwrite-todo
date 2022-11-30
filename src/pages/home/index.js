import Todocard from "../../components/card/Todocard";
import Navbar from "../../components/navbar";
import Createtodo from "../todo/Createtodo";

const Home = () => {
  return (
    <>
      <div className="sticky-top bg-white border-b-2 border-gray-300">
        <Navbar isAuthenticate={false} />
        <div className="container max-w-2xl mx-auto mt-2">
          <Createtodo />
        </div>
      </div>
      <div className="container max-w-2xl mx-auto mt-2">
        <div className="container w-full bg-gray-200 mt-3 rounded-md px-4 py-5">
          <Todocard />
          <Todocard />
          <Todocard />
          <Todocard />
          <Todocard />
          <Todocard />
          <Todocard />
          <Todocard />
          <Todocard />
          <Todocard />
          <Todocard />
          <Todocard />
          <Todocard />
          <Todocard />
          <Todocard />
          <Todocard />
          <Todocard />
          <Todocard />
          <Todocard />
          <Todocard />
          <Todocard />
          <Todocard />
          <Todocard />
          <Todocard />
          <Todocard />
        </div>
      </div>
    </>
  );
};

export default Home;
