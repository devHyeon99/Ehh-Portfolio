import { useEffect, useState } from "react";

const read = () => window.location.pathname + window.location.hash;

/** pushState 는 이벤트를 발생시키지 않으므로 이동을 직접 알린다. */
const NAVIGATE = "app:navigate";

export function navigate(href: string) {
  if (href === read()) return;
  window.history.pushState(null, "", href);
  window.dispatchEvent(new Event(NAVIGATE));
}

/** 새 탭·다운로드·외부 링크는 브라우저 기본 동작으로 두어야 하는 클릭. */
function isPlainClick(event: MouseEvent) {
  return (
    event.button === 0 &&
    !event.defaultPrevented &&
    !event.metaKey &&
    !event.ctrlKey &&
    !event.shiftKey &&
    !event.altKey
  );
}

export function useLocation() {
  const [location, setLocation] = useState(read);

  useEffect(() => {
    const update = () => setLocation(read());

    // 링크는 그대로 <a href> 로 두고 클릭만 가로챈다.
    // 가운데 클릭·새 탭으로 열기·주소 복사 같은 기본 동작을 잃지 않기 위해서다.
    const onClick = (event: MouseEvent) => {
      if (!isPlainClick(event)) return;

      const anchor = (event.target as Element | null)?.closest("a");
      if (!anchor || anchor.hasAttribute("download")) return;
      if (anchor.target && anchor.target !== "_self") return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      const url = new URL(href, window.location.href);
      if (url.origin !== window.location.origin) return;
      // 같은 문서 안의 앵커(/#projects)는 브라우저 스크롤과 hashchange 에 맡긴다.
      if (url.pathname === window.location.pathname && url.hash) return;

      event.preventDefault();
      const target = url.pathname + url.hash;
      // 지금 있는 곳을 다시 누른 경우. 기본 동작에 맡기면 전체 리로드가 된다.
      if (target === read()) window.scrollTo({ top: 0, behavior: "instant" });
      else navigate(target);
    };

    window.addEventListener("popstate", update);
    window.addEventListener(NAVIGATE, update);
    window.addEventListener("hashchange", update);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("popstate", update);
      window.removeEventListener(NAVIGATE, update);
      window.removeEventListener("hashchange", update);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return location;
}
