import Hero from "@/app/components/landing/hero"
import ServicesHook from "./components/landing/service-hook";
import SkillsetNav from "./components/landing/skillset-navigation";

export default function Home({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <div className="w-full flex flex-col items-center justify-center xl:gap-150">
      <Hero/>
      <ServicesHook />
      <SkillsetNav />
    </div>
  );
}
