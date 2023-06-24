import "./Button.Styles.css";

const Button = ({ ...props }) => {
  return (
    <button {...props} className="button">
      {props.text}
    </button>
  );
};

export default Button;
