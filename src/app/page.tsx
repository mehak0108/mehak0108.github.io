import { Navbar } from '@/components/ui/Navbar';
import { About } from '@/components/sections/About';
import { Academics } from '@/components/sections/Academics';
import { Experience } from '@/components/sections/Experience';
import { AIAgents } from '@/components/sections/AIAgents';
import { Projects } from '@/components/sections/Projects';
import { Competitions } from '@/components/sections/Competitions';
import { Life } from '@/components/sections/Life';
import { Footer } from '@/components/ui/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <About />
        <Academics />
        <Experience />
        <AIAgents />
        <Projects />
        <Competitions />
        <Life />
      </main>
      <Footer />
    </>
  );
}
