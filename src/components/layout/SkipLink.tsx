export function SkipLink() {
  return (
    <a
      className='fixed left-5 top-[-80px] z-[100] bg-brand p-3 text-on-brand focus:top-3'
      href='#main-content'
      onClick={(e) => {
        e.preventDefault();
        document.getElementById("main-content")?.focus();
      }}
    >
      본문으로 건너뛰기
    </a>
  );
}
