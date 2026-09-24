const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="mt-[150px] flex h-[150px] w-full items-center justify-center bg-darkcolor font-extralight text-[rgb(240,240,240)]">
      <p>© {year} Ramiro Platero. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
