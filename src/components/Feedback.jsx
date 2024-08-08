const Feedback = ({ feedback, name, title }) => {
  return (
    <article>
      <div className="comment border border-green rounded-[45px] p-[30px] lg:p-12 relative">
        <p className="text-base lg:text-lg">{`"${feedback}"`}</p>
        <div className="comment-feedback w-10 h-10 border-r border-b border-green absolute -bottom-[20px] left-12 lg:left-24 rotate-45 bg-dark" />
      </div>
      <div className="info mt-11 ml-[70px] lg:ml-[118px]">
        <h4 className="text-lg font-medium text-green">{name}</h4>
        <p className="text-base lg:text-lg">{title}</p>
      </div>
    </article>
  );
};

export default Feedback;
