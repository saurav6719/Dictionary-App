import { useContext, useState } from "react";
import { InputContext } from "../App";

const Header = () => {
  const [value, setValue] = useState("");
  const { inputValue, setInputValue } = useContext(InputContext);

  const handleInputChange = (e) => setValue(e.target.value);

  const handleSubmit = () => {
    setInputValue(value);
    setValue("");
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      setInputValue(value);
      setValue("");
    }
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-white mb-4">Dictionary</h1>
      <p className="text-center mt-1 mb-6 text-gray-400 text-lg">Find definitions for any word</p>

      <div className="flex items-center justify-center mt-5">
        <div className="flex border-2 border-gray-300 rounded overflow-hidden">
          <input
            className="px-4 py-2 w-64 md:w-80 text-gray-900"
            type="text"
            placeholder="Search..."
            onChange={handleInputChange}
            value={value}
            onKeyDown={handleInputKeyDown}
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 transition-colors duration-300 border-l px-4 py-2 text-white"
            onClick={handleSubmit}
          >
            Search
          </button>
        </div>
      </div>

      {inputValue && (
        <h3 className="text-gray-50 text-center mt-6">
          Result for: <span className="text-white font-bold">{inputValue}</span>
        </h3>
      )}
    </div>
  );
};

export default Header;
