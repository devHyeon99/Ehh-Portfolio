import { FiCheck } from "react-icons/fi";
import type { CaseStudy } from "../../data/types";
import { caseParagraph } from "../../lib/styles";
import { CodeBlock } from "../ui/CodeBlock";
import { EvidenceImage } from "../ui/EvidenceImage";
import { Paragraphs } from "../ui/Paragraphs";

interface CaseArticleProps {
  item: CaseStudy;
  index: number;
  print?: boolean;
  projectId: string;
}

export function CaseArticle({
  item,
  index,
  print = false,
  projectId,
}: CaseArticleProps) {
  const samples = Array.isArray(item.code) ? item.code : [item.code];

  return (
    <article
      className="mb-[42px] scroll-mt-[86px] border-t border-line pt-6 md:mb-16 md:scroll-mt-[110px] md:pt-[34px] print:mb-5 print:break-before-page print:pt-[15px]"
      id={`${print ? "print-" : ""}${projectId}-${item.id}`}
    >
      <div className="mb-[15px] flex items-center gap-3 text-[0.7rem] text-muted md:gap-[18px] md:text-[0.75rem]">
        <span className="font-mono tracking-[0.07em] text-brand">
          CASE {String(index + 1).padStart(2, "0")}
        </span>
        <span>{item.category}</span>
      </div>
      <h3 className="mb-[22px] max-w-[760px] text-[1.4rem] leading-[1.55] tracking-[-0.045em] md:mb-7 md:text-[1.65rem] print:text-[19pt]">
        {item.title}
      </h3>
      <div>
        <section className="mb-6 print:mb-[15px]">
          <h4 className="mb-2.5 flex items-center gap-2.5 text-[0.85rem] font-semibold md:text-[0.9rem]">
            <span className="font-mono text-[0.7rem] text-faint">01</span>
            문제
          </h4>
          <Paragraphs
            className={`${caseParagraph} text-copy`}
            text={item.problem}
          />
        </section>
        <section className="mb-6 print:mb-[15px]">
          <h4 className="mb-2.5 flex items-center gap-2.5 text-[0.85rem] font-semibold md:text-[0.9rem]">
            <span className="font-mono text-[0.7rem] text-faint">02</span>
            해결
          </h4>
          <Paragraphs
            className={`${caseParagraph} text-copy`}
            text={item.solution}
          />
        </section>
        {samples.map((sample) => (
          <CodeBlock key={sample.url} sample={sample} print={print} />
        ))}
        <section className="mt-7 border-l-[3px] border-brand bg-brand-tint p-[18px] md:px-6 md:py-[22px] print:break-inside-avoid print:bg-[#edf2ff] print:p-[15px]">
          <h4 className="mb-2.5 flex items-center gap-2 text-[0.9rem] text-brand-strong">
            <FiCheck />
            결과
          </h4>
          <Paragraphs
            className={`${caseParagraph} text-brand-copy`}
            text={item.result}
          />
        </section>
        {item.image && (
          <EvidenceImage src={item.image} caption={item.caption} />
        )}
      </div>
    </article>
  );
}
