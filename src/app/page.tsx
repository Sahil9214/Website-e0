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
      <Herosection />
      <AboutUs/>
   
      <OurTeam />
      <Services />
      <WhyChooseus/>
      <Pricing />
      <Contactus/>
      <FAQ/>
      <CtaAction/>
    </main>
  );
}
