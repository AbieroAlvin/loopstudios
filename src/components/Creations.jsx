import Grid from "./Grid";
const Creations = () => {
  return (
    <section className="mx-auto w-full mb-16">
      <div className="hidden md:flex flex-col gap-12 w-full mx-auto max-w-[1080px] md:px-0 px-4">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-4xl font-alata uppercase text-[var(--V-Dark-Gray)]">
            Our Creations
          </h1>
          <button className="uppercase border-[var(--V-Dark-Gray)] border-[1px] font-alata px-8 text-[16px] py-1 hover:bg-[var(--Black)] hover:text-[var(--White)]">
            See All
          </button>
        </div>
        <Grid />
      </div>
      <div className="w-full mx-auto md:hidden items-center flex flex-col gap-12 md:px-0 px-4">
        <h1 className="text-4xl font-alata uppercase text-[var(--V-Dark-Gray)]">
          Our Creations
        </h1>

        <Grid />
        <button className="uppercase border-[var(--V-Dark-Gray)] border-[1px] font-alata px-8 text-[16px] py-1 hover:bg-[var(--Black)] hover:text-[var(--White)]">
          See All
        </button>
      </div>
    </section>
  );
};

export default Creations;
