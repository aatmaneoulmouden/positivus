import { FiArrowUpRight } from "react-icons/fi";

const Case = ({ description, link, additionalClasses = "" }) => {
  return (
    <article>
      {/* In desktop */}
      <div
        className={`hidden flex-1 lg:flex flex-col gap-5 ${additionalClasses}`}
      >
        <p className="text-lg">{description}</p>
        <a
          href={link}
          className="flex justify-start items-center gap-2 text-green"
        >
          Learn more
          <FiArrowUpRight fontSize={28} />
        </a>
      </div>

      {/* In mobile */}
      <div className="flex lg:hidden flex-col gap-5 px-[50px] py-[42px] rounded-[45px] bg-dark">
        <p className="text-base text-white">{description}</p>
        <a
          href={link}
          className="flex justify-start items-center gap-2 text-green"
        >
          Learn more
          <FiArrowUpRight fontSize={28} />
        </a>
      </div>
    </article>
  );
};

export default Case;
