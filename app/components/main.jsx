"use client";

const Main = ({ setAuth, auth }) => {
  const handleLogOut = () => {
    setAuth(false);
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 pb-4 min-h-screen">
      <p>Cool!</p>
      <button onClick={handleLogOut}>Logout</button>
    </section>
  );
};
export default Main;
