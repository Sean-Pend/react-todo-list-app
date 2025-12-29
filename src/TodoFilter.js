import React from "react";

function TodoFilter({ filter, setFilter }) {
  return (
    <div className="filter-buttons">
      {/* Render three filter buttons */}
      {["All", "Active", "Completed"].map((f) => (
        <button
          key={f} // unique key for React
          className={filter === f ? "active" : ""} // highlight active filter
          onClick={() => setFilter(f)} // change filter when clicked
        >
          {f}
        </button>
      ))}
    </div>
  );
}

export default TodoFilter;