import { useEffect, useState } from "react";
import { FiArrowUpRight, FiCheck, FiCode, FiCopy } from "react-icons/fi";
import type { CodeSample } from "../../data/types";
import { external } from "../../lib/constants";

interface CodeBlockProps {
  sample: CodeSample;
  print?: boolean;
}

export function CodeBlock({ sample, print = false }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(sample.code);
      setCopied(true);
      setError("");
    } catch {
      setError("복사하지 못했습니다. 코드를 직접 선택해 주세요.");
    }
  };

  return (
    <div className='my-7 overflow-hidden rounded-lg border border-code-edge bg-code-bg text-code-text print:my-5 print:break-inside-avoid print:border-[#bbb] print:bg-[#f2f4f7] print:text-[#172030]'>
      <div className='flex items-center justify-between gap-4 border-b border-code-line bg-code-bar p-3 md:px-[18px] md:py-[13px] print:border-[#ccc] print:bg-[#e7ebf0] print:text-[#172030]'>
        <span className='flex min-w-0 items-center gap-[9px] font-mono text-[0.65rem] md:text-[0.75rem] [overflow-wrap:anywhere]'>
          <FiCode />
          {sample.file.split("/").pop()}
        </span>
        {!print && (
          <button
            className='flex items-center gap-[7px] whitespace-nowrap border-0 bg-transparent text-[0.7rem] text-[#bbc7e0] md:text-[0.75rem]'
            onClick={copy}
            aria-label='코드 복사'
          >
            {copied ? <FiCheck /> : <FiCopy />}
            <span>{copied ? "복사됨" : "복사"}</span>
          </button>
        )}
      </div>
      <pre
        className='m-0 overflow-x-auto py-5 font-mono text-[0.75rem] leading-[1.9] [tab-size:2] lg:text-[0.8rem] print:overflow-visible print:whitespace-pre-wrap print:py-3 print:text-[8pt]'
        tabIndex={print ? undefined : 0}
        aria-label={`${sample.file} 코드 발췌`}
      >
        <code>
          {sample.code.split("\n").map((line, i) => (
            <span
              className='flex min-w-max pr-5 print:min-w-0 print:whitespace-pre-wrap print:[overflow-wrap:anywhere]'
              key={i}
            >
              <span
                className='mr-3 inline-block w-8 flex-[0_0_2rem] select-none text-right text-code-num md:mr-5 md:w-12 md:flex-[0_0_3rem] print:mr-3 print:w-[25px] print:flex-[0_0_25px]'
                aria-hidden='true'
              >
                {sample.line + i}
              </span>
              <span
                className={`print:min-w-0 ${
                  line.trim().startsWith("//")
                    ? "text-code-comment print:text-[#556075]"
                    : ""
                }`}
              >
                {line || " "}
              </span>
            </span>
          ))}
        </code>
      </pre>
      {error && (
        <p className='px-[18px] py-2.5 text-[0.8rem] text-[#ffd1bf]' role='status'>
          {error}
        </p>
      )}
      <div className='flex justify-between gap-[14px] border-t border-[#303748] px-3 py-2.5 text-[0.65rem] text-code-dim md:px-[18px] md:py-3 md:text-[0.7rem] print:border-[#ccc] print:bg-[#f2f4f7] print:text-[#555]'>
        <span>실제 소스 발췌 · 일부 문맥 생략</span>
        <a
          className='flex items-center gap-[5px] whitespace-nowrap text-code-link print:text-[#2343a3]'
          href={sample.url}
          {...external}
        >
          전체 코드 <FiArrowUpRight />
        </a>
      </div>
      <span className='sr-only' role='status'>
        {copied ? "코드가 복사되었습니다." : ""}
      </span>
    </div>
  );
}
