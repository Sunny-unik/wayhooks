import React from 'react';
import Footer from 'components/footer/Footer';
import LandingNav from 'components/landingNav/LandingNav';
import Showcase from 'components/showcase/Showcase';

export default function LandingPage() {
  return (
    <div>
      <LandingNav />
      <Showcase />
      <Footer />
    </div>
  );
}
