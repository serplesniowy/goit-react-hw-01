import React from "react";
import Profile from "../components/Profile/Profile";
import userData from "../userData.json";

const ProfilePage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </div>
  );
};

export default ProfilePage;
