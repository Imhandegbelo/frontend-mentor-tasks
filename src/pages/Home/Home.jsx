import { Link } from "react-router-dom";

export default function Home() {
  const pages = [
    {
      title: "Age Calculator",
      path: "/age_calculator",
    },
    {
      title: "Pricing App",
      path: "/pricing_app",
    },
    {
      title: "Rating App",
      path: "/rating_app",
    },
    {
      title: "Todo",
      path: "/todo",
    },
    {
      title: "TicTac Toe",
      path: "/tic_tac",
    },
    
  ];

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
      <div className="w-4/5 bg-slate-100">div 2</div>
    </div>
  );
}
