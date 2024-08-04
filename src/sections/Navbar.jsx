import { logoBlack } from "../assets";
import { Button } from "../components";
import { navlinks } from "../data";

const Navbar = () => {
  const displayNavLinks = navlinks.map((link, index) => (
    <li key={index} data-scrollto={link.section} className="cursor-pointer">
      {link.title}
    </li>
  ));
  return (
    <nav className="py-14">
      <div className="container">
        <div className="flex justify-between items-center">
          <a href="">
            <img src={logoBlack} alt="Positivus" />
          </a>
          <div className="flex items-center gap-10">
            <ul className="flex items-center gap-10">{displayNavLinks}</ul>
            <Button
              role="button"
              type="outline"
              scrollto="contactus"
              label="Request a quote"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
