import { NotFoundPage } from "./components/pages/NotFoundPage";
import { HomePage } from "./components/pages/HomePage";
import { ProjectPage } from "./components/pages/ProjectPage";
import { SiteFooter } from "./components/layout/SiteFooter";
import { SiteHeader } from "./components/layout/SiteHeader";
import { SkipLink } from "./components/layout/SkipLink";
import { PrintView } from "./components/print/PrintView";
import { useRoute } from "./hooks/useRoute";

function App() {
  const { project, notFound } = useRoute();

  return (
    <>
      <div className='print:hidden'>
        <SkipLink />
        <SiteHeader />
        <main id='main-content' tabIndex={-1}>
          {notFound ? (
            <NotFoundPage />
          ) : project ? (
            <ProjectPage project={project} />
          ) : (
            <HomePage />
          )}
        </main>
        <SiteFooter />
      </div>
      <PrintView />
    </>
  );
}

export default App;
