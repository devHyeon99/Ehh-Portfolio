interface ParagraphsProps {
  /** 배열이면 항목마다 문단을 나눠 그린다. */
  text: string | string[];
  className?: string;
}

export function Paragraphs({ text, className = "" }: ParagraphsProps) {
  const items = Array.isArray(text) ? text : [text];

  return (
    <>
      {items.map((item, i) => (
        <p
          className={`${className} ${i > 0 ? "mt-[14px] print:mt-[10px]" : ""}`}
          key={item}
        >
          {item}
        </p>
      ))}
    </>
  );
}
