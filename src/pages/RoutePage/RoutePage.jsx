import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RoutePage.scss';

const RoutePage = () => {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);

  const monthsArray = [
    "january", "february", "march", "april", "may",
    "june", "july", "august", "september", "october",
    "november", "december"
  ];

  function getCurrentDate() {
    const month = new Date().getMonth();
    const dateNumber = new Date().getDate();

    // Delay the navigation after 4 seconds to give time for the animation
    setTimeout(() => {
      navigate(`/${monthsArray[month]}/${dateNumber}`);
    }, 4000); // 4 seconds to ensure animation completes
  }

  useEffect(() => {
    // Show content after a short delay to start the fade-in animation
    setTimeout(() => {
      setShowContent(true);
    }, 500); // 0.5-second delay before showing content

    // Re-route after the animation completes
    getCurrentDate();
  }, []);

  return (
    <div className={`route-page-container ${showContent ? 'fade-in' : ''}`}>
      <h1 className="app-name">GoalKeep</h1>
      <p className="tagline">Achieve your goals, your way</p>
    </div>
  );
};

export default RoutePage;
