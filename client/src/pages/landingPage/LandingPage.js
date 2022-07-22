import React from 'react';
import LandingNav from "../../components/landingNav/LandingNav";
import Showcase from "../../components/showcase/Showcase";
import Plans from "../../components/plans/Plans";

export default function LandingPage() {
  return (
    <div>
      <LandingNav />
      <Showcase />
      <Plans />
    </div>
  );
}