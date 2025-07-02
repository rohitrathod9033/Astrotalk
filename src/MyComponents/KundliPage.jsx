import React from 'react';
import HeroSection from './HeroSection';
import ComplimentaryServices from './ComplimentaryServices';
import TodaysHoroscope from './TodaysHoroscope';
import FreeKundliOnline from './FreeKundliOnline';
import KundliForm from './KundliForm';

const KundliPage = () => {
  return (
    <>
      <HeroSection />
      <ComplimentaryServices />
      <TodaysHoroscope />
      <FreeKundliOnline />
      <KundliForm />
    </>
  );
};

export default KundliPage;