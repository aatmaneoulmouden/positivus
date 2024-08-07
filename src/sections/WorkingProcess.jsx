import { useState } from "react";
import { Heading, Step } from "../components";
import { workingProcess } from "../data";

const WorkingProcess = () => {
  const [activeStep, setActiveStep] = useState(null);
  const toggleActiveStep = (id) => {
    setActiveStep(id);
  };

  const displaySetps = workingProcess.map((step, index) => (
    <Step
      key={index}
      id={index + 1}
      isActive={activeStep === index + 1}
      handleClick={toggleActiveStep}
      {...step}
    />
  ));
  return (
    <section className="section">
      <div className="container max-w-full">
        <Heading
          title="Our Working Process"
          subtitle="Step-by-Step Guide to Achieving Your Business Goals"
          paragraphWidth="lg:max-w-[292px]"
        />
        <div className="content-wrapper mt-10 lg:mt-20 flex flex-col gap-5 lg:gap-[30px]">
          {displaySetps}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
