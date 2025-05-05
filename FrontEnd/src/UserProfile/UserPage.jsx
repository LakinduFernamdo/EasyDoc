import React, { useEffect, useState } from 'react';
import axios from 'axios';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import UserCard from './UserCard.jsx';
import Hero from "../UserHero/Hero.jsx";
import Selection from "../UserFeature/Selection.jsx";
import Fotter from '../FooterComponent/UserFooter.jsx';

function UserPage() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const viewData = async () => {
      const token = localStorage.getItem('token'); // Get token from storage

      if (!token) {
        console.warn("No token found. User not authenticated.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get('http://localhost:5000/auth/user-account', {
          headers: {
            Authorization: `Bearer ${token}`, // Include token in header
          },
        });

        setUserData(response.data.user); // Adjust based on your backend response structure
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error.response?.data || error.message);
        setLoading(false);
      }
    };

    viewData();
  }, []);

  return (
    <div>
      <Hero />
      {loading ? (
        <p>Loading...</p>
      ) : userData ? (
        <UserCard 
          Full_name={`${userData.F_name} ${userData.L_name}`}
          P_ID={userData.P_ID}
          Phone={userData.Phone}
          Email={userData.Email}
          DOB={userData.DOB}
        />
      ) : (
        <p>No user data available</p>
      )}
      <Selection />
      <Fotter />
    </div>
  );
}

export default UserPage;
