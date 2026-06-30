const Navbar = () => {
  return (
    <header className="bg-indigo-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <div>
          <h1 className="text-2xl font-bold">
             Task Tracker
          </h1>

          <p className="text-indigo-100 text-sm">
            Manage your daily tasks
          </p>
        </div>

      </div>
    </header>
  );
};

export default Navbar;