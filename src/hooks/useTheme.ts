import { useEffect, useState } from "react";

export type Theme = "light" | "dark";

/** index.html 의 선반영 스크립트와 같은 키·규칙을 쓴다. 한쪽만 바꾸면 첫 화면이 깜빡인다. */
const STORAGE_KEY = "theme";
const DARK_QUERY = "(prefers-color-scheme: dark)";

/** 사생활 보호 모드처럼 저장소를 막아둔 환경에서도 화면은 그대로 동작해야 한다. */
function readChoice(): Theme | null {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === "light" || saved === "dark" ? saved : null;
  } catch {
    return null;
  }
}

function saveChoice(theme: Theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // 저장에 실패해도 이번 방문 동안에는 고른 화면을 유지한다.
  }
}

/** 고른 적이 없으면 시스템 설정을 따른다. */
function readTheme(): Theme {
  return readChoice() ?? (window.matchMedia(DARK_QUERY).matches ? "dark" : "light");
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    // 모바일 브라우저 주소창 색도 화면에 맞춘다. index.css 의 --paper 와 같은 값이다.
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#0f1218" : "#fafbfc");
  }, [theme]);

  // 직접 고르기 전까지는 시스템 설정 변경을 그대로 따라간다.
  useEffect(() => {
    const media = window.matchMedia(DARK_QUERY);
    const onChange = (event: MediaQueryListEvent) => {
      if (!readChoice()) setTheme(event.matches ? "dark" : "light");
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const toggle = () =>
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      saveChoice(next);
      return next;
    });

  return { theme, toggle };
}
