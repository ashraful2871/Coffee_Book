import image from "../assets/banner.jpg";
const Banner = () => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="hero  min-h-[700px] rounded-2xl"
    ></div>
  );
};

export default Banner;
// bg - base - 200;
