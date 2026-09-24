import { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { scrollContext } from "../../context/ScrollContext";

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
  "block cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium text-darkcolor/70 no-underline transition-colors duration-200 hover:bg-lightblueviolet hover:text-darkcolor max-[780px]:px-3 max-[780px]:py-2 max-[780px]:text-base";

const Navigation = () => {
  const { projectsRef, skillsRef, contactRef } = useContext(scrollContext);
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
      <nav className="fixed top-5 right-0 left-0 z-[9] mx-auto flex w-full max-w-fit items-center rounded-full border border-darkcolor/10 bg-white p-1.5 shadow-[0_8px_30px_rgba(19,26,48,0.08)] select-none max-[780px]:top-0 max-[780px]:max-w-full max-[780px]:items-start max-[780px]:rounded-none max-[780px]:border-x-0 max-[780px]:border-t-0 max-[780px]:p-3 max-[780px]:shadow-none">
        <button
          className="hidden cursor-pointer items-center justify-center rounded-full p-2 text-darkcolor transition-colors duration-200 hover:bg-lightblueviolet max-[780px]:flex"
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
          className={`flex w-full list-none items-center gap-1 max-[780px]:absolute max-[780px]:top-full max-[780px]:left-0 max-[780px]:mt-2 max-[780px]:w-full max-[780px]:flex-col max-[780px]:items-stretch max-[780px]:rounded-2xl max-[780px]:border max-[780px]:border-darkcolor/10 max-[780px]:bg-white max-[780px]:p-2 max-[780px]:shadow-[0_8px_30px_rgba(19,26,48,0.08)] ${menuAnimation[animationState]}`}
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
                handleScroll(e, contactRef);
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
