import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { logoLight } from "../assets";
import { navlinks } from "../data";
import { Button } from "../components";

const Footer = () => {
  const displayNavLinks = navlinks.map((link, index) => (
    <li
      key={index}
      data-scrollto={link.section}
      className="cursor-pointer lg:underline text-lg font-light"
    >
      {link.title}
    </li>
  ));

  return (
    <footer>
      <div className="desktop-footer hidden lg:block mt-[70px]">
        <div className="container max-w-full">
          <div className="bg-dark px-[60px] py-[50px] rounded-t-[45px]">
            <div className="top flex justify-between items-center">
              <a href="">
                <img
                  src={logoLight}
                  alt="Positivus"
                  className="w-[144px] object-contain lg:w-[220px]"
                />
              </a>

              <ul className="flex justify-center items-center gap-10 text-white">
                {displayNavLinks}
              </ul>
              <ul className="flex justify-end items-center gap-5 text-dark text-sm">
                <li>
                  <a href="" className="social-link">
                    <FaLinkedinIn />
                  </a>
                </li>
                <li>
                  <a href="" className="social-link">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="" className="social-link">
                    <FaTwitter />
                  </a>
                </li>
              </ul>
            </div>
            <div className="middle flex justify-between items-stretch mt-[66px] mb-[55px]">
              <div className="contact-info">
                <h4 className="text-lg font-medium bg-green w-fit px-2 rounded-md">
                  Contact us:
                </h4>
                <ul className="contact-info-list mt-7 flex flex-col gap-3">
                  <li>Email: info@positivus.com</li>
                  <li>Phone: 555-567-8901</li>
                  <li>
                    Address: 1234 Main St <br /> Moonstone City, Stardust State
                    12345
                  </li>
                </ul>
              </div>
              <form
                action=""
                className="bg-[#292A32] rounded-[14px] flex justify-center items-center gap-5 px-10"
              >
                <input
                  type="email"
                  className="h-[68px] bg-[#292A32] border border-white rounded-[14px] text-lg px-8 text-white"
                  placeholder="Email"
                />
                <Button
                  role="submit"
                  type="primary"
                  label="Subscribe to news"
                  classes="w-full h-[68px]"
                />
              </form>
            </div>
            <div className="bottom pt-[50px] border-t border-white flex justify-start items-center gap-10 text-lg text-white">
              <p>&copy; 2024 Positivus. All Rights Reserved.</p>
              <a href="" className="underline">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-footer block lg:hidden bg-dark mt-[60px] pt-[50px] pb-[30px] px-5">
        <div className="flex flex-col gap-9 items-center">
          <a href="">
            <img
              src={logoLight}
              alt="Positivus"
              className="w-[144px] object-contain lg:w-[220px]"
            />
          </a>

          <ul className="flex flex-col items-center gap-[15px] text-white text-base">
            {displayNavLinks}
          </ul>

          <div className="contact-info text-center">
            <h4 className="text-lg font-medium bg-green w-fit px-2 rounded-md mx-auto">
              Contact us:
            </h4>
            <ul className="contact-info-list mt-9 flex flex-col gap-[15px]">
              <li>Email: info@positivus.com</li>
              <li>Phone: 555-567-8901</li>
              <li>
                Address: 1234 Main St <br /> Moonstone City, Stardust State
                12345
              </li>
            </ul>
          </div>
          <form
            action=""
            className="bg-[#292A32] rounded-[14px] flex flex-col items-center gap-[22px] p-[30px]"
          >
            <input
              type="email"
              className="h-[68px] bg-[#292A32] border border-white rounded-[14px] text-base px-6 text-white"
              placeholder="Email"
            />
            <Button
              role="submit"
              type="primary"
              label="Subscribe to news"
              classes="w-full h-[68px]"
            />
          </form>
          <ul className="flex justify-end items-center gap-5 text-dark text-sm">
            <li>
              <a href="" className="social-link">
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a href="" className="social-link">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="" className="social-link">
                <FaTwitter />
              </a>
            </li>
          </ul>
          <div className="bottom pt-9 border-t border-white flex flex-col gap-[15px] text-base text-white text-center">
            <p>&copy; 2024 Positivus. All Rights Reserved.</p>
            <a href="">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
