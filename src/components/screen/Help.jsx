import bg from "../../assets/images/bg.jpg";
import bg2 from "../../assets/images/Asset 3-50.jpg";

const Help = () => {
  return (
    <section id="contact" className="">
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="bg-cover bg-center bg-no-repeat h-[600px] sm:h-[650px] md:h-[700px] lg:h-[800px] xl:h-[1200px] relative"
      >
        <div className="">
          <div className=" absolute w-full  bg-black/60 h-full ">
            <div className="absolute bottom-0 text-white w-full h-full ">
              <div className="container_fluid py-24 lg:py-44 flex items-center justify-center lg:block h-full">
                <div>
                  <div className=" font-tommy_bold text-3xl sm:text-5xl lg:text-[70px]">
                    {" "}
                    <h2 className=" leading-[1.25] mb-3">WE LOVE CLOTHES.</h2>
                    <h2 className=" leading-[1.25]">WE LOVE HELPING PEOPLE.</h2>
                  </div>
                  <p className="text-zinc-100 text-xl md:text-2xl lg:text-[30px] font-tommy_light font-medium mt-10 !leading-[40px]">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy
                    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container_fluid w-full h-80 lg:h-[600px] overflow-hidden relative -top-12 sm:-top-24  lg:-top-24 xl:-top-44">
        <img className="w-full h-full object-cover object-center rounded-lg" src={bg2} alt="" />
      </div>
    </section>
  );
};

export default Help;
