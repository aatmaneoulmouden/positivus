import { cta } from "../assets";
import { Button } from "../components";

const Cta = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="flex bg-gray p-[50px] lg:p-[60px] rounded-[45px]">
          <div className="flex-1 flex flex-col gap-6">
            <h3 className="text-[26px] lg:text-3xl font-medium">Let’s make things happen</h3>
            <p className="max-w-[500px] text-base lg:text-xl">
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>
            <Button
              role="button"
              type="secondary"
              scrollto="contactus"
              label="Get your free proposal"
              classes="w-full lg:w-fit"
            />
          </div>
          <div className="flex-1 relative hidden lg:block">
            <img src={cta} alt="Positivus" className="absolute top-1/2 right-[100px] -translate-y-1/2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
