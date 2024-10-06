import * as Yup from "yup";

const isAdult = (dateOfBirth) => {
  if (!dateOfBirth) return false;

  let today = new Date();
  const dob = new Date(dateOfBirth);
  const age = today.getFullYear() - dob.getFullYear();
  const monthDifference = today.getMonth() - dob.getMonth();
  console.log(dob, age, monthDifference);
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < dob.getDate())
  ) {
    return age >= 18;
  }
  return age >= 18;
};

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(3, "Minimum three characters required")
    .required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid Email Format")
    .required("Email is required"),
  dateOfBirth: Yup.date()
    .required("Date of Birth is required")
    .test("age", "Must be at least 18 years old", (value) => isAdult(value)),
  residentialAddress: Yup.object().shape({
    street1: Yup.string().required("Street 1 is required"),
    street2: Yup.string().required("Street 2 is required"),
  }),
  permanentAddress: Yup.object().shape({
    street1: Yup.string().required("Street 1 is required"),
    street2: Yup.string().required("Street 2 is required"),
  }),
  documents: Yup.array()
    .of(
      Yup.object().shape({
        fileName: Yup.string().required("File Name is required"),
        fileType: Yup.string().required("File Type is required"),
        file: Yup.mixed()
          .required("File is required")
          .test("fileType", "Invalid file type", function (value) {
            const { path, createError } = this;
            const validTypes = {
              image: ["image/jpeg", "image/png"],
              pdf: ["application/pdf"],
            };
            const selectedType = this.resolve(Yup.ref(`${path}.fileType`));
            if (value && !validTypes[selectedType].includes(value.type)) {
              return createError({
                message: "Invalid File Type for selected File",
              });
            }
            return true;
          }),
      })
    )
    .min(2, "At least two documents are required"),
  sameAddress: Yup.boolean(),
});

export default validationSchema;
