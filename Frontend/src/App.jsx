import { useState } from "react";
import TestForm from "./pages/TestForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TestForm />
    </>
  );
}

export default App;
