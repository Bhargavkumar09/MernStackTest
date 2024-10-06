import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import AddressInput from "../components/AddressInput";
import DocumentInput from "../components/DocumentInput";
import Input from "../components/Input";
import validationSchema from "../utils/validation";

function TestForm() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      dateOfBirth: "",
      residentialAddress: { street1: "", street2: "" },
      permanentAddress: { street1: "", street2: "" },
      documents: [
        { fileName: "", fileType: "", file: null },
        { fileName: "", fileType: "", file: null },
      ],
      sameAddress: true,
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post("http://localhost:8000", values);
        console.log("wow form submitted");
      } catch (error) {
        console.error("oops error occurred");
      }
    },
  });
  const addDocument = () => {
    formik.setFieldValue("documents", [
      ...formik.values.documents,
      { fileName: "", fileType: "", file: null }, // New empty document object
    ]);
  };
  const removeDocument = (index) => {
    const updatedDocuments = formik.values.documents.filter(
      (_, i) => i !== index
    );
    formik.setFieldValue("documents", updatedDocuments);
  };

  return (
    <main className="w-full p-8 mx-auto bg-white rounded-lg shadow-md">
      <h1 className="mb-6 text-2xl font-bold text-center">
        MERN STACK MACHINE TEST
      </h1>
      <form onSubmit={formik.handleSubmit} className="px-8">
        <section className="flex flex-wrap justify-center gap-6">
          <Input
            type="text"
            id="firstName"
            label="First Name"
            placeholder={"Enter your first name here.."}
            required={true}
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.firstName}
            touched={formik.touched.firstName}
          />
          <Input
            type="text"
            id="lastName"
            label="Last Name"
            placeholder={"Enter your last name here.."}
            required={true}
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.lastName}
            touched={formik.touched.lastName}
          />
          <Input
            type="email"
            id="email"
            label="Email"
            placeholder={"ex: myname@example.com"}
            required={true}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.email}
            touched={formik.touched.email}
          />
          <Input
            type="date"
            id="dateOfBirth"
            label="Date of Birth"
            placeholder="Date of Birth"
            required={true}
            value={formik.values.dateOfBirth}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.dateOfBirth}
            touched={formik.touched.dateOfBirth}
          />
          <AddressInput
            title="Residential Address"
            value={formik.values.residentialAddress}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            touched={formik.touched.residentialAddress}
            errors={formik.errors.residentialAddress}
            required={true}
          />
          <section className=" w-full flex items-center md:w-[81%] my-4">
            <input
              id="sameAddress"
              type="checkbox"
              value={formik.values.sameAddress}
              className="w-5 h-5"
            />
            <label className="ml-2 " htmlFor="sameAddress">
              Same as Residential Address
            </label>
          </section>
          <AddressInput
            title="Permanent Address"
            value={formik.values.permanentAddress}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            touched={formik.touched.permanentAddress}
            errors={formik.errors.permanentAddress}
            disabled={formik.values.sameAddress}
            required={true}
          />
          <h2 className="w-[81%]">Upload Documents</h2>
          <DocumentInput
            documents={formik.values.documents}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            addDocuments={addDocument}
            removeDocuments={removeDocument}
            setFieldValue={formik.setFieldValue}
            required={true}
          />
          <button className="w-full md:w-[81%] px-4 py-2 mt-6 font-bold text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-600">
            Submit
          </button>
        </section>
      </form>
    </main>
  );
}

export default TestForm;
