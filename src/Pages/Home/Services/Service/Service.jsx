
import { FaArrowRight } from "react-icons/fa";
const Service = ({ service }) => {
  const {  title, img, price } = service
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="" className="h-[208px] w-full"/>
      </figure>
      <div className="p-4 space-y-3">
        <h2 className="text-2xl text-left font-bold">{title}</h2>
        <div className="flex justify-between items-center text-orange-500">
          <p className="text-xl font-semibold "> Price: {price} </p>
          <FaArrowRight className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Service;