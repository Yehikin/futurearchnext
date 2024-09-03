import Image from "next/image";

export default function MainFirst() {
  return (
    <section className="bg-[url('/img/WEBP/section-main.webp')] bg-no-repeat bg-cover h-screen w-screen">
      <Image
        className="fixed top-0 mt-12 left-1/2 transform -translate-x-1/2"
        src={"/img/logo.svg"}
        width={323}
        height={80}
        alt="logo"
      />
    </section>
  );
}
