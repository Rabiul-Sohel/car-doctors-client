import axios from "axios";
import { useEffect, useState } from "react";
import Service from "./Service/Service";

const Services = () => {
  const [services, setServices] = useState([])

  useEffect(() => {
    axios.get('services.json')
      // .then(res => res.json())
     .then(data => setServices(data.data))
  },[])
  return (
    <div className="mt-4 text-center space-y-5">
      <h3 className="text-3xl font-bold text-orange-600">Service</h3>
      <h2 className="text-5xl font-bold">Our Service Area</h2>
      <p>
        the majority have suffered alteration in some form, by injected humour,
        or randomised words which do not look even slightly believable.{" "}
      </p>
      <div className="grid grid-cols-3 gap-8">
        {services.map((service) => (
          <Service service={service} key={service._id}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;