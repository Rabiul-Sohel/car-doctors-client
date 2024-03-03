import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";


const Bookings = () => {
  const { user } = useContext(AuthContext)
  const [bookings, setBookings] = useState([])

  const url = `http://localhost:5000/orders?email=${user?.email}`;
  useEffect(() => {
    axios.get(url)
    .then(res => setBookings(res.data))
    .catch(err => console.log(err))
  
  },[url])
  // axios.get(url)
  //   .then(res => setBookings(res.data))
  //   .catch(err => console.log(err))
  return (
    <div>
      <h2 className="text-3xl text-center font-semibold">
        Bookings: {bookings.length}{" "}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking._id}>
                <th> {1} </th>
                <td>
                  {" "}
                  <img className="w-28" src={booking.service_img} alt="" />{" "}
                </td>
                <td> {booking.serviceName} </td>
                <td> {booking.orderDate} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;