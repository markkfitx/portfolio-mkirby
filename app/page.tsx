import Hero from "@/app/components/landing/hero"
import ServicesHook from "./components/landing/service-hook";
import SkillsetNav from "./components/landing/skillset-navigation";
import About from "./components/landing/about";

export default function Home({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <div className="w-full flex flex-col items-center justify-center xl:gap-150 lg:gap-100 md:gap-50 gap-25 xl:mb-100 lg:mb-75 md:mb-50 mb-25">
      <Hero/>
      <ServicesHook id="services" />
      <About id="about"/>
      <SkillsetNav />
    </div>
  );
}
