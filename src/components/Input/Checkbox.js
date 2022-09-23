import "./Checkbox.css";

const Input = (props) => {
  const { label, ...inputProps } = props;
  return (
    <div className="checkbox-group">
      <input {...inputProps} type="checkbox" className="checkbox-control" />
      {label && <label htmlFor={props.id}>{label}</label>}
    </div>
  );
};

export default Input;
