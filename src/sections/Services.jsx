import { Heading, ServiceCard } from "../components";
import { services } from "../data";

const Services = () => {
  const displayServices = services.map((service, index) => (
    <ServiceCard key={index} {...service} />
  ));
  return (
    <section className="section">
      <div className="container max-w-full">
        <Heading
          title="Services"
          subtitle="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
        />
        <div className="content-wrapper mt-10 lg:mt-20 grid grid-cols-1 gap-[30px] lg:gap-10 lg:grid-cols-2">
          {displayServices}
        </div>
      </div>
    </section>
  );
};

export default Services;
