import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { Feedback, Heading } from "../components";
import { testimonials } from "../data";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const displayTestimonials = testimonials.map((testimonial, index) => (
    <SplideSlide key={index} className="w-[330px] lg:w-[606px]">
      <Feedback {...testimonial} />
    </SplideSlide>
  ));

  const splideOptions = {
    type: "loop",
    gap: "50px",
    fixedWidth: "606px",
    focus: "center",
    pagination: false,
    arrows: false,
    breakpoints: {
      768: {
        gap: "30px",
        fixedWidth: "330px",
      },
    },
  };

  return (
    <section className="section">
      <div className="container max-w-full">
        <Heading
          title="Testimonials"
          subtitle="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
          paragraphWidth="lg:max-w-[473px]"
        />
        <div className="content-wrapper mt-10 lg:mt-20 bg-dark text-white py-[70px] rounded-[70px]">
          <Splide hasTrack={false} options={splideOptions}>
            <SplideTrack>{displayTestimonials}</SplideTrack>
          </Splide>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
