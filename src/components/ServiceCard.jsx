import { FiArrowUpRight } from "react-icons/fi";

const ServiceCard = ({ title, image, link, bgColor, highlightColor }) => {
  let arrowStyles;
  let linkStyles;

  if (bgColor === "bg-green") {
    arrowStyles = "bg-dark text-green";
    linkStyles = "text-black";
  } else if (bgColor === "bg-dark") {
    arrowStyles = "bg-white text-dark";
    linkStyles = "text-white";
  } else {
    arrowStyles = "bg-dark text-green";
  }

  return (
    <article
      className={`${bgColor} shadow-base rounded-[30px] p-12 flex flex-col gap-7 lg:gap-0 lg:flex-row min-h-[310px]`}
    >
      <div className="flex-1 flex flex-col justify-between">
        <h3 aria-label={title.full} className="service-title">
          <span className={highlightColor}>{title.firstPart}</span>
          <span className={highlightColor}>{title.secondPart}</span>
        </h3>
        <a
          href={link}
          className={`hidden lg:flex justify-start items-center gap-4 ${linkStyles}`}
        >
          <div
            className={`${arrowStyles} w-10 h-10 rounded-full flex justify-center items-center`}
          >
            <FiArrowUpRight fontSize={30} />
          </div>
          Learn more
        </a>
      </div>
      <div className="flex-1 flex items-end">
        <a
          href={link}
          className={`${arrowStyles} w-10 h-10 rounded-full flex justify-center items-center lg:hidden`}
        >
          <FiArrowUpRight fontSize={30} />
        </a>
        <img src={image} alt={`${title.full} Service`} className="ml-auto h-[116px] lg:h-auto object-contain" />
      </div>
    </article>
  );
};

export default ServiceCard;
