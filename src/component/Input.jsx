export default function Input(props) {
  const { id, error, label, hint, className, ...inputProps } = props;
  const hasError = !!error;
  const classNames = ["", className];

  if (hasError) {
    classNames.unshift("border-[#ff5757]");
  }

  return (
    <div className={classNames.join(" ")}>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...inputProps} />
      {(!!hint || hasError) && (
        <span className="text-sm text-[#ff5757]">
          {hasError ? error : hint}
        </span>
      )}
    </div>
  );
}
