import "./Input.css";

const Input = (props) => {
  const { label, ...inputProps } = props;
  return (
    <div className="input-group">
      {label && <label htmlFor={props.id}>{label}</label>}
      <input {...inputProps} className="input-control" />
    </div>
  );
};

export default Input;
