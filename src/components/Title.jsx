const Title = () => {
  return (
    <div className=" mt-2 flex flex-col items-center px-3">
      <img src="./rccg-for-web.png" className=" text-center w-20" alt="" />
      <h1 className="mb-2 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-center ">
        The Redemed Christian Church Of God
      </h1>
      <h2 className="mb-1 text-xl font-extrabold leading-none tracking-tight text-green-900 md:text-5xl lg:text-6xl text-center ">
        Unchangeable God Parish Choir
      </h2>
      <p className="mb-6 text-lg font-bold text-red-500 lg:text-xl sm:px-16 xl:px-48 ">
        CODE OF CONDUCTS
      </p>
    </div>
  );
};

export default Title;
