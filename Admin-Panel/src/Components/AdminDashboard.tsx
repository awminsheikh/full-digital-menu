import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link to="/admin/items">Manage Items</Link>
          </li>
          <li>
            <Link to="/admin/categories">Manage Categories</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminDashboard;
