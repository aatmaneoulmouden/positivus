import { Button, Heading } from "../components";
import { contact } from "../assets";

const Contact = () => {
  return (
    <section className="section">
      <div className="container max-w-full">
        <Heading
          title="Contact Us"
          subtitle="Connect with Us: Let's Discuss Your Digital Marketing Needs"
          paragraphWidth="lg:max-w-[323px]"
        />
        <form action="">
          <div className="content-wrapper mt-10 lg:mt-20 bg-gray text-white py-10 lg:py-[60px] px-[30px] lg:px-[100px] rounded-[45px] relative overflow-hidden">
            <div className="form lg:w-[556px]">
              <div className="fields">
                <div className="input-wrapper radio-buttons flex justify-between items-center lg:justify-start lg:gap-[35px] text-black mb-9 lg:mb-10">
                  <div className="input">
                    <input
                      type="radio"
                      name="type"
                      id="sayHi"
                      className="radio-button"
                      defaultChecked
                    />
                    <label htmlFor="sayHi" className="radio-label">
                      Say Hi
                    </label>
                  </div>
                  <div className="input">
                    <input
                      type="radio"
                      name="type"
                      id="getQuote"
                      className="radio-button"
                    />
                    <label htmlFor="getQuote" className="radio-label">
                      Get a Quote
                    </label>
                  </div>
                </div>
                <div className="input-wrapper">
                  <label htmlFor="name" className="block-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="field"
                    placeholder="Name"
                  />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="email" className="block-label">
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="field"
                    placeholder="Email"
                  />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="message" className="block-label">
                    Message*
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className="field h-[130px] lg:h-[190px] resize-none"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>

              <Button
                role="submit"
                type="secondary"
                label="Send Message"
                classes="w-full mt-10 hidden lg:block"
              />
            </div>
            <img
              src={contact}
              alt="Contact us"
              className="absolute top-1/2 -right-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block"
            />
          </div>
          <Button
            role="submit"
            type="secondary"
            label="Send Message"
            classes="w-full mt-[30px] block lg:hidden"
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
