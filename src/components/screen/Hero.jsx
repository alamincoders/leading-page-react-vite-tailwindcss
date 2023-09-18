import bg from "../../assets/images/17.jpg";

const Hero = () => {
  return (
    <section>
      <div>
        <div style={{ backgroundImage: `url(${bg})` }} className="bg-cover bg-top bg-no-repeat h-[900px] relative">
          <div className="text-center">
            <div className=" absolute w-full font-poppins bg-black/40 h-full">
              <div className="absolute bottom-0 text-white/50 flex items-center justify-center w-full h-full">
                <div>
                  <h2 className="font-extrabold text-[45px] sm:text-[65px] md:text-[80px] lg:text-[118px] xl:text-[128px] leading-[1.25] ">
                    THE ARTIST
                  </h2>
                  <h2 className="font-extrabold text-[45px] sm:text-[65px] md:text-[80px] lg:text-[118px] xl:text-[128px] leading-[1.25]">
                    CLOUD AGENCY
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
