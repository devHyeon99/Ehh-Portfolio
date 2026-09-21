import { FiArrowUpRight } from "react-icons/fi";
import { GITHUB_URL, external } from "../../lib/constants";
import { container } from "../../lib/styles";
import { ThemeToggle } from "./ThemeToggle";
import { Wordmark } from "./Wordmark";

const navLink =
  "flex items-center gap-1 text-[0.8rem] font-medium hover:text-brand md:text-[0.875rem]";

export function SiteHeader() {
  return (
    <header className='sticky top-0 z-20 border-b border-line bg-paper/95 backdrop-blur-[14px]'>
      <div
        className={`${container} flex h-[66px] items-center gap-4 md:h-20 md:gap-6 lg:gap-12`}
      >
        <Wordmark label='엄현호 포트폴리오 홈' />
        <nav
          className='ml-auto flex items-center gap-[17px] md:gap-[30px]'
          aria-label='주 메뉴'
        >
          <a
            className={`${navLink} hidden md:flex`}
            href={GITHUB_URL}
            {...external}
          >
            GitHub <FiArrowUpRight />
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
