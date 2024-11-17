import React from "react";

const IntoleranceSelect = ({
  selectedIntolerance,
  handleIntoleranceChange,
}) => {
  return (
    <div>
      <label htmlFor="diet" className="visually-hidden">
        Intolerance:
      </label>
      <select
        id="diet"
        value={selectedIntolerance}
        onChange={handleIntoleranceChange}
        aria-label="Choose Intolerance"
      >
        <option value="">-- Select Inrolerance --</option>
        <option value="dairy">Diary</option>
        <option value="egg">Egg</option>
        <option value="gluten">Gluten</option>
        <option value="grain">Grain</option>
        <option value="peanut">Peanut</option>
        <option value="seafood">Seafood</option>
        <option value="sesame">Sesame</option>
        <option value="shellfish">Shellfish</option>
        <option value="soy">Soy</option>
        <option value="sulfite">Sulfite</option>
        <option value="treeNut">Tree Nut</option>
        <option value="wheat">Wheat</option>
      </select>
    </div>
  );
};

export default IntoleranceSelect;
