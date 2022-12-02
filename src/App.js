import { useState } from "react";
import { Todocontext } from "./context/Todocontext";
import Router from "./Router";

const App = () => {
  const [refTodo, setRefTodo] = useState(false);
  return (
    <>
      <Todocontext.Provider value={{ refTodo, setRefTodo }}>
        <Router />
      </Todocontext.Provider>
    </>
  );
};

export default App;
