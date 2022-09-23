import "./LoginForm.css";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import Checkbox from "components/Input/Checkbox";

const LoginForm = () => {
  return (
    <form className="form-control">
      <Input label="Username:" id="username" type="text" />
      <Input
        label="Password:"
        id="password"
        type="password"
        autoComplete="false"
      />
      <div className="button-group">
        <Checkbox label="Remember me" />
        <Button
          text="Submit"
          style={{
            padding: "10px 20px",
            width: "fit-content",
          }}
          className="orange-button"
        />
      </div>
    </form>
  );
};

export default LoginForm;
