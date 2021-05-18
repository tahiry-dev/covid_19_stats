import React from "react";
// import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const StatsComponent = () => {
    const stats = useSelector(state => state.wordStats.stats);
    const renderList = stats.map((stat) => {
        const { id, continent, todayDeaths, todayCases, todayRecovered, tests } = stat;
        return (
            <div key={id}>
                <p>Continent: {continent}</p>
                <p>todayDeaths: {todayDeaths}</p>
                <p>todayCases: {todayCases}</p>
                <p>todayRecovered: {todayRecovered}</p>
                <p>Filled test: {tests}</p>
                <hr />
            </div>
        );
    });
    return <div>{renderList}</div>;
};

export default StatsComponent;