"use client";
import About from "@/components/sections/about/about";
import AppointmentBooking from "@/components/sections/appointment/appointment";
import FooterSection from "@/components/sections/footer/footer";
import Hero from "@/components/sections/hero/hero";
import Navbar from "@/components/sections/navigation/navbar";
import Partner from "@/components/sections/partners/partner";
import Pricing from "@/components/sections/pricing/pricing";
import Rotation from "@/components/sections/rotation/rotation";
import Service from "@/components/sections/services/service";
import { Testimonial } from "@/components/sections/testinomials/testinomial";
import Wrapper from "@/components/wrapper";

// Loading Screen Component
// function LoadingScreen({ onEnter }) {
//   const btnRef = useRef(null);
//   const screenRef = useRef(null);
//   const videoRef = useRef(null);
//   const [showButton, setShowButton] = useState(false);

//   // Show button after 15 seconds
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowButton(true);
//     }, 15000); // 15 seconds delay

//     return () => clearTimeout(timer);
//   }, []);

//   // GSAP animation for button
//   useGSAP(() => {
//     if (showButton) {
//       gsap.to(btnRef.current, {
//         opacity: 1,
//         scale: 1,
//         duration: 1.5,
//         ease: "power2.out",
//       });
//     }
//   }, [showButton]);

//   return (
//     <div ref={screenRef} className="fixed inset-0 z-50 flex items-center justify-center bg-black">
//       <video
//         ref={videoRef}
//         src="/loader/loader.mp4"
//         autoPlay
//         muted
//         playsInline
//         preload="auto"
//         className="w-full h-full object-cover absolute"
//         aria-label="Loading animation"
//         onEnded={() => setShowButton(true)} // Show button when video ends
//       />

//       {showButton && (
//         <div className="absolute bottom-16 z-10">
//           <Button
//             ref={btnRef}
//             onClick={onEnter}
//             variant="outline"
//             className="px-6 py-3 text-white border border-white rounded-md opacity-0 scale-90 transition-all duration-300 hover:scale-105 active:scale-95"
//           >
//             Enter Site
//           </Button>
//         </div>
//       )}
//     </div>
//   );
// }

// HomePage Component
export default function HomePage() {
  // const [entered, setEntered] = useState(false);

  // useEffect(() => {
  //   if (entered) {
  //     gsap.to(".loading-screen", {
  //       opacity: 0,
  //       duration: 0.8,
  //       ease: "power2.out",
  //       onComplete: () => setEntered(true),
  //     });
  //   }
  // }, [entered]);

  return (
    <div>
      {/* Show the loading screen until user clicks "Enter" */}
      {/* {!entered && <LoadingScreen onEnter={() => setEntered(true)} />} */}

      {/* Load the main content in the background */}
      {/* <div className={`transition-opacity duration-700 ${entered ? "opacity-100" : "opacity-0"}`}> */}
      <Wrapper>
        <Navbar />
        <Hero />
        <About />
        <Rotation />
        <Partner />
        <Service />
        <Partner />
        <Pricing />
        <Testimonial />
        <AppointmentBooking />
        <FooterSection />
      </Wrapper>
    </div>
    // </div>


  );
}
