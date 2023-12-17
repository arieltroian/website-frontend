"use client";

import Image from "next/image";
import SocialLinksComponent from "@/components/ui/socialLinksComponent";

const HomePage = () => {
  return (
    <section className="flex flex-col items-center justify-center ">
      <Image
        src="/profile-image.png"
        height={0}
        width={0}
        alt="Imagem de perfil de Ariel Troian"
        sizes="100vw"
        className="h-auto w-52 rounded-full lg:w-56"
      />

      <h1 className="text-2xl text-center font-semibold mt-3">
        Desenvolvedor <br />
        <span className="text-primary font-bold"> Front-end </span>
      </h1>
      <p className="text-center mt-2 text-lg">
        Bem-vindos ao meu portfólio! Aqui, compartilho o meu progresso com a
        programação.
      </p>

      <div className="mt-4">
        <SocialLinksComponent />
      </div>
    </section>
  );
};

export default HomePage;
