import "./index.css";

export const Button = ({ children, onClick }) => {
  return (
    <Button onClick={onClick} className="button-container">
      {children}
    </Button>
  );
};
