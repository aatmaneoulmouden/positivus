import { FaBars } from "react-icons/fa";
import { logoBlack } from "../assets";
import { Button } from "../components";
import { navlinks } from "../data";
import { useState } from "react";

const MobileMenu = ({ menu }) => (
  <div className="slide-top mobile-menu absolute top-full left-5 right-5 flex flex-col gap-5 p-6 rounded-[30px] shadow-base border border-dark bg-white lg:hidden">
    <ul className="flex flex-col items-center gap-5">{menu}</ul>
    <Button
      role="button"
      type="outline"
      scrollto="contactus"
      label="Request a quote"
    />
  </div>
);

const Navbar = () => {
  const displayNavLinks = navlinks.map((link, index) => (
    <li key={index} data-scrollto={link.section} className="cursor-pointer">
      {link.title}
    </li>
  ));

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu((prevShowMobileMenu) => !prevShowMobileMenu);
  };

  return (
    <nav className="py-7 lg:py-14 relative">
      <div className="container">
        <div className="flex justify-between items-center">
          <a href="">
            <img
              src={logoBlack}
              alt="Positivus"
              className="w-[144px] object-contain lg:w-[220px]"
            />
          </a>
          <FaBars className="lg:hidden" onClick={toggleMobileMenu} />
          <div className="desktop-menu items-center gap-10 hidden lg:flex">
            <ul className="flex items-center gap-10">{displayNavLinks}</ul>
            <Button
              role="button"
              type="outline"
              scrollto="contactus"
              label="Request a quote"
              classes="hidden xl:block"
            />
          </div>

          {showMobileMenu && <MobileMenu menu={displayNavLinks} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
