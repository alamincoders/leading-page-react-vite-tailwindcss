import founderImg from "../../assets/images/latest/img6.jpg";
const Founder = () => {
  return (
    <section id="founder" className="py-24 md:py-44 lg:py-72 relative overflow-hidden">
      <div className="container_fluid">
        <div className="w-full h-32 bg-black absolute z-0 hidden lg:block"></div>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 md:gap-16 z-10 relative">
          <div className="w-full">
            <img className="w-full object-cover object-center" src={founderImg} alt="" />
          </div>
          <div className="xl:col-span-2 mt-5">
            <div className="text-white/90 mb-12">
              <h2 className=" text-3xl md:text-5xl lg:text-[50px] font-bold  uppercase font-tommy_bold leading-none">DAMON DANIELI</h2>
              <h4 className="font-sans font-medium text-[22px] md:text-[28px] lg:text-[32px] leading-none">Co-Founder & CTO</h4>
            </div>
            <div>
              <p className="text-xl md:text-2xl lg:text-[30px] font-tommy_light font-medium !leading-[40px] md:text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy
                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged/
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 text-zinc-600">
          {" "}
          <p className="text-xl md:text-2xl lg:text-[30px] font-tommy_light font-medium !leading-[40px] md:text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
            the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Founder;
