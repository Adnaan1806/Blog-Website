import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full flex justify-center items-center h-[70vh]">
      <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
        <h1 className="text-xl font-bold text-left">Log in to your account</h1>
        <input type="text" placeholder="Enter your email" className="w-full px-4 py-2 border-2 border-black outline-0" />
        <input type="password" placeholder="Enter your password" className="w-full px-4 py-2 border-2 border-black outline-0" />
        <button className="w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-500 hover:text-black">
          Login
        </button>
        <div className="flex justify-center items-center space-x-2">
            <p>Don't have an account?</p>
            <p className="text-gray-500 hover:text-black"><Link to="/register">Register</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
