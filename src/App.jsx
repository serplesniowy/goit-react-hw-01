import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import FriendListPage from "./pages/FriendListPage";
import TransactionHistoryPage from "./pages/TransactionHistoryPage";

const friends = [
  {
    avatar: "https://cdn-icons-png.flaticon.com/512/1998/1998592.png",
    name: "Mango",
    isOnline: true,
    id: 1812,
  },
  {
    avatar: "https://cdn-icons-png.flaticon.com/512/616/616438.png",
    name: "Kiwi",
    isOnline: false,
    id: 1137,
  },
  {
    avatar: "https://cdn-icons-png.flaticon.com/512/1623/1623681.png",
    name: "Ajax",
    isOnline: true,
    id: 1213,
  },
  {
    avatar: "https://cdn-icons-png.flaticon.com/512/2977/2977285.png",
    name: "Jay",
    isOnline: true,
    id: 1714,
  },
  {
    avatar: "https://cdn-icons-png.flaticon.com/512/1998/1998749.png",
    name: "Poly",
    isOnline: false,
    id: 1284,
  },
];

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Profile</Link>
          </li>
          <li>
            <Link to="/friends">Friend List</Link>
          </li>
          <li>
            <Link to="/transactions">Transaction History</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<ProfilePage />} />
        <Route path="/friends" element={<FriendListPage />} />
        <Route path="/transactions" element={<TransactionHistoryPage />} />
      </Routes>
    </Router>
  );
};

export default App;
