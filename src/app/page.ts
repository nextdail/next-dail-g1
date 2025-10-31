import HeroSection from '../components/home/HeroSection';
import BrandsSection from '../components/home/BrandsSection';
import StatsSection from '../components/home/StatsSection';
import ServicesPreview from '../components/home/ServicesPreview';
import WhyChooseSection from '../components/home/WhyChooseSection';
import ProcessSection from '../components/home/ProcessSection';
import TestimonialsSection from '../components/home/TestimonialsSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandsSection />
      <StatsSection />
      <ServicesPreview />
      <WhyChooseSection />
      <ProcessSection />
      <TestimonialsSection />
    </>
  );
}
