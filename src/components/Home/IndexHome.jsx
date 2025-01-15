import { Hero } from "./Hero";
import { Partners } from "./Partners";
import { Story } from "./Story";
import { Mission } from "./Mission";
import { Certification } from "./Certification";
import Eai from "./Eai";
import React from "react";

function Index() {
  return (
    <>
      <Hero />
      <Partners />
      <Story />
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4 py-12">
        <Mission bgColor="bg-orange-500" textColor="text-white" />
        <Mission bgColor="bg-green-600" textColor="text-white" />
      </div>
      <Certification />
      <Eai />
    </>
  );
}

export default Index;
