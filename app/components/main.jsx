"use client";

import Orders from "./orders";

const Main = ({ setAuth, auth }) => {
  const handleLogOut = () => {
    setAuth(false);
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 pb-4 min-h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 min-h-screen ">
        <Orders />
        <button
          onClick={handleLogOut}
          className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Logout
        </button>
      </div>
    </section>
  );
};
export default Main;
