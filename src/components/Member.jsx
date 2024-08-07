import { FaLinkedinIn } from "react-icons/fa6";

const Member = ({ image, name, title, summary, linkedInProfile }) => {
  return (
    <article className="border border-black rounded-[45px] p-10 lg:px-[35px] shadow-base">
      <div className="info flex justify-start items-end gap-5 relative pb-7">
        <img src={image} alt={name} />
        <div>
          <h4 className="text-lg font-medium lg:text-xl">{name}</h4>
          <small className="lg:text-lg block w-full">{title}</small>
        </div>
        <a
          href={linkedInProfile}
          className="w-8 h-8 bg-black rounded-full flex justify-center items-center absolute top-0 right-0"
        >
          <FaLinkedinIn className="text-green text-sm" />
        </a>
      </div>
      <div className="summary border-t-2 pt-7">
        <p className="text-base lg:text-lg">{summary}</p>
      </div>
    </article>
  );
};

export default Member;
