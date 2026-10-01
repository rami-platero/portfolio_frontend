import { useContext, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { scrollContext } from "../../context/ScrollContext";
import { navLinks } from "../../data/navigation";
import { useTheme } from "../../hooks/useTheme";

const AnimationState = {
  closing: "closing",
  closed: "closed",
  open: "open",
};

const menuAnimation = {
  [AnimationState.open]: "max-[780px]:flex max-[780px]:animate-slide-in",
  [AnimationState.closing]:
    "max-[780px]:[transform:translateX(-100%)] max-[780px]:animate-slide-out",
  [AnimationState.closed]: "max-[780px]:hidden",
};

const linkClasses =
  "block w-full cursor-pointer rounded-full px-4 py-1.5 text-left text-sm font-medium text-muted transition-colors duration-200 hover:bg-accent-soft hover:text-text focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 max-[780px]:px-3 max-[780px]:py-2 max-[780px]:text-base";

const iconButtonClasses =
  "flex cursor-pointer items-center justify-center rounded-full p-2 text-text transition-colors duration-200 hover:bg-accent-soft focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2";

const Navigation = () => {
  const refs = useContext(scrollContext);
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [animationState, setAnimationState] = useState(AnimationState.closed);

  const handleButton = () => {
    if (isOpen) {
      setAnimationState(AnimationState.closing);
      setTimeout(() => {
        setAnimationState(AnimationState.closed);
      }, 300);
    } else {
      setAnimationState(AnimationState.open);
    }
    setIsOpen(!isOpen);
  };

  const handleScroll = (ref) => {
    handleButton();

    if (ref.current) {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      ref.current.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "center",
      });
    }
  };

  return (
    <header>
      <nav className="fixed top-5 right-0 left-0 z-9 mx-auto flex w-full max-w-fit items-center rounded-full border border-hairline bg-surface p-1.5 shadow-(--shadow-soft) select-none max-[780px]:top-0 max-[780px]:max-w-full max-[780px]:justify-between max-[780px]:rounded-none max-[780px]:border-x-0 max-[780px]:border-t-0 max-[780px]:p-3 max-[780px]:shadow-none">
        <button
          className={`hidden ${iconButtonClasses} max-[780px]:flex`}
          onClick={handleButton}
          type="button"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <IoMdClose className="h-6 w-6" />
          ) : (
            <GiHamburgerMenu className="h-6 w-6" />
          )}
        </button>
        <ul
          className={`flex w-full list-none items-center gap-1 max-[780px]:absolute max-[780px]:top-full max-[780px]:left-0 max-[780px]:mt-2 max-[780px]:w-full max-[780px]:flex-col max-[780px]:items-stretch max-[780px]:rounded-2xl max-[780px]:border max-[780px]:border-hairline max-[780px]:bg-surface max-[780px]:p-2 max-[780px]:shadow-(--shadow-soft) ${menuAnimation[animationState]}`}
        >
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                className={linkClasses}
                onClick={() => {
                  handleScroll(refs[link.ref]);
                }}
                type="button"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
        <span className="mx-1 h-5 w-px shrink-0 bg-hairline max-[780px]:hidden" />
        <button
          className={iconButtonClasses}
          onClick={toggleTheme}
          type="button"
          aria-label={
            theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
          }
        >
          {theme === "dark" ? (
            <FiSun className="h-5 w-5" />
          ) : (
            <FiMoon className="h-5 w-5" />
          )}
        </button>
      </nav>
    </header>
  );
};

export default Navigation;
