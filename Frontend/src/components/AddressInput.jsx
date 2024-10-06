function AddressInput({
  title,
  required,
  handleChange,
  handleBlur,
  touched,
  errors,
  disabled,
  value,
}) {
  return (
    <>
      <section className=" w-full md:w-[81%] mb-4">
        <h2 className="">{title}</h2>
        <section className="flex flex-row justify-center gap-6 ">
          <section className="flex flex-col w-full md:w-1/2">
            <label className="text-gray-700" htmlFor="street1">
              Street 1{required && <span className="text-red-500">*</span>}
            </label>
            <input
              type="text"
              id="street1"
              value={value.street1}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={disabled}
              className={`rounded-md p-2 border ${
                errors?.street1 && touched?.street1
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            {errors?.street1 && touched?.street1 && (
              <p className="text-sm text-red-500">{errors.street1}</p>
            )}
          </section>
          <section className="flex flex-col w-full md:w-1/2">
            <label className="text-gray-700" htmlFor="street2">
              Street 2{required && <span className="text-red-500">*</span>}
            </label>
            <input
              type="text"
              value={value.street2}
              id="street2"
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={disabled}
              className={`rounded-md p-2 border ${
                errors?.street2 && touched?.street2
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            {errors?.street2 && touched?.street2 && (
              <p className="text-sm text-red-500">{errors.street2}</p>
            )}
          </section>
        </section>
      </section>
    </>
  );
}

export default AddressInput;
