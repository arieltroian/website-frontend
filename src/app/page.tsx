import ContactPage from "./contato/contact";
import HomePage from "./home/home";
import ProjectsPage from "./projetos/projects";
import AboutPage from "./sobre/about";

export default function Home() {
  return (
    <main className="px-8 lg:px-40 md:px-28 flex flex-col">
      <HomePage />
      <AboutPage />
      <ProjectsPage />
      <ContactPage />
    </main>
  );
}
