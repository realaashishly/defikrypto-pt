"use client";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Wrapper from "@/components/wrapper";
import Navbar from "@/components/sections/navigation/navbar";
import Hero from "@/components/sections/hero/hero";
import About from "@/components/sections/about/about";
import Rotation from "@/components/sections/rotation/rotation";
import Service from "@/components/sections/services/service";
import Partner from "@/components/sections/partners/partner";
import Pricing from "@/components/sections/pricing/pricing";
import { Testimonial } from "@/components/sections/testinomials/testinomial";
import AppointmentBooking from "@/components/sections/appointment/appointment";
import FooterSection from "@/components/sections/footer/footer";

// LoadingScreen Component
function LoadingScreen({ onEnter }) {
  const btnRef = useRef(null);
  const screenRef = useRef(null);
  const videoRef = useRef(null);
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    // Hide the button initially and show after 15 sec
    const timer = setTimeout(() => {
      setVideoEnded(true);
    }, 15000); 

    return () => clearTimeout(timer);
  }, []);

  useGSAP(() => {
    if (videoEnded) {
      gsap.to(btnRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power2.out",
      });
    }
  }, [videoEnded]);

  return (
    <div ref={screenRef} className="fixed inset-0 z-50 flex items-center justify-center bg-black loading-screen">
      <video
        ref={videoRef}
        src="/loader/loader.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        aria-label="Loading animation"
      />
      {videoEnded && (
        <div className="absolute bottom-16 z-10">
          <button
            ref={btnRef}
            onClick={onEnter}
            className="px-6 py-3 border border-white/90 text-white rounded-md 
                  hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none
                  backdrop-blur-sm shadow-lg opacity-0 scale-90 z-40"
          >
            Enter Site
          </button>
        </div>
      )}
    </div>
  );
}

// HomePage Component
export default function HomePage() {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (entered) {
      gsap.to(".loading-screen", {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => setEntered(true),
      });
    }
  }, [entered]);

  return (
    <div>
      {/* Show the loading screen until user clicks "Enter" */}
      {!entered && <LoadingScreen onEnter={() => setEntered(true)} />}

      {/* Preload all content but keep it hidden until loader finishes */}
      <div className={`transition-opacity duration-700 ${entered ? "opacity-100" : "opacity-0"}`}>
        <Wrapper>
          <Navbar />
          <Hero />
          <About />
          <Rotation />
          <Service />
          <Partner />
          <Pricing />
          <Testimonial />
          <AppointmentBooking />
          <FooterSection />
        </Wrapper>
      </div>
    </div>
  );
}
