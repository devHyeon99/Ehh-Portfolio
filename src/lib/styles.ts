export const container =
  "mx-auto w-[calc(100%_-_40px)] md:w-[calc(100%_-_56px)] lg:w-[min(1200px,calc(100%_-_96px))]";

export const eyebrow = "font-mono font-medium tracking-[0.11em]";

export const eyebrowMuted = `${eyebrow} text-[0.65rem] text-muted md:text-[0.75rem]`;

export const button =
  "inline-flex items-center justify-center gap-[9px] whitespace-nowrap rounded-[5px] border px-[15px] py-2.5 text-[0.8rem] md:px-[18px] md:py-3 md:text-[0.875rem]";

export const buttonPrimary = `${button} border-brand bg-brand text-on-brand hover:bg-brand-dark`;

export const buttonSecondary = `${button} border-line hover:bg-surface-hover`;

export const textLink =
  "mt-[15px] inline-flex items-center gap-[9px] text-[0.875rem] text-brand";

export const caseParagraph =
  "text-[0.95rem] leading-[1.95] md:text-[1rem] print:text-[10pt] print:leading-[1.8]";
