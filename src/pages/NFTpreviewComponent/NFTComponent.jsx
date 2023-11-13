import view from "../../assets/NFTComponent/icon-view.svg";
import clock from "../../assets/NFTComponent/icon-clock.svg";
import ethereum from "../../assets/NFTComponent/icon-ethereum.svg";
import avatar from "../../assets/NFTComponent/image-avatar.png";
import equilibrium from "../../assets/NFTComponent/image-equilibrium.jpg";

export default function NFTComponent() {
  return (
    <main className="bg-slate-900 flex justify-center items-center h-screen p-6 ">
      <div className="relative bg-slate-800 p-6 w-full sm:w-3/4 md:max-w-sm rounded-2xl h-fit shadow-2xl">
        <div className="relative h-72">
          <div className="w-full h-72 rounded-2xl pb-4">
            <img
              src={equilibrium}
              alt="image-equilibrium"
              className="w-full rounded-2xl h-72"
            />
          </div>
          <div className="absolute w-full h-72 top-0 opacity-0 hover:opacity-50 rounded-2xl bg-cyan-300 z-10">
            <div className="flex justify-center items-center hover:">
              <img
                src={view}
                alt="icon-view"
                className="absolute h-16 top-[43%]"
              />
            </div>
          </div>
        </div>
        <h1 className="text-white text-2xl font-semibold hover:text-cyan-300 mt-4">
          Equilibrium #3429
        </h1>
        <div className="mb-4 pb-4 border-b border-[#2f415b]">
          <p className="text-md leading-5 text-[#8bacda] py-5">
            Our Equilibrium collection promotes balance and calm.
          </p>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <img src={ethereum} alt="ethereum icon " className="w-4 h-5" />
              <p className="text-cyan-300 font-normal">0.041 ETH</p>
            </div>
            <div className="flex gap-2">
              <img src={clock} alt="clock icon" className="w-5 h-5" />
              <p className="text-[#8bacda]">3 days left</p>
            </div>
          </div>
        </div>
        <footer className="flex gap-4 items-center">
          <div className="border-2 border-white rounded-full">
            <img src={avatar} alt="image avatar" className="w-10 h-10" />
          </div>
          <span className="text-[#8bacda]">
            Creation of
            <a href="#" className="text-white hover:text-cyan-200">
              {" "}
              Jules Wyvern
            </a>
          </span>
        </footer>
      </div>
    </main>
  );
}
