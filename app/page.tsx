import About from '@/components/data/About';
import DownloadApp from '@/components/data/DownloadApp';
import Feature from '@/components/data/Feature';
import Footer from '@/components/data/Footer';
import Hero from '@/components/data/Hero';
import HowItWorks from '@/components/data/HowItWorks';
import ImageCarousel from '@/components/data/ImageCarousel';
import Navbar from '@/components/data/Navbar';
import TestimonialCarousel from '@/components/data/TestimonialCarousel';

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Feature />
      <ImageCarousel />
      <DownloadApp />
      <TestimonialCarousel />
      <Footer />
    </>
  );
};
export default page;
