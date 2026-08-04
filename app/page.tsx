import SmoothScrollProvider from "./components/SmoothScrollProvider";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Faculty from "./components/Faculty";

export default function Home() {
  return (
    <>
      <SmoothScrollProvider>
        <main id="main">
          <Hero />
          <Marquee />
          <Faculty />
        </main>
      </SmoothScrollProvider>
    </>
  );
}
