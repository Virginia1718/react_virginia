import HelloMoon from "../HelloMoon";

const HelloWorld = () => {
  return (
    <div className="text-[25px] bg-red-500 m-10 p-10 font-serif">
      Ini adalah komponen Hello World
      <HelloMoon />
    </div>
  );
};

export default HelloWorld;