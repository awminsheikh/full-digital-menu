import HomeNavbar from "./layouts/Navbar/HomeNavbar";
import CategoryWindow from "./Windows/CategoryWindow";
import ItemWindow from "./Windows/ItemWindow";
const AdminDashboard = () => {
  return (
    <div className="w-screen h-screen bg-black text-white overflow-x-hidden">
      <div className="w-full">
        <HomeNavbar />
      </div>
      <div className="w-full flex items-center justify-center p-5">
        <CategoryWindow />
      </div>
      <div className="w-full flex items-center justify-center p-5">
        <ItemWindow />
      </div>
      <span className="text-center block text-blue-300">
        designed by <a href="">Amin Sheikh</a>
      </span>
    </div>
  );
};

export default AdminDashboard;
