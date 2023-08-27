import buttonStyles from "components/button/Button.module.scss";

type buttonProps = {
  children: string;
  onClick: () => void;
};

const Button = ({ children, onClick }: buttonProps) => {
  return (
    <button className={buttonStyles.button} onClick={onClick}>
      <span className={buttonStyles.label}>{children}</span>
    </button>
  );
};

export default Button;
