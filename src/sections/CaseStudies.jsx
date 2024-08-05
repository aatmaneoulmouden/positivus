import { Case, Heading } from "../components";
import { cases } from "../data";

const CaseStudies = () => {
  const displayCases = cases.map((caseStudy, index) => {
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
  return (
    <section className="section">
      <div className="container max-w-full">
        <Heading
          title="Case Studies"
          subtitle="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
          paragraphWidth="lg:max-w-[580px]"
        />
        <div className="content-wrapper mt-10 lg:mt-20 bg-dark text-white py-[70px] px-[60px] rounded-[70px] flex">
          {displayCases}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
