import React from "react";
import FilterButton from "./filter-button";

const Filters = () => (
    <div className="filters-list">
        <FilterButton text="All" isActive/>
        <FilterButton text="Pending" />
        <FilterButton text="Done" />
    </div>
);

export default Filters;
