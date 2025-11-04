// komponen adalah fungsi yang mengreturn suatu JSX
//JSX baris 5-7 dan itu bukan html dan itu adalah fungsi
//baris 4-5 adalah javascript
    //jsx hanya punya 1 div atau 1 kelas
    //div sbgai penampung komponen lain
    //kurung kurawal artinya memasukkan js kedalm jsx
    //<> ini adalah fragment dan sudah dianggp parent clss, ini sama dengan div namun tidak bisa di edit
//Komponen adalah fungsi yang return JSX
import HelloWorld from "./HelloWorld";

const App = () => {
  let hello = "Hello World";
  return (
    <>
      <div className="text-[25px] bg-blue-500 m-10 p-10 font-serif">
        {hello}
      </div>
      <HelloWorld text="inii adalah hello 2" />
      <HelloWorld text="inii adalah hello 2" />
      <button className="bg-blue-500 hover:bg-blue-700 oy-4 px-4 rounded-xl text-white"></button>
    </>
  );
};

export default App;