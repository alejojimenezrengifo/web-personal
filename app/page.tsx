import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { ExperienceEducationSkills } from '@/components/sections/ExperienceEducationSkills';
import { Projects } from '@/components/sections/Projects';
import { Testimonials } from '@/components/sections/Testimonials';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-navy-900 text-sky-100 flex flex-col selection:bg-accent selection:text-white">
      <Header />
      <main className="flex-grow overflow-x-hidden">
        <Hero />
        <About />
        <ExperienceEducationSkills />
        <Projects />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
