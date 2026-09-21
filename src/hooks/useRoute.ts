import { useEffect } from "react";
import { projects } from "../data/projects";
import { useLocation } from "./useLocation";

export function useRoute() {
  const location = useLocation();
  const hashIndex = location.indexOf("#");
  const pathname = hashIndex === -1 ? location : location.slice(0, hashIndex);
  const hash = hashIndex === -1 ? "" : location.slice(hashIndex);

  const [, id, selectedCase] =
    pathname.match(/^\/project\/([^/]+)(?:\/([^/]+))?\/?$/) || [];
  const project = id ? projects.find((p) => p.id === id) : undefined;
  const isHome = pathname === "/";

  useEffect(() => {
    document.title = project
      ? `${project.name} - 엄현호 포트폴리오`
      : "엄현호 - 프론트엔드 포트폴리오";
    const frame = requestAnimationFrame(() => {
      const target =
        project && selectedCase
          ? document.getElementById(`${project.id}-${selectedCase}`)
          : isHome && hash
            ? document.getElementById(hash.slice(1))
            : null;
      if (target) target.scrollIntoView({ behavior: "instant" });
      else window.scrollTo({ top: 0, behavior: "instant" });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, project, selectedCase, isHome]);

  return { project, selectedCase, notFound: !isHome && !project };
}
