export default function Input(props) {
  const { id, error, label, hint, className, ...inputProps } = props;
  const hasError = !!error;
  // const classNames = ["", className];

  // if (hasError) {
  //   classNames.unshift("border-[#ff5757]");
  // }

  return (
    // <div className={classNames.join(" ")}>
    <div className="flex flex-col gap-2 md:basis-1/4">
      <label
        htmlFor={id}
        className={`${
          hasError ? "border-[#ff5757]" : ""
        } text-left font-bold text-neutral-500 tracking-widest`}
      >
        {label}
      </label>
      <input
        id={id}
        {...inputProps}
        className="w-full text-[2rem] font-bold p-3 md:gp-4 border rounded"
      />
      {(!!hint || hasError) && (
        <span className="text-xs text-[#ff5757]">
          {hasError ? error : hint}
        </span>
      )}
    </div>
  );
}

{
  /* <div className="flex flex-col gap-2 md:basis-1/4">
  <label
    htmlFor="year"
    className="text-left font-bold text-neutral-500 tracking-widest"
  >
    YEAR
  </label>
  <input
    type="text"
    id="year"
    placeholder="YYYY"
    onChange={(e) => setYear(e.target.value)}
    className="w-full text-[2rem] font-bold p-3 md:gp-4 border rounded invalid:border-rose-600"
  />
  <small className="text-xs text-rose-400"></small>
</div>; */
}
