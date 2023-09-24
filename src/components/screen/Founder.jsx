import founderImg from "../../assets/images/latest/img6.jpg";
const Founder = () => {
  return (
    <section id="founder" className="py-24 md:py-44 lg:py-72 relative overflow-hidden">
      <div className="container_fluid">
        <div className="w-full h-32 bg-black absolute z-0 hidden lg:block"></div>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 md:gap-16 z-10 relative">
          <div className="w-full h-full">
            <img className="w-full h-full object-cover object-center" src={founderImg} alt="" />
          </div>
          <div className="xl:col-span-2 mt-5">
            <div className="text-white/90 mb-12">
              <h2 className=" text-3xl md:text-5xl lg:text-[50px] font-bold  uppercase font-tommy_bold leading-none">DAMON DANIELI</h2>
              <h4 className="font-sans font-medium text-[22px] md:text-[28px] lg:text-[32px] leading-none">Co-Founder & CTO</h4>
            </div>
            <div>
              <div className="text-base sm:text-[18px] lg:text-[22px] text-zinc-400 font-tommy">
                <p className="my-5 leading-tight md:text-justify">
                  Damon Danieli is a tech visionary with a remarkable track record in shaping the digital landscape. With a career spanning
                  high-profile roles in the tech industry, Damon brings a wealth of experience to The Artist Agency.
                </p>
              </div>
            </div>
            <div className="  text-zinc-400 font-tommy mt-5">
              <h5 className="text-[17px] sm:text-[19px] lg:text-[23px] uppercase leading-none font-[500] font-sans text-zinc-500/90 mb-3">
                <strong>FORMER VICE PRESIDENT AT DOCUSIGN</strong>
              </h5>
              <div className="text-base sm:text-[18px] lg:text-[22px]">
                <p className="leading-tight  md:text-justify">
                  During his tenure as Vice President of Manage within the DocuSign Agreement Cloud, Damon Danieli played a pivotal role in supporting
                  the Machine Learning/Artificial Intelligence strategy. He took ownership of customer-facing features like In Product Reporting and
                  security reporting through DocuSign Monitor. Additionally, he laid the foundations of DocuSign&apos;s ML/AI infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12">
          {/* =========================================== */}
          <div className="  text-zinc-400 font-tommy mt-7">
            <h5 className="text-[17px] sm:text-[19px] lg:text-[23px] uppercase leading-none font-[500] font-sans text-zinc-500/90 mb-3">
              <strong>FOUNDER AND CEO/CTO OF APPURI (ACQUIRED BY DOCUSIGN)</strong>
            </h5>
            <div className="text-base sm:text-[18px] lg:text-[22px]">
              <p className="leading-tight  md:text-justify">
                Damon&apos;s entrepreneurial spirit shone through as he founded Appuri, a groundbreaking Customer Data Platform. Appuri&apos;s
                acquisition by DocuSign in December 2017 underscored its significance in the SaaS industry. The platform empowered businesses to
                optimize retention, engagement, and revenue by capturing and connecting behavioural data from various sources.
              </p>
            </div>
          </div>
          {/* ================================================ */}
          <div className="  text-zinc-400 font-tommy mt-7">
            <h5 className="text-[17px] sm:text-[19px] lg:text-[23px] uppercase leading-none font-[500] font-sans text-zinc-500/90 mb-3">
              <strong>FOUNDER AND CTO OF Z2LIVE (ACQUIRED BY KING)</strong>
            </h5>
            <div className="text-base sm:text-[18px] lg:text-[22px]">
              <p className="leading-tight  md:text-justify">
                Before Appuri, Damon&apos;s journey included leading Z2Live, a prominent developer of free-to-play social games on iOS. His
                contributions led to over 50 million downloads of titles such as Battle Nations, Trade Nations, and MetalStorm: Wingman. Z2Live&apos;s
                acquisition by King in February 2015 marked a testament to Damon&apos;s impact on the gaming world.
              </p>
            </div>
          </div>
          {/* =========================================== */}
          <div className="  text-zinc-400 font-tommy mt-7">
            <h5 className="text-[17px] sm:text-[19px] lg:text-[23px] uppercase leading-none font-[500] font-sans text-zinc-500/90 mb-3">
              <strong>FOUNDER AND CEO/CTO OF APPURI (ACQUIRED BY DOCUSIGN)</strong>
            </h5>
            <div className="text-base sm:text-[18px] lg:text-[22px]">
              <p className="leading-tight  md:text-justify">
                Damon&apos;s entrepreneurial spirit shone through as he founded Appuri, a groundbreaking Customer Data Platform. Appuri&apos;s
                acquisition by DocuSign in December 2017 underscored its significance in the SaaS industry. The platform empowered businesses to
                optimize retention, engagement, and revenue by capturing and connecting behavioural data from various sources.
              </p>
            </div>
          </div>
          {/* ================================================ */}
          <div className="  text-zinc-400 font-tommy mt-7">
            <h5 className="text-[17px] sm:text-[19px] lg:text-[23px] uppercase leading-none font-[500] font-sans text-zinc-500/90 mb-3">
              <strong>MICROSOFT VETERAN</strong>
            </h5>
            <div className="text-base sm:text-[18px] lg:text-[22px]">
              <p className="leading-tight  md:text-justify">
                Damon&apos;s illustrious career also includes 14 years at Microsoft, where he played a pivotal role in designing the original Xbox
                Live. He crafted functional specifications for marquee features like voice chat, voice commands, and friends. His leadership extended
                to managing complex technical challenges and teams of project managers. Gamers may recognize him by his Xbox Live Gamertag.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
