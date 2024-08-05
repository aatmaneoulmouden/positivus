import { FiArrowUpRight } from "react-icons/fi";

const Case = ({ description, link, additionalClasses }) => {
  return (
    <article className={`flex-1 flex flex-col gap-5 ${additionalClasses}`}>
      <p className="text-lg">{description}</p>
      <a href={link} className="flex justify-start items-center gap-2 text-green">
        Learn more
        <FiArrowUpRight fontSize={28} />
      </a>
    </article>
  );
};

export default Case;
