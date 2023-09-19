import founderImg from "../../assets/images/1.jpg";
const Founder = () => {
  return (
    <section className="py-24 lg:py-44">
      <div className="container_fluid">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="w-full h-full">
            <img className="w-full h-full object-cover object-right" src={founderImg} alt="" />
          </div>
          <div className="lg:col-span-2 text-zinc-500/80">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-poppins uppercase mb-10">JOHN DOE, FOUNDER</h2>
            <p className="md:text-justify text-zinc-500/80 text-xl md:text-3xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
        <div className="mt-10">
          {" "}
          <p className="md:text-justify text-zinc-500/80 text-xl md:text-3xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
            the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Founder;
