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
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: "block", background: "red", marginRight: "50px" }} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: "block", background: "green", marginLeft: "50px", zIndex: "10" }} onClick={onClick} />
  );
}
