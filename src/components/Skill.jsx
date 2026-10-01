const Skill = ({ children, tooltip }) => {
  return (
    <div
      className="group relative rounded-full text-center focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4 [&>svg]:mx-auto [&>svg]:h-16 [&>svg]:w-16 [&>svg]:rounded-full [&>svg]:bg-accent-soft [&>svg]:p-[0.7rem]"
      tabIndex={0}
    >
      {children}
      <span className="absolute -top-28 right-0 bottom-0 left-0 m-auto h-fit w-fit cursor-default rounded-2xl bg-accent-soft px-[0.7rem] py-[0.4rem] text-[0.6rem] font-semibold opacity-0 transition-opacity duration-200 ease-in-out group-focus-visible:opacity-100 [svg:hover+&]:opacity-100">
        {tooltip}
      </span>
    </div>
  );
};

export default Skill;
