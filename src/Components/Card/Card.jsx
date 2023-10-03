import { FaBookOpen, FaDollarSign } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
const Card = ({ card, handleAddToCart }) => {
  const { image, course_name, course_details, credit, price } = card;
  return (
    <div className="flex flex-col p-3 text-center bg-[#FFF] rounded-xl">
      <img
        className="w-full h-36 rounded-lg object-cover "
        src={image}
        alt=""
      />
      <div className="grow flex flex-col gap-2 text-left">
        <h2 className=" text-lg font-semibold">{course_name}</h2>
        <p className="grow  text-sm">{course_details}</p>

        <div className="flex justify-between items-center">
          <FaDollarSign></FaDollarSign>
          <span>Price : {price}</span>
          <FaBookOpen></FaBookOpen>
          <span>Credit : {credit}hr</span>
        </div>
        <button
          onClick={() => handleAddToCart(card)}
          className=" w-full py-2 rounded-md bg-blue-700 text-white"
        >
          Select
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Card;
