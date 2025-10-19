import Hero from "@/app/components/hero/hero"

export default function Home({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <Hero/>
  );
}
