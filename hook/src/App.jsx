import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [MyMoney, setMYMONEY] = useState(0);

  let addmoney = () => {
    if(MyMoney<20){
  MyMoney = MyMoney + 1;
    setMYMONEY(MyMoney);
    }
    
    
  };
  let reducemoney = () => {
     if(MyMoney>0){
       MyMoney = MyMoney - 1;
    setMYMONEY(MyMoney);
    }
   
  };
  return (
    <>
      <h1>This Is Basic One</h1>
      <h2>MyMoney {MyMoney}</h2>
      <br></br>
      <button onClick={addmoney}>Please Add Money, {MyMoney}</button>
      <br></br>
      <button onClick={reducemoney}>Please spend Money, {MyMoney}</button>
    </>
  );
}

export default App;
