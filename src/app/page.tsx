import Header from "../components/landing-page/header";
import Hero from "../components/landing-page/hero";

export default async function Home() {
  return (
    <main>
      <div className="radial-gradient pointer-events-none absolute top-0 right-0 h-[720px] w-[720px]" />
      <Header />
      <Hero />
    </main>
  );
}
