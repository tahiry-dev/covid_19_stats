import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Accordion, Button, Card } from 'react-bootstrap';
import propTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import uuid from 'react-uuid';
import { filterContinent } from '../redux/actions/statsActions';

const CountryLists = ({ continent }) => {
  const countryStats = useSelector((state) => state.countryStats);
  const allCountries = countryStats.countries;

  const dispatch = useDispatch();
  const fetchCountryStats = async (continent) => {
    const response = await axios
      .get(`https://corona.lmao.ninja/v2/continents/${continent}?yesterday&strict`)
      .catch((err) => err);
    dispatch(filterContinent(response.data));
  };

  useEffect(() => {
    fetchCountryStats(continent);
  }, []);

  return (
    <Accordion className="accordion">
      <Card>
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
          Stats by country in
          {' '}
          {continent}
        </Accordion.Toggle>

        <Accordion.Collapse eventKey="0">
          <Card.Body>
            {allCountries.map((value) => (
              <div className="ui list" key={uuid()}>
                <div className="item">
                  <Link to={`/stat/${value}`}>
                    <FontAwesomeIcon icon={faChevronRight} />
                    {' '}
                    {value}
                  </Link>
                </div>
              </div>
            ))}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

CountryLists.propTypes = {
  continent: propTypes.string,
};

CountryLists.defaultProps = {
  continent: ' ',
};
export default CountryLists;
