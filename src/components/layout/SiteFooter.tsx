import { container } from "../../lib/styles";

export function SiteFooter() {
  return (
    <footer className={`${container} py-[25px] text-center md:pb-9 md:pt-7`}>
      <span className='font-mono text-[0.65rem] text-muted md:text-[0.7rem]'>
        © {new Date().getFullYear()} EOM HYEONHO
      </span>
    </footer>
  );
}
