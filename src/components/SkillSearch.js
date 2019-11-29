import React from "react";

const SkillSearch = ({ onInputChange, field, handleSubmit }) => {
  return (
    <div className="input-container">
      <form onSubmit={handleSubmit}>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Search for your dream job"
          onChange={e => onInputChange(e)}
        />
      </form>
    </div>
  );
};

export default SkillSearch;
