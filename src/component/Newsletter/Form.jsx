export default function Form({ email, error, onchange, onsubmit }) {
  return (
    <form onSubmit={onsubmit} className="mt-3">
      <label htmlFor="email" className="font-bold text-xs">
        Email address
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={onchange}
          placeholder={email === "" ? "email@company.com" : email}
          className={`w-full px-3 py-2 border border-gray-300 ${
            error.length > 0 ? "border-red-500" : ""
          } rounded hover:border-slate-900 focus:outline-none focus:border-slate-900`}
        />
      </label>
      <small className="text-red-500 text-xs">
        {error.length > 0 ? error : null}
      </small>
      <input
        type="submit"
        value="Subscribe to monthly newsletter"
        className="w-full text-sm md:text-[10px] text-white mt-4 py-2 rounded bg-slate-800 hover:bg-gradient-to-r hover:from-rose-400 hover:via-rose-400 hover:via-orange-400 hover:to-orange-400"
      />
    </form>
  );
}
