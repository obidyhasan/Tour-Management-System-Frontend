import { Link } from "react-router";

const Unauthorized = () => {
  return (
    <div>
      <h1>You are not authorized for this route!</h1>
      <Link to={"/"}></Link>
    </div>
  );
};

export default Unauthorized;
