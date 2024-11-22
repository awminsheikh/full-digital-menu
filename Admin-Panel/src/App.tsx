import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Use Routes instead of Switch
import AdminDashboard from "./Components/AdminDashboard";
import ItemManagement from "./Components/ItemManagement";
import CategoryManagement from "./Components/CategoryManagement";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {" "}
        {/* Use Routes for React Router v6 */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/items" element={<ItemManagement />} />
        <Route path="/admin/categories" element={<CategoryManagement />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
