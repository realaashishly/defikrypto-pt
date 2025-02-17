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

export default function Home() {
  return (
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

  );
}
