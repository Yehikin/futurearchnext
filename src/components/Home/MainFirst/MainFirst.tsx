import Image from "next/image";

export default function MainFirst() {
  return (
    <section className="relative h-screen w-screen">
      <video
        className="absolute top-0 left-0 h-full w-full object-cover"
        src="/img/main.webm"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="relative z-10">
        <Image
          className="fixed top-0 mt-12 left-1/2 transform -translate-x-1/2"
          src="/img/logo.svg"
          width={323}
          height={80}
          alt="logo"
        />
      </div>
    </section>
  );
}
