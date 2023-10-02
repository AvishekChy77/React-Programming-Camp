import Course from "../Course/Course";

const Carts = ({ cart, credit, remainingCredit, price }) => {
  return (
    <div className=" md:w-1/4 rounded-lg bg-[#FFF] p-5 ">
      <h2 className=" text-blue-600 text-lg font-bold pb-5 border-b-2">
        Credit Hour Remaining {remainingCredit} hr
      </h2>
      <h2 className=" text-xl font-bold my-4 ">Course Name</h2>
      <div className=" pb-5 border-b-2">
        {cart.map((item, idx) => (
          <Course key={idx} idx={idx} item={item}></Course>
        ))}
      </div>
      <h2 className="py-5 border-b-2 font-medium">
        Total Credit Hour : {credit}
      </h2>
      <h2 className="py-5 font-semibold">Total Price : {price} USD</h2>
    </div>
  );
};

export default Carts;
