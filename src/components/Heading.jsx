const Heading = ({ title, subtitle, paragraphWidth }) => {
  return (
    <div className="heading flex flex-col lg:flex-row gap-7 lg:gap-10 items-center lg:justify-start lg:items-stretch">
      <h2 className="text-4xl lg:text-[40px] font-medium bg-green w-fit p-2 rounded-md flex items-center">{title}</h2>
      <p className={`w-full text-base text-center lg:text-start lg:text-lg ${paragraphWidth}`}>{subtitle}</p>
    </div>
  );
};

export default Heading;
