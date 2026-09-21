import { FiLayers } from "react-icons/fi";
import type { Project } from "../../data/types";
import { eyebrow } from "../../lib/styles";

const overviewText =
  "text-[0.925rem] text-copy md:text-[0.975rem] print:text-[10pt] print:leading-[1.8]";

interface ProjectOverviewProps {
  project: Project;
}

export function ProjectOverview({ project }: ProjectOverviewProps) {
  return (
    <div className='grid grid-cols-1 gap-5 pb-9 md:pb-16 print:gap-[15px] print:pb-[25px]'>
      <div>
        <p className={`${eyebrow} text-[0.75rem] text-copy`}>CONTRIBUTION</p>
        <h2 className='mt-2 text-[1.3rem] tracking-[-0.04em] md:text-[1.5rem] print:text-[16pt]'>
          제가 맡은 일
        </h2>
      </div>
      <div>
        <p className={overviewText}>{project.scope}</p>
        <section className='mt-[18px] border-l-[3px] border-edge bg-surface-sunken p-[18px] md:px-6 md:py-[22px] print:break-inside-avoid print:bg-[#f0f1f4] print:p-[15px]'>
          <h3 className='mb-2.5 flex items-center gap-2 text-[0.9rem] text-copy-strong'>
            <FiLayers />
            주요 구현
          </h3>
          <ul className='my-0 list-disc marker:text-faint [&>li:first-child]:mt-0 [&>li:last-child]:mb-0'>
            {project.contributions.map((item) => (
              <li className={overviewText} key={item}>
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
