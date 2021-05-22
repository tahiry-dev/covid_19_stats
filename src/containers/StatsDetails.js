import React, { useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { selectCountryStats, removeSelectedCountry } from '../redux/actions/statsActions';

const StatsDetails = () => {
  const { country } = useParams();
  const statsByCountry = useSelector((state) => state.countryStats);
  const { todayDeaths, todayCases, todayRecovered } = statsByCountry;
  const dispatch = useDispatch();
  const fetchStatsDetail = async (country) => {
    const response = await axios
      .get(`https://corona.lmao.ninja/v2/countries/${country}?yesterday=true&strict=true&query`)
      .catch((err) => err);
    dispatch(selectCountryStats(response.data));
  };

  useEffect(() => {
    if (country && country !== '') fetchStatsDetail(country);
    return () => {
      dispatch(removeSelectedCountry());
    };
  }, [country]);
  return (
    <div className="ui grid container" data-testid="custom-element">
      {Object.keys(statsByCountry).length === 0 ? (
        <div className="loading">
          <h3>...Loading</h3>
        </div>
      ) : (
        <div className="details">
          <h3>
            Today in
            &nbsp;
            <em>{country}</em>
          </h3>
          <div className="ui statistics">
            <div className=" orange statistic theStats">
              <div className="value">
                {todayCases}
              </div>
              <div className="label">
                Cases
              </div>
            </div>
            <div className=" red statistic theStats">
              <div className="value">
                {todayDeaths}
              </div>
              <div className="label">
                Deaths
              </div>
            </div>
            <div className="green statistic theStats">
              <div className="value">
                {todayRecovered}
              </div>
              <div className="label">
                Recovered
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="homeLink">
        <Link to="/">
          <FontAwesomeIcon icon={faHome} size="3x" />
          {' '}
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default StatsDetails;
