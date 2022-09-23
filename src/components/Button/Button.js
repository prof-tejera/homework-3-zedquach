import "./Button.css";

const Button = ({ active, text, ...btnProps }) => {
  return <button {...btnProps}>{text}</button>;
};

export default Button;
