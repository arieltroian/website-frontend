import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Code2, Eye } from "lucide-react";
import Link from "next/link";

const PortfolioCardComponent = () => {
  return (
    <div className=" pb-2 lg:pb-4 flex flex-col bg-card rounded-lg items-center ">
      <Image
        src="/portfolio-image.png"
        height={0}
        width={0}
        sizes="100vw"
        alt="Imagem de mockup ilustrando um projeto de portfólio."
        className="h-auto w-full rounded-xl"
      />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-semibold text-center">
          Portfólio Pessoal
        </h1>
        <p className="text-center text-lg px-2">
          Portfólio pessoal, para demonstrar minhas habilidades e registrar o
          meu progresso com a programação. <br />
        </p>
        <span className="font-semibold mt-4 text-lg">
          Tecnologias utilizadas:
        </span>
        <ul className="flex flex-wrap gap-2 items-center justify-center mt-3">
          <li className="p-2 lg:p-2 bg-secondary text-textdark rounded-2xl text-xs lg:text-base">
            TypeScript
          </li>
          <li className="p-2 lg:p-2 bg-secondary text-textdark rounded-2xl text-xs lg:text-base">
            Tailwind CSS
          </li>
          <li className="p-2 lg:p-2 bg-secondary text-textdark rounded-2xl  text-xs lg:text-base">
            NextJS
          </li>
          <li className="p-2 lg:p-2 bg-secondary text-textdark rounded-2xl  text-xs lg:text-base">
            ReactJS
          </li>
        </ul>

        <div className="flex gap-3 mt-4 items-center">
          <Link href="">
            <Button variant="outline" size="default" className="flex gap-2">
              <Code2 /> Code
            </Button>
          </Link>

          <Link href="">
            <Button variant="outline" size="default" className="flex gap-2 ">
              <Eye />
              Preview
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCardComponent;
