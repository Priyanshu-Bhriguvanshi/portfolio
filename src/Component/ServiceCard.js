export const ServiceCard = ({ image, title, description }) => {
    return (
      <div className="flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden  transition-shadow duration-300 hover:shadow-lg p-4">
        {/* Image Section with Hover Effect */}
        <div className="h-48 overflow-hidden rounded-md">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
          />
        </div>
  
        {/* Content Section */}
        <div className="text-center mt-4">
          <h1 className="text-lg font-semibold text-gray-800">{title}</h1>
          <p className="text-sm text-gray-600 mt-2">{description}</p>
        </div>
      </div>
    );
  };
  