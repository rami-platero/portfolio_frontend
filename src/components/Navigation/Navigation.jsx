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
  "cursor-pointer text-black no-underline transition duration-200 ease-in-out hover:text-blueviolet max-[780px]:hover:text-black";

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
      <nav className="fixed top-4 right-0 bottom-0 left-0 z-[9] mx-auto flex max-h-[30px] w-full max-w-fit items-center rounded-2xl border-2 border-[rgb(70,70,70)] bg-white p-4 backdrop-blur-[10px] select-none max-[780px]:top-0 max-[780px]:max-h-[50px] max-[780px]:max-w-full max-[780px]:flex-col max-[780px]:items-start max-[780px]:justify-center max-[780px]:rounded-none max-[780px]:border-none max-[780px]:bg-darkblueviolet">
        <button
          className="hidden cursor-pointer flex-col items-center border-none max-[780px]:flex"
          onClick={handleButton}
        >
          {isOpen ? (
            <IoMdClose className="h-8 w-8 bg-darkblueviolet" />
          ) : (
            <GiHamburgerMenu className="h-8 w-8 bg-darkblueviolet" />
          )}
        </button>
        <ul
          className={`flex w-full list-none gap-8 text-[0.9rem] max-[780px]:absolute max-[780px]:top-[3.1rem] max-[780px]:left-0 max-[780px]:z-[-2] max-[780px]:flex-col max-[780px]:bg-blueviolet max-[780px]:p-4 max-[780px]:text-base max-[780px]:font-semibold ${menuAnimation[animationState]}`}
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
