
import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/hero/hero";
import IMMERSE from "@/components/extras/immerse";
import Additional from "@/components/additional-services/additional";
import Footer from "@/components/footer/footer"
import Wellness from "@/components/extras/wellness";
import Oasis from "@/components/extras/oasis";
import Services from "@/components/extras/services";

export default function Home() {
  return (
    <div className="overflow-hidden font-manrope">
      <Navbar />
      <Hero />
      <Wellness />
      <Services />
      <Additional />
      <Oasis />
      <IMMERSE />
      <Footer />
    </div>
  );
}
