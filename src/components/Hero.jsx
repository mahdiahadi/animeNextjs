import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <header className=" bg-hero bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0">
      <div className="flex flex-col flex-1 gap-10">
        <Image
          src="/logo.svg"
          alt="logo"
          height={101}
          width={96}
          className=" object-contain"
        />
        <h1 className="sm:text-6xl text-5xl text-white lg:max-w-lg font-bold leading-[120%]">
          Explore The <span className="red-gradient">Diverse Realms</span> of
          Anime Magic
        </h1>
      </div>
      <div className="lg:flex-1 relative w-full h-[50vh] justify-center">
        <Image src="/anime.png" alt="anime" className="object-contain" fill />
      </div>
    </header>
  );
};

export default Hero;
