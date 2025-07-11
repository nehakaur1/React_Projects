import React from "react";

function App() {
   document.body.style.backgroundColor='gray'
     function chnge(color){
      document.body.style.backgroundColor=color
      
    }
  return (
 
    <>
      <div className=" text-center mt-4 ">
        <button className="bg-red-500 p-3 text-center font-bold rounded border-2 mr-2" onClick={()=>{
          chnge('red')}}>RED</button>
        <button className="bg-blue-500 p-3 text-center font-bold rounded border-2 mr-2" onClick={()=>{
          chnge('blue')}}>BLUE</button>
        <button className="bg-green-500 p-3 text-center font-bold rounded border-2 mr-2" onClick={()=>{
          chnge('green')}}>GREEN</button>
        <button className="bg-yellow-500 p-3 text-center font-bold rounded border-2 mr-2" onClick={()=>{
          chnge('yellow')}}>YELLOW</button>
        <button className="bg-pink-500 p-3 text-center font-bold rounded border-2 mr-2" onClick={()=>{
          chnge('pink')}}>PINK</button>
        <button className="bg-black p-3 text-center font-bold rounded border-2 text-white mr-2 " onClick={()=>{
          chnge('black')}}>BLACK</button>
        <button className="bg-white p-3 text-center font-bold rounded border-2 text-black" onClick={()=>{
          chnge('white')}}>WHITE</button>
      </div>
    </>
  );
}

export default App;
