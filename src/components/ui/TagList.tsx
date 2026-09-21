interface TagListProps {
  items: string[];
  /** 기본 상단 여백 대신 다른 배치가 필요할 때 넘긴다. */
  className?: string;
}

export function TagList({
  items,
  className = "mt-[15px] md:mt-5",
}: TagListProps) {
  return (
    <div className={`${className} flex flex-wrap gap-[5px] md:gap-[7px]`}>
      {items.map((item) => (
        <span
          className='rounded border border-line bg-surface px-[7px] py-1 text-[0.65rem] text-copy-soft md:px-[9px] md:py-[5px] md:text-[0.75rem]'
          key={item}
        >
          {item}
        </span>
      ))}
    </div>
  );
}
