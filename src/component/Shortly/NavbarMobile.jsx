export default function NavbarMobile({ links, isActive }) {
    console.log({isActive})
  return (
    <div className="absolute left-0 top-16 bg-[#3b3054/] w-screen z-30">
      {isActive && (
        <div className="w-11/12 p-8 flex flex-col gap-4 bg-[#3b3054] text-white text-center font-bold rounded-2xl mx-auto w-10">
          {links.map((li) => (
            <a href="#" className="w-full text-center uppercase">
              {li}
            </a>
          ))}
          <hr />
          <div className="flex flex-col gap-4">
            <a href="#">Login</a>
            <a
              href="#"
              className="w-full text-white cursor-pointer py-3 px-5 rounded-3xl bg-[#2acfcf] hover:bg-[#2acfcf]/50 active:bg-[#2acfcf]/50"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
