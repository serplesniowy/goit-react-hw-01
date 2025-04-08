import React from "react";
import FriendList from "../components/FriendList/FirendList";
import friends from "../friends.json";

const FriendListPage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <FriendList friends={friends} />
    </div>
  );
};

export default FriendListPage;
