import img1 from "../../assets/images/25.jpg";

const Gallery = () => {
  return (
    <section className="py-24 lg:py-44">
      <div className="container_fluid">
        <div className="block md:flex justify-between items-center mb-5">
          <h2 className="text-zinc-400 text-2xl md:text-3xl uppercase font-poppins">From Our Instagram</h2>
          <h2 className="text-zinc-400 text-2xl md:text-3xl font-poppins">@instausername</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px]">
          <div className="w-full h-[400px]">
            <img src={img1} alt="" className="w-full h-full object-cover object-center" />
          </div>{" "}
          <div className="w-full h-[400px]">
            <img src={img1} alt="" className="w-full h-full object-cover object-center" />
          </div>{" "}
          <div className="w-full h-[400px]">
            <img src={img1} alt="" className="w-full h-full object-cover object-center" />
          </div>{" "}
          <div className="w-full h-[400px]">
            <img src={img1} alt="" className="w-full h-full object-cover object-center" />
          </div>{" "}
          <div className="w-full h-[400px]">
            <img src={img1} alt="" className="w-full h-full object-cover object-center" />
          </div>{" "}
          <div className="w-full h-[400px]">
            <img src={img1} alt="" className="w-full h-full object-cover object-center" />
          </div>{" "}
          <div className="w-full h-[400px]">
            <img src={img1} alt="" className="w-full h-full object-cover object-center" />
          </div>{" "}
          <div className="w-full h-[400px]">
            <img src={img1} alt="" className="w-full h-full object-cover object-center" />
          </div>{" "}
          <div className="w-full h-[400px]">
            <img src={img1} alt="" className="w-full h-full object-cover object-center" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
