import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Project from "@/components/Project";
import Certificates from "@/components/Certificates";
import Github from "@/components/Github";
import Interests from "@/components/Interests";
import Learning from "@/components/Learning";
import Contact from "@/components/Contact";
import SectionWrapper from "@/components/SectionWrapper";
import Background from "@/components/Background";

export default function Home() {
  return (
  <main className="bg-[#050816] min-h-screen text-white flex relative overflow-hidden">

  <Background />

  <Sidebar />

  <div className="flex-1 lg:ml-64 pt-24 lg:pt-8 p-4 md:p-6 lg:p-8 space-y-8">

  <SectionWrapper>
    <Hero />
  </SectionWrapper>

  <SectionWrapper>
    <About />
  </SectionWrapper>

  <SectionWrapper>
    <Skills />
  </SectionWrapper>

  <SectionWrapper>
    <Project />
  </SectionWrapper>

  <SectionWrapper>
    <Certificates />
  </SectionWrapper>

  <SectionWrapper>
    <Github />
  </SectionWrapper>

  <SectionWrapper>
    <div className="grid lg:grid-cols-2 gap-8">
      <Interests />
      <Learning />
    </div>
  </SectionWrapper>

  <SectionWrapper>
    <Contact />
  </SectionWrapper>

</div>
    </main>
  );

}
