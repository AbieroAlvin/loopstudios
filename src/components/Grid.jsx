const Grid = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-6 gap-3 w-full mx-auto justify-center items-center">
      <div className="md:bg-[url('./assets/images/desktop/image-deep-earth.jpg')] bg-[url('./assets/images/mobile/image-deep-earth.jpg')] bg-cover bg-no-repeat h-[200px]  md:h-[400px] px-4 py-6 relative cursor-pointer hover:opacity-50">
        <div className="absolute md:bottom-8 md:left-4 left-4  bottom-[20%] md:w-[40%] w-[30%] ">
          <h1 className="text-white uppercase font-alata text-2xl ">
            Deep Earth
          </h1>
        </div>
      </div>
      <div className="md:bg-[url('./assets/images/desktop/image-night-arcade.jpg')] bg-[url('./assets/images/mobile/image-night-arcade.jpg')] bg-cover bg-no-repeat h-[200px]  md:h-[400px] px-4 py-6 relative cursor-pointer hover:opacity-50">
        <div className="absolute md:bottom-8 md:left-4 left-4  bottom-[20%] w-[40%]">
          <h1 className="text-white uppercase font-alata text-2xl">
            Night Arcade
          </h1>
        </div>
      </div>
      <div className="md:bg-[url('./assets/images/desktop/image-soccer-team.jpg')] bg-[url('./assets/images/mobile/image-soccer-team.jpg')] bg-cover bg-no-repeat h-[200px]  md:h-[400px] px-4 py-6 relative cursor-pointer hover:opacity-50">
        <div className="absolute md:bottom-8 md:left-4 left-4  bottom-[20%] w-[40%]">
          <h1 className="text-white uppercase font-alata text-2xl">
            Soccer Team Vr
          </h1>
        </div>
      </div>
      <div className="md:bg-[url('./assets/images/desktop/image-grid.jpg')] bg-[url('./assets/images/mobile/image-grid.jpg')] bg-cover bg-no-repeat h-[200px]  md:h-[400px] px-4 py-6 relative cursor-pointer hover:opacity-50">
        <div className="absolute md:bottom-8 md:left-4 left-4  bottom-[20%] md:w-[30%] w-[20%]">
          <h1 className="text-white uppercase font-alata text-2xl">The Grid</h1>
        </div>
      </div>
      <div className="md:bg-[url('./assets/images/desktop/image-from-above.jpg')] bg-[url('./assets/images/mobile/image-from-above.jpg')] bg-cover bg-no-repeat h-[200px]  md:h-[400px] px-4 py-6 relative cursor-pointer hover:opacity-50">
        <div className="absolute md:bottom-8 md:left-4 left-4  bottom-[20%] md:w-[50%] w-[40%]">
          <h1 className="text-white uppercase font-alata text-2xl">
            From up above vr
          </h1>
        </div>
      </div>
      <div className="md:bg-[url('./assets/images/desktop/image-pocket-borealis.jpg')] bg-[url('./assets/images/mobile/image-pocket-borealis.jpg')] bg-cover bg-no-repeat h-[200px]  md:h-[400px] px-4 py-6 relative cursor-pointer hover:opacity-50">
        <div className="absolute md:bottom-8 md:left-4 left-4 bottom-[20%] md:w-[50%] w-[40%]">
          <h1 className="text-white uppercase font-alata text-2xl">
            Pocket Borealis
          </h1>
        </div>
      </div>
      <div className="md:bg-[url('./assets/images/desktop/image-curiosity.jpg')] bg-[url('./assets/images/mobile/image-curiosity.jpg')] bg-cover bg-no-repeat h-[200px]  md:h-[400px] px-4 py-6 relative cursor-pointer hover:opacity-50">
        <div className="absolute md:bottom-8 md:left-4 left-4  bottom-[20%] md:w-[50%] w-[40%]">
          <h1 className="text-white uppercase font-alata text-2xl">
            The Curiosity
          </h1>
        </div>
      </div>
      <div className="md:bg-[url('./assets/images/desktop/image-fisheye.jpg')] bg-[url('./assets/images/mobile/image-fisheye.jpg')] bg-cover bg-no-repeat h-[200px]  md:h-[400px] px-4 py-6 relative cursor-pointer hover:opacity-50">
        <div className="absolute md:bottom-8 md:left-4 left-4  bottom-[20%] md:w-[50%] w-[40%]">
          <h1 className="text-white uppercase font-alata text-2xl">
            Make It Fisheye
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Grid;
