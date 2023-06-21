import "./Button.Styles.css";

const Button = (props) => {
  return (
    <button style={props.style} className="button">
      {props.text}
    </button>
  );
};

export default Button;
