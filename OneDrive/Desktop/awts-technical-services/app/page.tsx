import CtaBanner from "@/components/CTABanner";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />
      
      {/* Dynamic Services */}
      <Services />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ /> 

      {/* Call to Action Banner */}
      <CtaBanner title="Ready to Upgrade Your Space in Dubai?" description="Contact Alwadi Almudea Technical Services today for a free consultation and quick quote for Painting, Maintenance, Tile, or Carpentry work." />

      {/* Footer Section */}  
      <Footer />
    </div>
  );
}