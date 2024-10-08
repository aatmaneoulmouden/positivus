import { Case, Heading } from "../components";
import { cases } from "../data";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const CaseStudies = () => {
  const displayCasesInDesktop = cases.map((caseStudy, index) => {
    let additionalClasses;

    if (index === 0) {
      additionalClasses = "pr-16";
    } else if (index === 1) {
      additionalClasses = "px-16 border-x";
    } else {
      additionalClasses = "px-16";
    }
    return (
      <Case key={index} additionalClasses={additionalClasses} {...caseStudy} />
    );
  });

  const displayCasesInMobile = cases.map((caseStudy, index) => (
    <SplideSlide key={index}>
      <Case {...caseStudy} />
    </SplideSlide>
  ));
  return (
    <section className="section" id="casstudies-section">
      <div className="in-desktop hidden lg:block">
        <div className="container max-w-full">
          <Heading
            title="Case Studies"
            subtitle="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
            paragraphWidth="lg:max-w-[580px]"
          />
          <div className="content-wrapper mt-10 lg:mt-20 bg-dark text-white py-[70px] px-[60px] rounded-[70px] flex">
            {displayCasesInDesktop}
          </div>
        </div>
      </div>
      <div className="in-mobile block lg:hidden">
        <Splide
          options={{
            type: "loop",
            gap: "20px",
            arrows: false,
            pagination: false,
            fixedWidth: "360px",
            focus: "center",
          }}
        >
          {displayCasesInMobile}
        </Splide>
      </div>
    </section>
  );
};

export default CaseStudies;
