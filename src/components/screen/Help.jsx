import bg from "../../assets/images/bg.jpg";
import bg2 from "../../assets/images/Asset 3-50.jpg";

const Help = () => {
  return (
    <section id="contact" className="relative">
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="bg-cover bg-center bg-no-repeat h-[1150px] sm:h-[850px] md:h-[1300px]  lg:h-[1100px] relative"
      >
        <div className="">
          <div className=" absolute w-full  bg-black/70 h-full ">
            <div className="absolute bottom-0 text-white w-full h-full ">
              <div className="container_fluid py-24 lg:py-44 flex items-center justify-center lg:block h-full">
                <div className="flex flex-col gap-y-12">
                  <div>
                    <div className=" font-tommy_bold text-3xl sm:text-5xl lg:text-[50px]">
                      {" "}
                      <h2 className=" leading-[1.25] mb-3">*A LOVE FOR ENTERTAINMENT AND BUSINESS:*</h2>
                    </div>
                    <p className="text-zinc-100 text-base md:text-xl lg:text-[22px] font-tommy_light font-medium mt-5 lg:!leading-[30px]">
                      Sisi&apos;s deep-rooted love for the entertainment industry eventually led to the inception of The Artist Agency. Her unique
                      blend of experience in business management and the entertainment world makes her a driving force behind our agency&apos;s
                      mission
                    </p>
                  </div>
                  <div>
                    <div className=" font-tommy_bold text-3xl sm:text-5xl lg:text-[50px]">
                      {" "}
                      <h2 className=" leading-[1.25] mb-3">OUR SHARED VISION</h2>
                    </div>
                    <p className="text-zinc-100 text-base md:text-xl lg:text-[22px] font-tommy_light font-medium mt-5 lg:!leading-[30px]">
                      Damon Danieli and Sisi-Makhanya Danieli have joined forces to lead The Artist Agency. Their combined expertise in technology,
                      entrepreneurship, and entertainment drives the agency&apos;s commitment to safeguarding digital identities and empowering public
                      figures in the ever-evolving digital landscape
                    </p>
                  </div>
                  <div>
                    <div className=" font-tommy_bold text-3xl sm:text-5xl lg:text-[50px]">
                      {" "}
                      <h2 className=" leading-[1.25] mb-3">PARTNER WITH US</h2>
                    </div>
                    <p className="text-zinc-100 text-base md:text-xl lg:text-[22px] font-tommy_light font-medium mt-5 lg:!leading-[30px]">
                      The Artist Agency is more than just a business—it&apos;s a reflection of the passion, expertise, and vision of our founders.
                      Join us on our mission to protect and elevate your digital identity. <br />
                      <br />
                      Thank you for considering The Artist Agency as your partner in the digital realm. We look forward to serving you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative -mt-[70px] sm:-mt-[90px] lg:-mt-[100px] xl:-mt-[150px] z-10 mb-16 sm:mb-16 lg:mb-20 xl:mb-24 2xl:mb-28">
        <div className="container_fluid">
          <img className="w-full h-full object-cover object-center rounded-lg" src={bg2} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Help;
