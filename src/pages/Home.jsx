import { Link } from "react-router-dom";

export default function Home() {
  const pages = ["Age Calculator", "Pricing App", "Rating App"];
  return (
    <div className="flex bg-slate-700 w-full min-h-100vh text-white">
      <div className="bg-slate-500 flex flex-col">
        <ul>
          {pages.map((page) => {
            <li className="bg-stone-800 text-white hover:">{page}</li>;
          })}
        </ul>
      </div>
      <div className="bg-slate-300 text-dark">div 2</div>
    </div>
  );
}
