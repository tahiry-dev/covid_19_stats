import React from "react";
// import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import uuid from 'react-uuid'


const StatsComponent = () => {
    const stats = useSelector(state => state.wordStats.stats);
    const renderList = stats.map((stat) => {
        const { continent, todayDeaths, todayCases, todayRecovered } = stat;
        return (
            <div className="container" key={uuid()}>
                <div className="ui items">
                    <div className="item">
                        <div className="image">
                            <img src={require(`../images/${continent}.jpg`).default} alt={continent} />
                        </div>
                        <div className="content">
                            <h2>{continent} Today Stats</h2>
                            <div className="ui mini statistics">
                                <div className="orange statistic">
                                    <div className="value">
                                        {todayCases}
                                    </div>
                                    <div className="label">
                                        Cases
                                    </div>
                                </div>

                                <div className="red statistic">
                                    <div className="value">
                                        {todayDeaths}
                                    </div>
                                    <div className="label">
                                        Deaths
                                    </div>
                                </div>

                                <div className="green statistic">
                                    <div className="value">
                                        {todayRecovered}
                                    </div>
                                    <div className="label">
                                        Recovered
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ui accordion">
                    <div class="title">
                        <i class="dropdown icon"></i>
                              Stats by country
                         </div>
                    <div class="content">
                        <p class="transition hidden">TEST</p>
                    </div>
                </div>
            </div>
        );
    });
    return <div>{renderList}</div>;
};

export default StatsComponent;