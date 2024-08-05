import { partners } from "../data";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

import "@splidejs/react-splide/css";

const Partners = () => {
  const displayPartners = partners.map((partner, index) => (
    <img
      key={index}
      src={partner.logo}
      alt={partner.name}
      className="grayscale hover:grayscale-0 cursor-pointer"
    />
  ));

  const displayFirstTreePartners = partners
    .slice(0, 3)
    .map((partner, index) => (
      <SplideSlide key={index}>
        <img
          src={partner.logo}
          alt={partner.name}
          className="grayscale hover:grayscale-0 cursor-pointer w-[122px]"
        />
      </SplideSlide>
    ));

  const displayLastTreePartners = partners.slice(-3).map((partner, index) => (
    <SplideSlide key={index}>
      <img
        src={partner.logo}
        alt={partner.name}
        className="grayscale hover:grayscale-0 cursor-pointer w-[122px]"
      />
    </SplideSlide>
  ));

  const splideOptions = {
    type: "loop",
    arrows: false,
    pagination: false,
    fixedWidth: "122px",
    gap: "38px",
    speed: 500,
  };

  return (
    <section className="section">
      <div className="container">
        <div className="desktop-logos hidden lg:flex justify-between items-center flex-wrap">
          {displayPartners}
        </div>
      </div>
      <div className="mobile-logos block lg:hidden mt-[30px]">
        <div className="mb-5">
          <Splide extensions={{ AutoScroll }} options={splideOptions}>
            {displayFirstTreePartners}
          </Splide>
        </div>
        <div>
          <Splide
            extensions={{ AutoScroll }}
            options={{ direction: "rtl", ...splideOptions }}
          >
            {displayLastTreePartners}
          </Splide>
        </div>
      </div>
    </section>
  );
};

export default Partners;
