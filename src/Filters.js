import React from "react";

const Filters = ({
  filterCondition,
  handleFilterChange,
  handleReset,
}) => {
  return (
    <div className="filters">
      <div className="filter__head">
        <span class="material-symbols-outlined">filter_alt</span>
        <h4>Filter By</h4>
      </div>

      <div className="filter__container">
        <label>
          Age Range:
          <select
            name="ageRange"
            value={filterCondition.ageRange}
            onChange={handleFilterChange}
          >
            <option value="">All Ages</option>
            <option value="18-25">18-25</option>
            <option value="26-35">26-35</option>
            <option value="36-45">36-45</option>
            <option value="36-45">46-100</option>
          </select>
        </label>

        <label>
          Nationality:
          <select
            name="nationality"
            value={filterCondition.nationality}
            onChange={handleFilterChange}
          >
            <option value="">All Nationalities</option>
            <option value="US">USA</option>
            <option value="CA">Canada</option>
            <option value="AU">Australia</option>
            <option value="FR">France</option>
            <option value="NG">Nigeria</option>
            <option value="UK">United Kingdom</option>
            <option value="DE">Germany</option>
            <option value="JP">Japan</option>
          </select>
        </label>

        <label>
          Gender:
          <select
            name="gender"
            value={filterCondition.gender}
            onChange={handleFilterChange}
          >
            <option value="">All Genders</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <div className="reset__button">
          <button
            onClick={handleReset}
            disabled={
              filterCondition.ageRange === "" &&
              filterCondition.nationality === "" &&
              filterCondition.gender === ""
            }
          >
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
