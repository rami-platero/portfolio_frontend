const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="mt-[150px] flex h-[150px] w-full items-center justify-center bg-footer font-extralight text-footer-text">
      <p>© {year} Ramiro Platero. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
