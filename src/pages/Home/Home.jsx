import { Link } from "react-router-dom";
import pages from "../../data/pages.json";
import details from "../../data/homedata";

export default function Home() {
  return (
    <div className="flex bg-slate-900 w-[100vw] max-w-[1440px] mx-auto h-[100vh]">
      <div className="flex flex-col w-1/5 pt-6 bg-slate-500 text-white">
        {pages.map((page, index) => (
          <Link
            to={page.path}
            key={index}
            className="w-full text-white py-2 px-4 hover:bg-slate-600"
          >
            {page.title}
          </Link>
        ))}
      </div>
      <div className="w-4/5 bg-slate-100 overflow-y-scroll py-6 px-12">
        {details.map((detail, index) => (
          <section
            key={`solution-${index}`}
            id={detail.id}
            className="flex flex-col gap-4 py-6"
          >
            <h1 className="text-3xl font-bold">{detail.title}</h1>
            <img src={detail.image} alt={`${detail.title}-image`} />
            <p className="">{detail.description}</p>
            <Link
              to={detail.url}
              className="bg-emerald-800 text-white py-4 px-8 rounded-md hover:bg-emerald-600 transition-all duration-1000 w-fit"
            >
              Visit solution
            </Link>
          </section>
        ))}
      </div>
    </div>
  );
}
