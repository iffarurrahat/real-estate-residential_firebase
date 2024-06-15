const Drawer = ({ isOpen, onClose, user, handleSignOut }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-64 bg-white h-full shadow-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="p-4 flex items-center justify-between text-black">
        <h2 className="text-xl font-semibold">Profile</h2>
        <button onClick={onClose} className="text-2xl">
          &times;
        </button>
      </div>
      <div className="p-4">
        <img
          src={user?.photoURL}
          className="border-2 border-primary w-20 h-20 rounded-full mx-auto"
          alt="User Avatar"
        />
        <h3 className="text-center mt-2 text-black">{user?.displayName}</h3>
        <p className="text-center text-sm text-black">{user?.email}</p>
        <button
          onClick={handleSignOut}
          className="mt-4 w-full py-2 bg-primary text-white rounded"
        >
          Logout
        </button>
        <button
          onClick={onClose}
          className="mt-4 w-full py-2 bg-primary text-white rounded"
        >
          Close Drawer
        </button>
      </div>
    </div>
  );
};

export default Drawer;