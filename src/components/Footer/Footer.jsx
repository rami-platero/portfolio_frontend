// Derived once at module load: calling new Date() in the render body makes the
// component impure.
const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="mt-[150px] flex h-[150px] w-full items-center justify-center bg-footer font-extralight text-footer-text">
      <p>© {year} Ramiro Platero. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
