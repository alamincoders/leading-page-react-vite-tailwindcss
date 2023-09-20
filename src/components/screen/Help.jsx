import bg from "../../assets/images/bg.jpg";
import bg2 from "../../assets/images/Asset 3-50.jpg";

const Help = () => {
  return (
    <section id="contact" className="relative">
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="bg-cover bg-center bg-no-repeat h-[850px] sm:h-[850px] md:h-[900px]  lg:h-[1000px] relative"
      >
        <div className="">
          <div className=" absolute w-full  bg-black/70 h-full ">
            <div className="absolute bottom-0 text-white w-full h-full ">
              <div className="container_fluid py-24 lg:py-44 flex items-center justify-center lg:block h-full">
                <div>
                  <div className=" font-tommy_bold text-3xl sm:text-5xl lg:text-[70px]">
                    {" "}
                    <h2 className=" leading-[1.25] mb-3">WE LOVE CLOTHES.</h2>
                    <h2 className=" leading-[1.25]">WE LOVE HELPING PEOPLE.</h2>
                  </div>
                  <p className="text-zinc-100 text-xl md:text-2xl lg:text-[30px] font-tommy_light font-medium mt-10 lg:!leading-[40px]">
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
      <div className="relative pb-[250px] sm:pb-[250px] md:pb-[250px] lg:pb-[350px] xl:pb-[460px]">
        <div className="container_fluid h-96 lg:h-[500px] xl:h-[700px] !overflow-hidden absolute -top-[200px] sm:-top-[200px] md:-top-[200px] lg:-top-[250px] xl:-top-[350px] sm:left-[2%] md:left-[3%] lg:left-[3%] xl:left-[5%] 2xl:left-[15%]">
          <img className="w-full h-full object-cover object-center rounded-lg" src={bg2} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Help;
