interface WordmarkProps {
  label?: string;
}

export function Wordmark({ label }: WordmarkProps) {
  return (
    <a
      className='font-mono text-[1.5rem] font-medium tracking-[-0.1em] md:text-[1.8rem]'
      href='/'
      aria-label={label}
    >
      ehh
    </a>
  );
}
