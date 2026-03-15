import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import FeaturesSection from "../components/FeaturesSection";
import ProductShowcase from "../components/ProductShowcase";
import Testimonials from "../components/Testimonials";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <FeaturesSection />
      <ProductShowcase/>
      <Testimonials />
      <CTASection />
      <Footer />
    </>
  );
}

export default LandingPage;