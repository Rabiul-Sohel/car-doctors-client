
import abImg1 from '../../../assets/images/about_us/parts.jpg'
import abImg2 from '../../../assets/images/about_us/person.jpg'
const About = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row gap-12">
        <div className="relative w-1/2">
          <img src={abImg2} className="max-w-sm rounded-lg w-2/3" />
          <img
            src={abImg1}
            className=" rounded-lg absolute  top-1/2 right-12 border-[12px] border-white w-1/2"
          />
        </div>

        <div className="w-1/2 space-y-6">
          <h3 className="text-3xl text-orange-600 font-bold">About Us</h3>
          <h1 className="text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
          <button className="btn btn-warning">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;