const Button = ({ role = "button", type, scrollto = "", label, classes = "" }) => {
  let buttonClassNames;
  if (type === "primary") {
    buttonClassNames = "text-black border-green bg-green";
  } else if(type === "secondary") {
    buttonClassNames = "text-white border-dark bg-dark";
  } else {
    buttonClassNames = "border-dark text-black";
  }
  return (
    <button type={role} className={`border rounded-[14px] py-3 md:py-4 md:px-9 ${buttonClassNames} ${classes}`}>
      {label}
    </button>
  );
};

export default Button;
