import DashboardCardComponent from "./components/cardDashboardProject";
import PortfolioCardComponent from "./components/cardPortfoiloProject";

const ProjectsPage = () => {
  return (
    <section id="projetos" className="lg:pt-10 pt-4 ">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-semibold">Projetos</h1>
        <p className="text-lg mb-4 font-semibold">
          Conheça meus projetos em destaque
        </p>
      </div>

      <div className="flex flex-col flex-wrap lg:mx-24 gap-y-8 mt-2">
        <DashboardCardComponent />
        <PortfolioCardComponent />
      </div>
    </section>
  );
};

export default ProjectsPage;
