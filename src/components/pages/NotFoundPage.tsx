import { FiArrowRight } from "react-icons/fi";
import { container, eyebrowMuted, textLink } from "../../lib/styles";

export function NotFoundPage() {
  return (
    <section className={`${container} pb-[160px] pt-[100px]`}>
      <p className={eyebrowMuted}>PROJECT NOT FOUND</p>
      <h1 className='my-5 text-[2rem]'>프로젝트를 찾을 수 없습니다.</h1>
      <a className={textLink} href='/#projects'>
        프로젝트 목록으로 <FiArrowRight />
      </a>
    </section>
  );
}
