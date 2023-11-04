export default function Card({ data, className, ischecked }) {
  return (
    <div
      className={`${className} z-50 flex items-center w-full lg:w-[25vw] text-center p-6 ${
        data.isWhite === true
          ? "bg-white h-[30rem] text-[#4a4d5e]"
          : "h-[30rem] lg:h-[32rem] bg-gradient-to-br from-[#a3a8f0] to-[#696fdd] text-white"
      } `}
    >
      <div className="flex flex-col gap-6 w-full">
        <h2 className="">{data.title}</h2>
        <p className="text-5xl xl:text-6xl font-bold">
          ${ischecked ? data.monthlyPrice : data.yearlyPrice}
        </p>
        <div className="flex flex-col border-y items-center">
          {data.description.map((desc, index) => (
            <div key={`desc-${index}`} className="p-3 border-y border-gray-100 w-full">
              <p>{desc}</p>
            </div>
          ))}
        </div>
        <button
          className={`rounded-lg uppercase tracking-[0.2rem] border border-transparent text-sm ${
            !data.isWhite === true
              ? "bg-white text-[#696fdd] hover:bg-transparent hover:text-white hover:border-white"
              : "text-white border-[#696fdd] bg-gradient-to-r from-[#a3a8f0] to-[#696fdd] hover:bg-none hover:border-[#696fdd] hover:transition-all hover:duration-800 hover:text-[#696fdd]"
          } py-4`}
        >
          Learn More
        </button>
      </div>
    </div>
  );
}
