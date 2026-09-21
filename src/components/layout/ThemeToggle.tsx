import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../../hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const dark = theme === "dark";

  return (
    <button
      className='flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-muted hover:border-brand hover:text-brand md:h-10 md:w-10'
      onClick={toggle}
      aria-label={dark ? "밝은 화면으로 전환" : "어두운 화면으로 전환"}
      title={dark ? "밝은 화면으로 전환" : "어두운 화면으로 전환"}
    >
      {dark ? <FiSun aria-hidden /> : <FiMoon aria-hidden />}
    </button>
  );
}
