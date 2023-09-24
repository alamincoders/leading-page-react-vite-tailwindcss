/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import bg2 from "../../assets/images/21.jpg";
import bg3 from "../../assets/images/28.jpg";
import bg from "../../assets/images/hero-slider.jpg";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "transparent",
          borderRadius: "10px",
          padding: "10px",
          position: "relative",
          top: "-100px",
        }}
      >
        <ul className="hero_slide flex items-center justify-center" style={{ margin: "0px" }}>
          {dots}{" "}
        </ul>
      </div>
    ),
  };
  return (
    <section>
      <div>
        <Slider {...settings}>
          <div>
            <div
              style={{ backgroundImage: `url(${bg})` }}
              className="bg-cover bg-top bg-no-repeat h-[700px] sm:h-[750px] md:h-[800px] lg:h-[1000px] xl:h-[1550px] relative"
            >
              <div className="text-center">
                <div className=" ">
                  <div className="flex items-center justify-center h-[700px] sm:h-[750px] md:h-[800px] lg:h-[1000px] xl:h-[1550px] bg-black/60 text-white">
                    <div>
                      <div className="mt-28 font-bold text-[40px] sm:text-[60px] md:text-[90px] lg:text-[120px] xl:text-[150px]  leading-[1.00]  font-tommy_bold">
                        <h2 className="">THE ARTIST</h2>
                        <h2 className="">CLOUD AGENCY</h2>
                      </div>
                      <div className="text-white/90 container_fluid  ">
                        <h3 className="uppercase text-[22px] sm:text-[28px] lg:text-[36px] xl:text-[42px] font-medium mt-3">
                          where your ai identity finds its sanc tuary.
                        </h3>
                        <p className="text-base sm:text-[18px] lg:text-[22px] mt-6 sm:mt-12 lg:mt-[72px] font-medium leading-snug">
                          In today&apos;s fast-paced digital landscape, protecting your unique AI identity is paramount. At The Artist Agency, we
                          specialise in safeguarding the digital likeness of public figures, sports stars, entertainers, and content creators.
                          We&apos;re here to empower you by creating, preserving, and protecting your AI identity, all while ensuring you retain full
                          ownership and control
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              style={{ backgroundImage: `url(${bg2})` }}
              className="bg-cover bg-top bg-no-repeat h-[700px] sm:h-[750px] md:h-[800px] lg:h-[1000px] xl:h-[1550px] relative"
            >
              <div className="text-center">
                <div className=" ">
                  <div className="flex items-center justify-center h-[700px] sm:h-[750px] md:h-[800px] lg:h-[1000px] xl:h-[1550px] bg-black/60 text-white">
                    <div>
                      <div className="mt-28 font-bold text-[40px] sm:text-[60px] md:text-[90px] lg:text-[120px] xl:text-[150px]  leading-[1.00]  font-tommy_bold">
                        <h2 className="">THE ARTIST</h2>
                        <h2 className="">CLOUD AGENCY</h2>
                      </div>
                      <div className="text-white/90 container_fluid  ">
                        <h3 className="uppercase text-[22px] sm:text-[28px] lg:text-[36px] xl:text-[42px] font-medium mt-3">
                          where your ai identity finds its sanc tuary.
                        </h3>
                        <p className="text-base sm:text-[18px] lg:text-[22px] mt-6 sm:mt-12 lg:mt-[72px] font-medium leading-snug">
                          In today&apos;s fast-paced digital landscape, protecting your unique AI identity is paramount. At The Artist Agency, we
                          specialise in safeguarding the digital likeness of public figures, sports stars, entertainers, and content creators.
                          We&apos;re here to empower you by creating, preserving, and protecting your AI identity, all while ensuring you retain full
                          ownership and control
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              style={{ backgroundImage: `url(${bg3})` }}
              className="bg-cover bg-top bg-no-repeat h-[700px] sm:h-[750px] md:h-[800px] lg:h-[1000px] xl:h-[1550px] relative"
            >
              <div className="text-center">
                <div className=" ">
                  <div className="flex items-center justify-center h-[700px] sm:h-[750px] md:h-[800px] lg:h-[1000px] xl:h-[1550px] bg-black/60 text-white">
                    <div>
                      <div className="mt-28 font-bold text-[40px] sm:text-[60px] md:text-[90px] lg:text-[120px] xl:text-[150px]  leading-[1.00]  font-tommy_bold">
                        <h2 className="">THE ARTIST</h2>
                        <h2 className="">CLOUD AGENCY</h2>
                      </div>
                      <div className="text-white/90 container_fluid  ">
                        <h3 className="uppercase text-[22px] sm:text-[28px] lg:text-[36px] xl:text-[42px] font-medium mt-3">
                          where your ai identity finds its sanc tuary.
                        </h3>
                        <p className="text-base sm:text-[18px] lg:text-[22px] mt-6 sm:mt-12 lg:mt-[72px] font-medium leading-snug">
                          In today&apos;s fast-paced digital landscape, protecting your unique AI identity is paramount. At The Artist Agency, we
                          specialise in safeguarding the digital likeness of public figures, sports stars, entertainers, and content creators.
                          We&apos;re here to empower you by creating, preserving, and protecting your AI identity, all while ensuring you retain full
                          ownership and control
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Hero;

// next arrow icon below
function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <button className={`${className} !hidden w-0 h-0  mr-16 xl:mr-[90px] 2xl:mr-[190px] lg:!inline-block lg:w-20 lg:h-20`} onClick={onClick}>
      <svg className="text-white inline-block" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3" d="m10 17l5-5l-5-5" />
      </svg>
    </button>
  );
}

//  preview arrow icon here
function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <button className={`${className} !hidden w-0 h-0 ml-5  xl:ml-[40px] 2xl:ml-[130px] lg:!inline-block lg:w-20 lg:h-20 z-10`} onClick={onClick}>
      <svg className="text-white inline-block" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3" d="m14 7l-5 5l5 5" />
      </svg>
    </button>
  );
}
