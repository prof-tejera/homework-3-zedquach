import "./Button.css";

const Button = ({ active, text, ...btnProps }) => {
  return (
    <button
      className={active ? ".Default-button-active" : "Default-button"}
      {...btnProps}
    >
      {text}
    </button>
  );
};

export default Button;
