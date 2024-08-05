import { header } from "../assets";
import { Button } from "../components";

const Header = () => {
  return (
    <header>
      <div className="container  max-w-full">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 flex flex-col items-start lg:gap-9">
            <h1 className="text-[40px] lg:text-6xl font-medium max-w-full lg:max-w-[508px] leading-[50px] lg:leading-[70px] mb-2 lg:mb-0">
              Navigating the <br className="hidden lg:block" /> digital
              landscape for success
            </h1>
            <img
              src={header}
              alt="Header illustration"
              className="block lg:hidden mb-3 lg:mb-0"
            />
            <p className="text-base max-w-full lg:max-w-[500px] lg:text-xl mb-10 lg:mb-0">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>
            <Button
              role="button"
              type="secondary"
              scrollto="contactus"
              label="Book a consultation"
              classes="w-full lg:w-fit"
            />
          </div>
          <div className="flex-1 hidden lg:block">
            <img src={header} alt="Header illustration" className="ml-auto" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
