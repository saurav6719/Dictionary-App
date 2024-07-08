import { createContext, useState } from "react";
import Header from "./components/Header";
import ResultList from "./components/ResultList";
import MyInfo from "./components/MyInfo";
import CustomLine from "./components/CustomLine"; // Import the new component

export const InputContext = createContext();

function App() {
  const [inputValue, setInputValue] = useState("");

  const value = {
    inputValue, setInputValue
  }

  return (
    <InputContext.Provider value={value}>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-8">
        <div className="w-full max-w-3xl mb-8">
          <Header />
          <ResultList />
        </div>
        <div className="w-full max-w-3xl mb-8">
          <MyInfo />
        </div>
        <CustomLine />
      </div>
    </InputContext.Provider>
  );
}

export default App;
