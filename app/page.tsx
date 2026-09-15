import SmoothScrollProvider from "./components/SmoothScrollProvider";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Faculty from "./components/Faculty";

export default function Home() {
  return (
    <>
      <SmoothScrollProvider>
        <main id="main" style={{ width: "100%", position: "relative" }}>
          {/* 1. Hero Section */}
          <Hero />

          {/* Spacer between Hero and Marquee: 160px */}
          <div style={{ height: "160px", width: "100%", background: "#05080c", display: "block" }} aria-hidden="true" />

          {/* 2. Marquee & Mission/Vision Section */}
          <Marquee />

          {/* Spacer between Marquee and Faculty: 160px */}
          <div style={{ height: "160px", width: "100%", background: "#05080c", display: "block" }} aria-hidden="true" />

          {/* 3. Faculty Section */}
          <Faculty />

          {/* Spacer after Faculty, before Footer: 160px */}
          <div style={{ height: "160px", width: "100%", background: "#05080c", display: "block" }} aria-hidden="true" />
        </main>
      </SmoothScrollProvider>
    </>
  );
}
