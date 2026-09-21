import { useRef } from "react";
import { FiPlus, FiX } from "react-icons/fi";

interface EvidenceImageProps {
  src: string;
  caption: string;
}

export function EvidenceImage({ src, caption }: EvidenceImageProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  return (
    <figure className='mb-5 mt-[26px] print:break-inside-avoid'>
      <button
        className='relative block w-full cursor-zoom-in rounded-md border border-line bg-surface-sunken p-2 md:p-[18px]'
        onClick={() => dialog.current?.showModal()}
        aria-label='근거 이미지 확대'
      >
        <img
          className='m-auto max-h-[360px] object-contain print:max-h-[70mm]'
          src={src}
          alt={caption}
          loading='lazy'
        />
        <span className='absolute bottom-[14px] right-[14px] flex items-center gap-1.5 rounded border border-line bg-surface px-2.5 py-[7px] text-[0.75rem] print:hidden'>
          이미지 확대 <FiPlus />
        </span>
      </button>
      <figcaption className='pt-2.5 text-[0.75rem] leading-[1.8] text-muted'>
        {caption}
      </figcaption>
      <dialog
        ref={dialog}
        className='max-h-[92vh] max-w-[min(1100px,94vw)] rounded-lg border-0 bg-code-bar px-6 pb-5 pt-10 text-white backdrop:bg-[#111827db] print:hidden'
        aria-label='근거 이미지 확대 보기'
        onClick={(e) => {
          if (e.target === e.currentTarget) dialog.current?.close();
        }}
      >
        <button
          className='absolute right-3 top-2.5 border-0 bg-none p-2 text-white'
          autoFocus
          onClick={() => dialog.current?.close()}
          aria-label='이미지 닫기'
        >
          <FiX />
        </button>
        <img
          className='m-auto max-h-[75vh] object-contain'
          src={src}
          alt={caption}
        />
        <p className='mt-[14px] text-[0.8rem] text-[#c2cbdc]'>{caption}</p>
      </dialog>
    </figure>
  );
}
