import Image from "next/image"

export default function Marquee() {
  return (
    <div
      className="mt-16 py-8 overflow-hidden"
      style={{
        background: "linear-gradient(176deg, #ebbb0f, #866a05)",
        "--marquee-duration": "25s",
      }}
    >
      <div
        className="flex items-center gap-24 animate-marquee"
        style={{ animationDuration: "var(--marquee-duration)" }}
      >
        {/* Repeat the pattern multiple times to ensure no gaps */}
        {[...Array(10)].map((_, index) => (
          <div key={index} className="flex items-center gap-48">
            <span className="text-7xl font-bold text-[#070735]">$HERO</span>
            <Image
              src="/marquee-S91VH7nizOgqwb6F2J2PH5Ewhw1nzS.png"
              alt="CHASE HERO"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

