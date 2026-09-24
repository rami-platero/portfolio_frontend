const Skill = ({ children, tooltip }) => {
  return (
    <div className="relative text-center [&>svg]:mx-auto [&>svg]:h-16 [&>svg]:w-16 [&>svg]:rounded-full [&>svg]:bg-accent-soft [&>svg]:p-[0.7rem]">
      {children}
      <span className="absolute -top-28 right-0 bottom-0 left-0 m-auto h-fit w-fit cursor-default rounded-2xl bg-accent-soft px-[0.7rem] py-[0.4rem] text-[0.6rem] font-semibold opacity-0 transition-opacity duration-200 ease-in-out [svg:hover+&]:opacity-100">
        {tooltip}
      </span>
    </div>
  );
};

export default Skill;
