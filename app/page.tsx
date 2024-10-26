"use client"

import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { Featured } from "@/components/Featured";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Portifolio } from "@/components/Portifolio";
import { Services } from "@/components/Services";
import { Techs } from "@/components/Techs";
import { Testimonials } from "@/components/Testimonials";
import AOS from "aos/"
import "aos/dist/aos.css"
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, [])

  return (
      <main className="max-w-[1440px] mx-auto">
        <Header/>
        <Hero/>
        <Featured />
        <Services/>
        <Portifolio />
        <Techs />
        <Testimonials />
        <FAQ />
        <About />
        <Contact />
        <Footer />
      </main>
  );
}