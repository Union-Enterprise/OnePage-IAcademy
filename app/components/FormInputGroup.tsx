import { useState } from "react";

interface FormInputGroupProps {
  label?: string;
  isTextArea?: boolean;
  name?: string;
}

export default function FormInputGroup({
  label = "",
  isTextArea = false,
  name = "",
}: FormInputGroupProps) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="flex relative flex-col mb-6"> {/* Alinhamento em coluna */}
      {isTextArea ? (
        <textarea
          name={name}
          value={inputValue}
          onChange={handleInputChange}
          cols={30}
          rows={10}
          className="w-full h-32 resize-none py-4 bg-transparent border-b-2 border-black outline-none focus:border-blue-500 transition duration-200 peer"
        ></textarea>
      ) : (
        <input
          name={name}
          value={inputValue}
          onChange={handleInputChange}
          type="text"
          className="w-full py-4 bg-transparent border-b-2 border-black outline-none focus:border-blue-500 transition duration-200 peer"
          autoComplete="off"
        />
      )}
      <label
        className={`${isTextArea ? "top-2" : ""} text-lg text-black opacity-80 
          peer-focus:opacity-100 peer-focus:-translate-y-6 absolute 
          duration-500 pointer-events-none ${inputValue ? "-translate-y-6" : "translate-y-2"
          }`}
      >
        {label}
      </label>
    </div>
  );
}

// Componente Principal
export function ContactForm() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Send us a message 🚀
        </h2>
        <FormInputGroup label="Full name*" name="fullName" />
        <FormInputGroup label="Email address*" name="email" />
        <FormInputGroup label="Subject" name="subject" />
        <FormInputGroup
          label="Tell us more about your project*"
          name="projectDetails"
          isTextArea={true}
        />
        <button className="w-full py-3 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200">
          Send message
        </button>
      </div>
    </div>
  );
}
