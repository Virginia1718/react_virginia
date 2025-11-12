// const HelloMoon = () => {
//   return (
//     <div className="text-[25px] bg-yellow-500 m-10 p-10 font-serif">
//       Ini adalah komponen Hello Moon
//     </div>
//   );
// };

// export default HelloMoon;

import { useState } from "react";
import HelloMoon from "../HelloMoon";

//tipe data props adalah object
const HelloWorld = ({ text, handleClick }) => {
  const [hello, setHello] = useState("Welcome");
  const handleChildClick = () => {
    setHello("Selamat Datang");
  };
  return (
    <div className="text-[25px] bg-red-500 m-10 p-10 font-serif">
      {text}
      {hello}
      <HelloMoon />
      <button
        className="bg-blue-500 hover:bg-blue-700 py-4 px-4 rounded-2xl text-white"
        onClick={handleClick}
      >
        Click Me
      </button>
      <button
        className="bg-green-500 hover:bg-green-700 py-4 px-4 rounded-2xl text-white"
        onClick={handleChildClick}
      >
        Click Me
      </button>
    </div>
  );
};

export default HelloWorld;