import gridDesk from "../assets/images/desktop/image-interactive.jpg";
import gridMobile from "../assets/images/mobile/image-interactive.jpg";

const VRSection = () => {
  return (
    <section className="w-full mx-auto mt-24 md:mb-0 mb-6">
      <div className="w-full mx-auto max-w-[1080px]  md:px-0 px-4">
        <div>
          <img src={gridDesk} alt="Grid Image" className="md:block hidden " />
          <img src={gridMobile} alt="Grid Image" className="md:hidden block" />
        </div>
        <div className="md:shadow-xl bg-[var(--White)] md:px-28 md:py-20 px-12 py-12 md:w-[60%] md:relative top-[-18rem] left-[50%] md:text-left text-center">
          <h1
            className="md:text-5xl text-4xl font-alata text-[var(--Black)]
          uppercase"
          >
            The leader in interactive VR
          </h1>
          <p className="font-josefinSans text-[15px] mt-6 text-[var(--V-Dark-Gray)]">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VRSection;
