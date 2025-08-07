import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  //useEffect
  async function neha() {
    const res = await fetch(
      "https://official-joke-api.appspot.com/jokes/random"
    );
    const data = await res.json();
    console.log(data.setup + "_" + data.punchline);
  }
  useEffect(() => {
    neha();
  }, []);

  //useRef
  // to understand plz comment out useeffect
  // const value=useRef(0);
  //  function counting(){
  //   value.current=value.current+1
  //  }
  //  counting()
  return (
    <>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        add
      </button>
      {/* <p>This component has rendered {value.current} times</p> */}
    </>
  );
}

export default App;
