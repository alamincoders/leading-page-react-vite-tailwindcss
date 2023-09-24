import aboutImg from "../../assets/images/Asset 4-8.png";
import aboutImg2 from "../../assets/images/latest/img.jpg";
import aboutImg3 from "../../assets/images/latest/img3.jpg";
import aboutImg4 from "../../assets/images/latest/img-4.png";
import aboutImg5 from "../../assets/images/latest/img5.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-44 lg:py-72 bg-zinc-100/70">
      <div className="container_fluid">
        <div className="space-y-10 md:text-justify">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-16">
            <div className="order-2 xl:order-1">
              <h2 className="text-[24px] sm:text-[32px] lg:text-[50px] font-tommy_bold text-black/90 leading-tight">
                Preserving <br /> Your AI Identity
              </h2>
              <div className="text-base sm:text-[18px] lg:text-[22px] text-zinc-400">
                <p className="my-5 leading-tight">
                  Your AI identity is a reflection of who you are in the digital world. Here&apos;s how we assist you
                </p>{" "}
                <p className="my-5 leading-tight">
                  <span className="font-bold font-tommy_bold !text-zinc-500/80">1. Tailored AI Avatars:</span> We craft customised AI avatars that
                  faithfully mirror your appearance, personality, and style. These avatars are designed to capture the essence of your identity.
                </p>{" "}
                <p className="my-5 leading-tight">
                  <span className="font-bold font-tommy_bold !text-zinc-500/80">2. Voice Preservation:</span> Your unique voice is a crucial part of
                  your digital identity. We use advanced technology to replicate and securely store your online voice, ensuring it remains exclusively
                  yours.
                </p>
                <p className="my-5 leading-tight">
                  <span className="font-bold font-tommy_bold !text-zinc-500/80">3. Cutting-Edge Vault:</span> Our state-of-the-art vault is where we
                  secure your AI identity. It&apos;s impenetrable to un-authorized access or tampering. Your digital likeness is stored in a single,
                  secure location
                </p>
              </div>
            </div>
            <div className=" w-full h-full order-1 xl:order-2">
              <img className="w-full h-full object-cover object-right" src={aboutImg2} alt="" />
            </div>
          </div>{" "}
          {/* ================================================= */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="sm:w-96 sm:h-96 mx-auto">
              <img className="w-full h-full" src={aboutImg} alt="" />
            </div>
            <div className="">
              <h2 className="text-[24px] sm:text-[32px] lg:text-[50px] font-tommy_bold text-black/90 leading-tight">
                Our Commitment: <br />
                Your Digital Guardian
              </h2>
              <div className="text-base sm:text-[18px] lg:text-[22px] text-zinc-400 font-tommy">
                <p className="my-5 leading-tight">
                  At The Artist Agency, our unwavering commitment is to be the vigilant guardian of your AI identity. We understand the value of your
                  digital likeness and the importance of keeping it under your control.
                </p>{" "}
              </div>
            </div>
          </div>
          {/* ================================================= */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-16">
            <div className="order-2 xl:order-1">
              <div>
                <h2 className="text-[24px] sm:text-[32px] lg:text-[50px] font-tommy_bold text-black/90 leading-tight">
                  Protection <br /> Against Impersonation
                </h2>
                <div className="text-base sm:text-[18px] lg:text-[22px] text-zinc-400 font-tommy">
                  <p className="my-5 leading-tight">
                    In an era of increasing deepfake and AI impersonation threats, we&apos;re your shield. If anyone attempts to use a fake AI avatar
                    of you, our up-to-date AI programming and the avatars we&apos;ve crafted will swiftly expose the deception
                  </p>
                </div>
              </div>{" "}
              <div className="mt-10">
                <h2 className="text-[24px] sm:text-[32px] lg:text-[50px] font-tommy_bold text-black/90 leading-tight">
                  Your Digital <br />
                  Legacy, Your Ownership
                </h2>
                <div className="text-base sm:text-[18px] lg:text-[22px] text-zinc-400 font-tommy">
                  <p className="my-5 leading-tight">
                    In an era of increasing deepfake and AI impersonation threats, we&apos;re your shield. If anyone attempts to use a fake AI avatar
                    of you, our up-to-date AI programming and the avatars we&apos;ve crafted will swiftly expose the deception
                  </p>
                </div>
              </div>
            </div>
            <div className=" w-full h-full order-1 xl:order-2">
              <img className="w-full h-full object-cover object-right" src={aboutImg3} alt="" />
            </div>
          </div>
          {/* ================================================= */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="w-[75%] mx-auto">
              <img className="w-full h-full" src={aboutImg4} alt="" />
            </div>
            <div className="">
              <div>
                <h2 className="text-[24px] sm:text-[32px] lg:text-[50px] font-tommy_bold text-black/90 leading-tight">
                  Booking Jobs <br />
                  with Confidence
                </h2>
                <div className="text-base sm:text-[18px] lg:text-[22px] text-zinc-400 font-tommy">
                  <p className="my-5 leading-tight">
                    When you land a job that requires the use of your digital likeness, we&apos;re your partners. The Artist Agency collaborates with
                    you to create the required performance, ensuring your digital identity is portrayed accurately and professionally.
                  </p>{" "}
                </div>
              </div>
              <div className="mt-10">
                <h2 className="text-[24px] sm:text-[32px] lg:text-[50px] font-tommy_bold text-black/90 leading-tight">
                  One Vault, <br />
                  Total Protection
                </h2>
                <div className="text-base sm:text-[18px] lg:text-[22px] text-zinc-400 font-tommy">
                  <p className="my-5 leading-tight">
                    At The Artist Agency, your AI identity is stored in one secure vault, exclusively for you. We don&apos;t own or control it.
                    It&apos;s your property, and our mission is to keep it safe
                  </p>{" "}
                </div>
              </div>
              <div className="mt-10">
                <h2 className="text-[24px] sm:text-[32px] lg:text-[50px] font-tommy_bold text-black/90 leading-tight">
                  Join Us in Empowering <br />
                  Your Digital Identity
                </h2>
                <div className="text-base sm:text-[18px] lg:text-[22px] text-zinc-400 font-tommy">
                  <p className="my-5 leading-tight">
                    Embrace the future with confidence. Choose The Artist Agency as your ally in the digital realm. Contact us today to discover how
                    we can help you preserve and protect your AI identity like never before
                  </p>{" "}
                </div>
              </div>
            </div>
          </div>
          {/* ================================================= */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-16">
            <div className="order-2 xl:order-1">
              <div>
                <h2 className="text-[24px] sm:text-[32px] lg:text-[50px] font-tommy_bold text-black/90 leading-tight">
                  Your Digital <br />
                  Legacy, Secured
                </h2>
                <div className="text-base sm:text-[18px] lg:text-[22px] text-zinc-400 font-tommy">
                  <p className="my-5 leading-tight">
                    Your digital identity is your legacy, and we&apos;re here to ensure it&apos;s protected for generations to come. With The Artist
                    Agency, you can trust that your AI likeness is safeguarded, allowing you to focus on what you do best – creating, entertaining,
                    and inspiring.
                  </p>
                </div>
              </div>{" "}
              <div className="mt-10">
                <h2 className="text-[24px] sm:text-[32px] lg:text-[50px] font-tommy_bold text-black/90 leading-tight">
                  Join Us in the <br />
                  Digital Revolution
                </h2>
                <div className="text-base sm:text-[18px] lg:text-[22px] text-zinc-400 font-tommy">
                  <p className="my-5 leading-tight">
                    Embrace the future with confidence, knowing that The Artist Agency has your back. Join us in the digital revolution and take
                    control of your AI identity. Contact us today to discover how we can preserve and protect your digital legacy like never before.
                  </p>
                </div>
              </div>
            </div>
            <div className=" w-full h-full order-1 xl:order-2">
              <img className="w-full h-full object-cover object-right" src={aboutImg5} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
