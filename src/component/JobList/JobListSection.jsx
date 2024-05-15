export default function JobListSection({ job_list = [], onApplyFilter }) {
  // Takes the tag and passes it to onAppplyFilter
  const handleFilterClick = (tag) => {
    onApplyFilter(tag);
  };

  return (
    <section className="bg-[#effafa] px-6 lg:px-36 pt-20 pb-10">
      {job_list.map((job) => (
        <div
          key={`job-${job.id}`}
          className={`flex flex-col md:flex-row justify-between items-center border-l-8 md:border-l-8 ${
            job.featured ? "border-[#5ba4a4]" : "border-white"
          } bg-white py-5 my-16 md:my-4 shadow-xl md:shodow:lg shadow-[#5ba4a4]/30 p-6 rounded-md`}
        >
          <div className="flex flex-col w-full md:flex-row gap-6">
            <img
              src={job.logo}
              alt={job.company}
              className="-mt-14 h-20 w-20 md:h-24 md:w-24 md:mt-0"
            />
            <div className="">
              <h1 className="font-bold text-md md:text-xl text-[#5ba4a4] md:tracking-[2px]">
                {job.company}
                {job.new ? (
                  <span className="bg-[#5ba4a4] rounded-l-full rounded-r-full py-px px-2 md:px-3 text-sm md:text-lg font-medium text-white ml-2 mr-2 md:mr-4 tracking-none">
                    NEW!
                  </span>
                ) : null}
                {job.featured ? (
                  <span className="bg-black rounded-l-full rounded-r-full py-px px-3 text-sm md:text-lg font-medium text-white tracking-none">
                    FEATURED
                  </span>
                ) : null}
              </h1>
              <h2 className="font-bold text-xl md:text-2xl hover:text-[#5ba4a4]">
                {job.position}
              </h2>
              <p className="font-medium text-gray-400">
                <span>{job.postedAt}</span>
                <span className="mx-2 font-black">{" · "}</span>
                <span>{job.contract}</span>
                <span className="mx-2 font-black">{" · "}</span>
                <span>{job.location}</span>
              </p>
            </div>
          </div>
          <p className="border-b-2 border-gray-300 w-full my-4 md:hidden "></p>
          <div className="flex gap-4 w-full md:justify-end flex-wrap">
            {[job.role, job.level].concat(job.languages).map((tag, index) => (
              <button
                key={`${index}-${job.company}`}
                onClick={() => handleFilterClick(tag)}
                className="bg-[#eef6f6] text-[#5ba4a4] font-medium px-2 py-1 rounded hover:bg-[#5ba4a4] hover:text-white"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
