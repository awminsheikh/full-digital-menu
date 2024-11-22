import HomeNavbar from "./layouts/Navbar/HomeNavbar";
import CategoryWindow from "./Windows/CategoryWindow";

const AdminDashboard = () => {
  return (
    <div className="w-screen h-screen bg-black text-white">
      <div className="w-full">
        <HomeNavbar />
      </div>
      {/* <nav>
        <ul>
          <li>
            <Link to="/admin/items">Manage Items</Link>
          </li>
          <li>
            <Link to="/admin/categories">Manage Categories</Link>
          </li>
        </ul>
      </nav> */}
      <div className="w-full flex items-center justify-center p-5">
        <CategoryWindow />
      </div>
    </div>
  );
};

export default AdminDashboard;
