/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bg from "../../assets/images/17.jpg";
import bg2 from "../../assets/images/21.jpg";
import bg3 from "../../assets/images/23.jpg";

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
        <ul className="hero_slide" style={{ margin: "0px" }}>
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
            <div style={{ backgroundImage: `url(${bg})` }} className="bg-cover bg-top bg-no-repeat min-h-screen relative">
              <div className="text-center">
                <div className=" ">
                  <div className=" flex items-center justify-center h-screen bg-black/30 text-white/60">
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
          </div>{" "}
          <div>
            <div style={{ backgroundImage: `url(${bg2})` }} className="bg-cover bg-top bg-no-repeat min-h-screen relative">
              <div className="text-center">
                <div className=" ">
                  <div className=" flex items-center justify-center h-screen bg-black/30 text-white/60">
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
          </div>{" "}
          <div>
            <div style={{ backgroundImage: `url(${bg3})` }} className="bg-cover bg-top bg-no-repeat min-h-screen relative">
              <div className="text-center">
                <div className=" ">
                  <div className=" flex items-center justify-center h-screen bg-black/30 text-white/60">
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
          </div>{" "}
        </Slider>
      </div>
    </section>
  );
};

export default Hero;

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <button className={`${className} !hidden w-0 h-0 mr-60 lg:!inline-block lg:w-20 lg:h-20`} onClick={onClick}>
      <svg className="text-white inline-block" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3" d="m10 17l5-5l-5-5" />
      </svg>
    </button>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <button className={`${className} !hidden w-0 h-0 ml-60 lg:!inline-block lg:w-20 lg:h-20 z-10`} onClick={onClick}>
      <svg className="text-white inline-block" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3" d="m14 7l-5 5l5 5" />
      </svg>
    </button>
  );
}
