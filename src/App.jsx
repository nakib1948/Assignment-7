import React, { useState } from "react";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [displayTexts, setDisplayTexts] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const handleInputChange = (event) => {
    if (event.target.value !== "") setInputText(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (inputText !== "") {
      setDisplayTexts([...displayTexts, inputText]);
      setInputText("");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...displayTexts];
    updatedTasks.splice(index, 1);
    setDisplayTexts(updatedTasks);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <header className="py-6 text-purple text-2xl font-bold">
        <h1>My Todo App</h1>
      </header>
      <section className="p-8">
        <form onSubmit={handleFormSubmit} className="mb-4">
          <textarea
            value={inputText}
            onChange={handleInputChange}
            rows="4"
            cols="50"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
            placeholder="What will I do Today"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Add Task
          </button>
        </form>
        {displayTexts.map((text, index) => (
          <div key={index} className="flex items-center join">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              className="checkbox checkbox-primary join-item"
            />
            {!isChecked ? (
              <p className="bg-white text-center rounded-lg py-3 mt-4 mx-2 shadow-md flex-grow join-item">
                {text}
              </p>
            ) : (
              <p className="bg-white text-center rounded-lg py-3 mt-4 mx-2 shadow-md flex-grow join-item">
                Task Completed!!
              </p>
            )}

            <button
              className="btn btn-warning join-item mt-2"
              onClick={() => handleDeleteTask(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default App;
