import AboutUs from "@/component/AboutUs";
import { Herosection } from "@/component/HeroSection";
import { CompaniesLogo } from "@/component/CompaniesLogo";
import {OurTeam} from "@/component/OurTeam";
import {Services} from "@/component/Services";
import {WhyChooseus} from "@/component/WhyChooseus";
import {Pricing} from "@/component/Pricing";
import {FAQ} from "@/component/FAQ";
import {CtaAction} from "@/component/CtaAction";
import { Contactus } from "@/component/Contactus";

export default function Home() {
  return (
    <main>
      <section id="home" className="scroll-mt-24">
        <Herosection />
      </section>
      <section id="about-us" className="scroll-mt-24">
        <AboutUs />
      </section>
   
      <section id="what-we-do" className="scroll-mt-24">
        <OurTeam />
      </section>
      <section id="services" className="scroll-mt-24">
        <Services />
      </section>
      <WhyChooseus/>
      <Pricing />
      <Contactus/>
      <FAQ/>
      <CtaAction/>
    </main>
  );
}
