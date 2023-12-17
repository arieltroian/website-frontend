"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Code2, Eye } from "lucide-react";
import Link from "next/link";
import ExternalLinkComponent from "@/components/ui/externalLinkComponent";

const DashboardCardComponent = () => {
  return (
    <div className=" pb-2 lg:pb-4 flex flex-col bg-card rounded-lg items-center ">
      <Image
        src="/dashboard-image.png"
        height={0}
        width={0}
        sizes="100vw"
        alt="Imagem de mockup ilustrando um projeto de painel de controle."
        className="h-auto w-full rounded-xl"
      />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-semibold text-center">
          Painel de Administração
        </h1>
        <p className="text-center text-lg px-2">
          🚧 Em andamento! 🚧 Painel de Administração de clientes e produtos, o
          intuito deste projeto é que o usuário possa adicionar, editar e
          excluir os produtos e clientes. Bem como monitorar as métricas de
          pagamentos a cada semana. <br />
        </p>
        <span className="font-semibold mt-4 text-lg">
          Tecnologias utilizadas:
        </span>
        <ul className="flex flex-wrap gap-2 items-center justify-center mt-3">
          <li className="p-2 lg:p-2 bg-secondary text-textdark rounded-2xl text-xs lg:text-base">
            JavaScript
          </li>
          <li className="p-2 lg:p-2 bg-secondary text-textdark rounded-2xl text-xs lg:text-base">
            NextJS
          </li>
          <li className="p-2 lg:p-2 bg-secondary text-textdark rounded-2xl  text-xs lg:text-base">
            ReactJS
          </li>
        </ul>

        <div className="flex gap-3 mt-4 items-center">
          <ExternalLinkComponent to="https://github.com/arieltroian/Painel-de-Controle">
            <Button variant="outline" size="default" className="flex gap-2">
              <Code2 /> Code
            </Button>
          </ExternalLinkComponent>

          <ExternalLinkComponent to="https://painel-de-administracao.netlify.app/dashboard">
            <Button variant="outline" size="default" className="flex gap-2 ">
              <Eye />
              Preview
            </Button>
          </ExternalLinkComponent>
        </div>
      </div>
    </div>
  );
};

export default DashboardCardComponent;
