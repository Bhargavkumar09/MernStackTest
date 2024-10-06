function Input({
  label,
  id,
  type,
  value,
  onChange,
  onBlur,
  error,
  touched,
  placeholder,
  required,
  description,
}) {
  return (
    <>
      <section className="flex flex-col w-full mb-4 md:w-2/5">
        <label htmlFor={id}>
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
        <input
          placeholder={placeholder}
          className={`p-2 border rounded-md ${
            error && touched ? "border-red-500" : "border-gray-300"
          }`}
          id={id}
          type={type}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />
        {error && touched && <p className="text-sm text-red-500">{error}</p>}
      </section>
    </>
  );
}

export default Input;
