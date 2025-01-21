import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Marquee from "@/components/Marquee"
import About from "@/components/About"
import Allocation from "@/components/Allocation"
import HowToBuy from "@/components/HowToBuy"
import Community from "@/components/Community"
import HeroBanner from "@/components/HeroBanner"
import FAQ from "@/components/FAQ"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen py-8">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Allocation />
      <HowToBuy />
      <Community />
      <HeroBanner />
      <FAQ />
      <Footer />
    </main>
  )
}

