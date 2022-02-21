import React from 'react';
import HomeBackground from '../components/HomeBackground';
import HomeHeader from '../components/HomeHeader';
import HomeContent from '../components/HomeContent';
import '../style/pages/homePage.scss';

const HomePage = () => {
  return (
    <div className="homepage">
      <HomeBackground />
      <HomeHeader />
      <HomeContent />
    </div>
  );
};

export default HomePage;
