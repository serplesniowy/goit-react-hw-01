import React from "react";
import styles from "./Profile.module.css";
const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.header}>
        <img src={image} alt="User avatar" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <div className={styles.statsContainer}>
        <div className={styles.statsItem}>
          <span className={styles.statLabel}>Followers</span>
          <span className={styles.statValue}>{stats.followers}</span>
        </div>
        <div className={styles.statsItem}>
          <span className={styles.statLabel}>Views</span>
          <span className={styles.statValue}>{stats.views}</span>
        </div>
        <div className={styles.statsItem}>
          <span className={styles.statLabel}>Likes</span>
          <span className={styles.statValue}>{stats.likes}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
