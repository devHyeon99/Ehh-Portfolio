import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { projects } from "../../data/projects";
import { GITHUB_URL, external } from "../../lib/constants";
import { container, eyebrowMuted, textLink } from "../../lib/styles";
import { ProjectRow } from "../project/ProjectRow";

export function HomePage() {
  return (
    <>
      <section
        className={`${container} grid grid-cols-1 gap-8 pb-14 pt-[38px] md:grid-cols-[1fr_1.65fr] md:gap-[35px] md:py-16 lg:gap-[70px]`}
        id='about'
      >
        <div>
          <p className={eyebrowMuted}>ABOUT ME</p>
          <h1 className='mt-[14px] text-[1.7rem] tracking-[-0.04em] md:mt-5 md:text-[2rem]'>
            엄현호
            <span className='mt-2 block font-mono text-[0.85rem] font-normal tracking-normal text-muted'>
              Frontend Developer
            </span>
          </h1>
        </div>
        <div>
          <h2 className='mb-[22px] text-[1.35rem] leading-[1.65] tracking-[-0.035em] md:text-[1.6rem]'>
            사용자의 관점에서 문제를 풀고,
            <br />
            팀과 함께 목표에 도달합니다.
          </h2>
          <p className='mb-4 text-[0.925rem] text-copy-soft md:text-[1rem]'>
            Nexon Open API를 활용한 메이플스토리M 검색 서비스 '메엠지지'를 개발
            및 운영하며, 출시 후에도 사용자 피드백에 따른 UI/UX 재구성, 성능
            최적화, 구조 리팩토링을 이어가며 서비스를 개선해 왔습니다.
          </p>
          <p className='mb-4 text-[0.925rem] text-copy-soft md:text-[1rem]'>
            정제되지 않은 데이터를 사용자가 한눈에 이해할 수 있는 화면으로
            만드는 과정에 관심이 많습니다. 자주 찾는 정보를 먼저 보여주고, 작은
            인터랙션까지 사용 흐름에 맞게 설계하며 더 나은 사용자 경험을
            고민합니다.
          </p>
          <p className='mb-4 text-[0.925rem] text-copy-soft md:text-[1rem]'>
            팀에서는 목표와 진행 상황을 꾸준히 공유하며 함께 결과를 만들어가는
            과정을 중요하게 생각합니다. 팀장을 맡아 프로젝트를 이끌며 데일리
            스크럼과 스프린트 회고를 통해 의견을 나누고 목표를 맞춰왔습니다.
          </p>
          <a className={textLink} href={GITHUB_URL} {...external}>
            <FiGithub />
            GitHub <FiArrowUpRight />
          </a>
        </div>
      </section>
      <section
        className={`${container} border-t border-line pb-[58px] pt-[38px] md:pb-24 md:pt-16`}
        id='projects'
      >
        <div className='mb-6 flex items-end justify-between md:mb-[34px]'>
          <div>
            <p className={eyebrowMuted}>SELECTED PROJECTS</p>
            <h2 className='mt-2.5 text-[1.5rem] tracking-[-0.04em] md:text-[1.9rem]'>
              만든 것과, 바꾼 것.
            </h2>
          </div>
          <span className='font-mono text-[0.65rem] text-muted md:text-[0.75rem]'>
            03 PROJECTS
          </span>
        </div>
        <div className='border-t border-ink'>
          {projects.map((project) => (
            <ProjectRow key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
