/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { imagesGallery } from "../../data/imagesGallery";

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    // autoplay: true,
    // autoplaySpeed: 4000,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <section className="py-24 lg:py-44">
      <div className="container_fluid">
        <div className="block md:flex justify-between items-center mb-5">
          <h2 className="text-zinc-400 text-2xl md:text-3xl uppercase font-poppins">From Our Instagram</h2>
          <h2 className="text-zinc-400 text-2xl md:text-3xl font-poppins">@instausername</h2>
        </div>

        <Slider {...settings}>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px]">
              {imagesGallery
                .sort((a, b) => a.id - b.id)
                .map(({ ImageSrc, id, react, comment }) => (
                  <div key={id} className="w-full h-[400px] group relative cursor-pointer">
                    <img src={ImageSrc} alt="" className="w-full h-full object-cover object-center" />
                    <div className="w-full h-full absolute top-0 left-0 bg-black/60 hidden group-hover:flex items-center justify-center gap-x-4 text-white/80 duration-300 transition-all ease-in-out">
                      <div className="text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                          <path
                            fill="white"
                            d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z"
                          />
                        </svg>
                        <span>{react}</span>
                      </div>
                      <div className="text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                          <g transform="rotate(-90 12 12)">
                            <path
                              fill="none"
                              stroke="white"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M12 21a9 9 0 1 0-9-9c0 1.488.36 2.89 1 4.127L3 21l4.873-1c1.236.639 2.64 1 4.127 1Z"
                            />
                          </g>
                        </svg>
                        <span className="">{comment}</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px]">
              {imagesGallery
                .sort((a, b) => b.id - a.id)
                .map(({ ImageSrc, id, react, comment }) => (
                  <div key={id} className="w-full h-[400px] group relative cursor-pointer">
                    <img src={ImageSrc} alt="" className="w-full h-full object-cover object-center" />
                    <div className="w-full h-full absolute top-0 left-0 bg-black/60 hidden group-hover:flex items-center justify-center gap-x-4 text-white/80 duration-300 transition-all ease-in-out">
                      <div className="text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                          <path
                            fill="white"
                            d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z"
                          />
                        </svg>
                        <span>{react}</span>
                      </div>
                      <div className="text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                          <g transform="rotate(-90 12 12)">
                            <path
                              fill="none"
                              stroke="white"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M12 21a9 9 0 1 0-9-9c0 1.488.36 2.89 1 4.127L3 21l4.873-1c1.236.639 2.64 1 4.127 1Z"
                            />
                          </g>
                        </svg>
                        <span className="">{comment}</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Gallery;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: "block", background: "red", marginRight: "-50px" }} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: "block", background: "green", marginLeft: "-50px", zIndex: "10" }} onClick={onClick} />
  );
}
