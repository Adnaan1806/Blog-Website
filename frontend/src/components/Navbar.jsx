import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Navbar = () => {

const user = false;

  return (
    <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
      <h1 className="text-lg md:text-xl font-extrabold">
        <Link to="/">Blog App</Link>
      </h1>

      <div className="flex justify-center items-center space-x-0">
            <p><BsSearch/></p>
            <input
              type="text"
              placeholder="Search a post"
              className="outline-none px-3"
            />
      </div>

      <div className="flex items-center justify-center space-x-4 md:space-x-4">
        {user? <h3><Link to="/Write">Write</Link></h3> :<h3><Link to="/login">Login</Link></h3>}
        {user? <h3>Profile</h3> :<h3><Link to="/register">Register</Link></h3>}
      </div>

    </div>
  );
};

export default Navbar;
