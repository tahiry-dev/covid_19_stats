import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import uuid from 'react-uuid'
import { Accordion, Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'


const StatsComponent = () => {
    const stats = useSelector(state => state.wordStats.stats);
    const renderList = stats.map((stat) => {
        const { continent, todayDeaths, todayCases, todayRecovered, countries } = stat;
        return (
            <div className="myContainer" key={uuid()}>
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
                            <Accordion className="accordion">
                                <Card>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        Stats by country in {continent}
                                    </Accordion.Toggle>

                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            {countries.map((value, index) => {
                                                return (
                                                    <div className="ui list" key={index}>
                                                        <div className="item">
                                                            <Link to={`/stat/${index}`}><FontAwesomeIcon icon={faChevronRight} /> {value}</Link>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        );
    });
    return <div>{renderList}</div>;
};

export default StatsComponent;