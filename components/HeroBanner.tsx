import Image from "next/image"

export default function HeroBanner() {
  return (
    <section className="w-full mt-16">
      <div>
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/section-IXiiMiboSL6iIjPw40QdY6aECp0gtR.png"
          alt="CHASE HERO Banner"
          width={2000}
          height={600}
          className="w-full h-auto"
          priority
        />
      </div>
    </section>
  )
}

