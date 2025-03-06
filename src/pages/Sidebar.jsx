import { Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

const Sidebar = () => {
  const { logout } = useAuth();

  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      <nav className="space-y-4">
        <Link to="/dashboard" className="block py-2 px-4 bg-gray-700 rounded">
          Home
        </Link>
        <Link
          to="/dashboard/profile"
          className="block py-2 px-4 bg-gray-700 rounded"
        >
          Profile
        </Link>
        <Link
          to="/dashboard/settings"
          className="block py-2 px-4 bg-gray-700 rounded"
        >
          Settings
        </Link>
        <button
          onClick={logout}
          className="mt-4 w-full py-2 px-4 bg-red-500 rounded"
        >
          Logout
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
