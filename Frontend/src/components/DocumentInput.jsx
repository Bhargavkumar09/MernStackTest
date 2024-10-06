import Plus from "../assets/plus.png";

function DocumentInput({ onAdd, onDelete, isRequired, canDelete }) {
  return (
    <section className="w-full md:w-[81%]">
      <section className="flex flex-wrap gap-4 mb-4 *:flex *:flex-col items-center.">
        <section className="w-full md:w-1/4">
          <label htmlFor="fileName">
            File Name
            {isRequired && <span className="text-red-500">*</span>}
          </label>
          <input
            className="p-2 border border-gray-300 rounded-md"
            id="fileName"
            type="text"
          />
        </section>
        <section className="w-full md:w-1/4">
          <label htmlFor="fileType">
            Type of File
            {isRequired && <span className="text-red-500">*</span>}
          </label>
          <div className="upload-icon down-icon"></div>

          <select
            name=""
            id="fileType"
            className="p-2 mt-1 border border-gray-300 rounded-md"
          >
            <option value="">Select File Type</option>
            <option value="image">Image</option>
            <option value="pdf">PDF</option>
          </select>
          <p>(image,pdf)</p>
        </section>
        <section className="w-full md:w-1/4">
          <label htmlFor="uploadFile">
            Upload Document
            {isRequired && <span className="text-red-500">*</span>}
          </label>
          <div className="upload-icon"></div>
          <input
            className="p-2 border border-gray-300 rounded-md"
            id="uploadFile"
            type="file"
          />
        </section>
        <section className="grid items-center justify-center">
          {!canDelete ? (
            <button className="mb-3">
              <img src={Plus} alt="" className="w-[70%]" />
            </button>
          ) : (
            <button>-</button>
          )}
        </section>
      </section>
    </section>
  );
}

export default DocumentInput;
