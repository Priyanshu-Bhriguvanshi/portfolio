import { Link } from "react-router-dom";

const Button = ({name, path}) => {

  return (
    <div className="flex justify-start mt-4">
      <Link
        to={path}
        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold text-lg rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
      >
        {name}
      </Link>
    </div>
  );
};

export default Button;
