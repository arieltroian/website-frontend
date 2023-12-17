const AboutPage = () => {
  return (
    <section
      id="sobre"
      className="flex flex-col flex-wrap items-center justify-center"
    >
      <div className="flex flex-col flex-wrap gap-y-8 mt-2 md:grid md:grid-cols-2 md:gap-x-8 lg:gap-x-16">
        <div>
          <h1 className="text-2xl font-semibold mb-4">
            Conheça um pouco mais sobre mim
          </h1>
          <p className="text-lg">
            Olá, me chamo Ariel Troian, sou uma pessoa transgênero e atualmente
            tenho 22 anos. Tive meu primeiro contato com programação no final de
            2022, quando participei de um curso livre. Lá, aprendi o básico de
            HTML e CSS, mas já foi suficiente para despertar em mim o fascínio
            pela área. <br />
            <br />
            E em 2023, iniciei de fato os estudos. Já realizei projetos básicos,
            como relógio digital, gerador aleatório de senhas e calculadora.
            Porém, resolvi me desafiar e criar projetos mais complexos! Agora,
            estou desenvolvendo um Painel de Administração de clientes e
            produtos, tenho aprendido muito e pretendo concluí-lo em breve.{" "}
            <br />
            <br />
            Sou um curioso nato e estou sempre buscando respostas e
            aprendizados, então lhe convido a conhecer alguns dos meus recentes
            projetos! <br />
          </p>
        </div>

        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold mb-4">
            Principais tecnologias
          </h1>
          <ul className="flex flex-wrap gap-2 lg:gap-4">
            <li className="p-2 lg:p-3 bg-secondary rounded-2xl text-xs lg:text-base font-semibold text-textdark">
              JavaScript
            </li>
            <li className="p-2 lg:p-3 bg-secondary rounded-2xl text-xs lg:text-base font-semibold text-textdark">
              ReactJS
            </li>
            <li className="p-2 lg:p-3 bg-secondary rounded-2xl text-xs lg:text-base font-semibold text-textdark">
              NextJS
            </li>
            <li className="p-2 lg:p-3 bg-secondary rounded-2xl text-xs lg:text-base font-semibold text-textdark">
              Node
            </li>
            <li className="p-2 lg:p-3 bg-secondary rounded-2xl text-xs lg:text-base font-semibold text-textdark">
              TypeScript
            </li>
            <li className="p-2 lg:p-3 bg-secondary rounded-2xl text-xs lg:text-base font-semibold text-textdark">
              Tailwind
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
