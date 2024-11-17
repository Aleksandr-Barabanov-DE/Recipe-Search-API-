import React from "react";

export default function RecipesInputQuery({
  inputValue,
  handleInputChange,
  onKeyDown,
}) {
  const handleLocalKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onKeyDown(e);
    }
  };

  return (
    <div>
      <form>
        <label>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleLocalKeyDown}
            placeholder="What would you like to cook today?"
          />
        </label>
      </form>
    </div>
  );
}
