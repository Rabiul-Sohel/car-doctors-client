import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const Checkout = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  const { title, price, service_id, img } = service;

  const handleBook = event => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value
    const date = form.date.value;
    const email = user.email;
    const phone = form.phone.value;
    const order = {
      customerName: name,
      orderDate: date,
      customerEmail: email,
      customerPhone: phone,
      serviceName: title,
     
    }
    axios
      .post("http://localhost:5000/orders", {
        customerName: name,
        orderDate: date,
        customerEmail: email,
        customerPhone: phone,
        serviceName: title,
        service_id: service_id,
        service_img: img
      })
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Order Confirm",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <h2 className="text-center text-3xl font-bold">{title}</h2>
      <form onSubmit={handleBook} className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="form-control">
            <input
              type="text"
              placeholder="Name"
              defaultValue={user?.name}
              name="name"
              className="input input-bordered"
              
            />
          </div>
          <div className="form-control">
            <input
              type="date"
              placeholder=""
              name="date"
              className="input input-bordered"
              
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Your Phone"
              name="phone"
              className="input input-bordered"
             
            />
          </div>
          <div className="form-control">
            <input
              type="email"
              placeholder="Your Email"
              defaultValue={user?.email}
              name="email"
              className="input input-bordered"
              
            />
          </div>
        </div>
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="Your Message"
          className="rounded-xl mt-5 p-5"
        ></textarea>
        <div className="form-control mt-6">
          <button className="btn bg-orange-700 text-white btn-block">
            Order Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
