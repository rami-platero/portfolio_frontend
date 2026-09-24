import { useContext, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { scrollContext } from "../../context/ScrollContext";
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
  "block cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium text-muted no-underline transition-colors duration-200 hover:bg-accent-soft hover:text-text max-[780px]:px-3 max-[780px]:py-2 max-[780px]:text-base";

const iconButtonClasses =
  "flex cursor-pointer items-center justify-center rounded-full p-2 text-text transition-colors duration-200 hover:bg-accent-soft";

const Navigation = () => {
  const { projectsRef, skillsRef, experienceRef, contactRef } =
    useContext(scrollContext);
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

  const handleScroll = (e, ref) => {
    e.preventDefault();
    handleButton();

    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <header>
      <nav className="fixed top-5 right-0 left-0 z-[9] mx-auto flex w-full max-w-fit items-center rounded-full border border-hairline bg-surface p-1.5 shadow-[var(--shadow-soft)] select-none max-[780px]:top-0 max-[780px]:max-w-full max-[780px]:justify-between max-[780px]:rounded-none max-[780px]:border-x-0 max-[780px]:border-t-0 max-[780px]:p-3 max-[780px]:shadow-none">
        <button
          className={`hidden ${iconButtonClasses} max-[780px]:flex`}
          onClick={handleButton}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <IoMdClose className="h-6 w-6" />
          ) : (
            <GiHamburgerMenu className="h-6 w-6" />
          )}
        </button>
        <ul
          className={`flex w-full list-none items-center gap-1 max-[780px]:absolute max-[780px]:top-full max-[780px]:left-0 max-[780px]:mt-2 max-[780px]:w-full max-[780px]:flex-col max-[780px]:items-stretch max-[780px]:rounded-2xl max-[780px]:border max-[780px]:border-hairline max-[780px]:bg-surface max-[780px]:p-2 max-[780px]:shadow-[var(--shadow-soft)] ${menuAnimation[animationState]}`}
        >
          <li>
            <a
              className={linkClasses}
              onClick={(e) => {
                handleScroll(e, projectsRef);
              }}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className={linkClasses}
              onClick={(e) => {
                handleScroll(e, skillsRef);
              }}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              className={linkClasses}
              onClick={(e) => {
                handleScroll(e, experienceRef);
              }}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              className={linkClasses}
              onClick={(e) => {
                handleScroll(e, contactRef);
              }}
            >
              Contact
            </a>
          </li>
        </ul>
        <span className="mx-1 h-5 w-px shrink-0 bg-hairline max-[780px]:hidden" />
        <button
          className={iconButtonClasses}
          onClick={toggleTheme}
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
