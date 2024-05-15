import { useEffect, useState } from "react";
import { job_data } from "../../data/staticJobList";
import JobListSection from "../../component/JobList/JobListSection";
import FilterCard from "../../component/JobList/FilterCard";

export default function StaticJobListing() {

  {
    document.title = "Frontend Mentor | Static Job List";
  }

  const [tagList, setTagList] = useState([]);
  const [data, setData] = useState(job_data);

  // if taglist is not empty
  // return jobs where job.language U job.tools includes tag
  const updateJobList = () => {
    if (tagList.length > 0) {
      let newTagList = [];

      // checks if each tag in exist in job languages or tools and updates newTagList
      for (let i = 0; i < tagList.length; i++) {
        for (let j = 0; j < job_data.length; j++) {
          let checklist = job_data[j].languages.concat(job_data[j].tools);

          checklist.push(job_data[j].level, job_data[j].role);

          if (checklist.includes(tagList[i])) {
            newTagList.push(job_data[j]);
          }
        }
      }

      setData(newTagList);
    } else setData(job_data);
  };

  useEffect(() => {
    updateJobList();
  }, [tagList]);

  const addTag = (tag) => {
    if (!tagList.includes(tag)) setTagList([...tagList, tag]);
  };

  const clearTags = () => {
    setTagList([]);
  };

  const removeTag = (tag) => {
    // Use filter to return only elements that are not 'tag'
    let newAr = tagList.filter((tech) => tech !== tag);

    setTagList(newAr);
  };

  return (
    <div className="font-League+Spartan">
      <header className="h-44 md:h-36 bg-[#5ba4a4]">
        <div className="px-6 lg:px-36 bg-job-listing-mobile md:bg-job-listing-desktop bg-cover bg-no-repeat h-full w-full relative">
          <div
            className={`${
              tagList?.length > 0
                ? "bg-white rounded-md px-10 py-6 flex justify-between"
                : "hidden"
            } absolute w-[80%] -bottom-10`}
          >
            <div className="flex gap-6 flex-wrap">
              {tagList?.map((tag, index) => (
                <>
                  <FilterCard
                    key={`${index}-tag`}
                    tag={tag}
                    onRemoveFilter={(tag) => removeTag(tag)}
                  />
                </>
              ))}
            </div>
            <button
              onClick={clearTags}
              className="font-bold text-xl text-gray-400 hover:text-[#5ba4a4] hover:underline"
            >
              Clear
            </button>
          </div>
        </div>
      </header>

      <JobListSection job_list={data} onApplyFilter={(tag) => addTag(tag)} />
    </div>
  );
}
