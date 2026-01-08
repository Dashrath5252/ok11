import Image from "next/image";

export default function Home() {
  return (
    <main style={{ padding: 40, textAlign: "center" }}>

      {/* ICON */}
      <Image
        src="/ok11icon.webp"
        alt="OK11 Game App Icon"
        width={180}
        height={180}
        priority
      />

      <h1>OK11 Game</h1>

      {/* GALLERY IMAGE */}
      <Image
        src="/ok111.webp"
        alt="OK11 Game Screenshot"
        width={1024}
        height={1820}
        sizes="(max-width: 768px) 50vw, 500px"
        placeholder="blur"
        blurDataURL="/ok111.webp"
      />

      <Image
        src="/ok112.webp"
        alt="OK11 Game Screenshot"
        width={1024}
        height={1820}
        sizes="(max-width: 768px) 50vw, 500px"
        placeholder="blur"
        blurDataURL="/ok112.webp"
      />

      <Image
        src="/ok113.webp"
        alt="OK11 Game Screenshot"
        width={1024}
        height={1820}
        sizes="(max-width: 768px) 50vw, 500px"
        placeholder="blur"
        blurDataURL="/ok113.webp"
      />

      <Image
        src="/ok114.webp"
        alt="OK11 Game Screenshot"
        width={1024}
        height={1820}
        sizes="(max-width: 768px) 50vw, 500px"
        placeholder="blur"
        blurDataURL="/ok114.webp"
      />

    </main>
  );
}
