import "./App.css";
const Button = ({ title, link }) => {
  return (
    <form action={link}>
      <input type="submit" value={title} className="button" />
    </form>
  );
};
export default Button;
