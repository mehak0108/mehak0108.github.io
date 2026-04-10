import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { Leadership } from '@/components/sections/Leadership';
import { Blog } from '@/components/sections/Blog';
import { Achievements } from '@/components/sections/Achievements';
import { FunFacts } from '@/components/sections/FunFacts';
import { Contact } from '@/components/sections/Contact';
import { Navbar } from '@/components/ui/Navbar';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Leadership />
      <Blog />
      <Achievements />
      <FunFacts />
      <Contact />
    </main>
  );
}
