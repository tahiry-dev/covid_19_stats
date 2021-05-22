import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { selectCountryStats } from '../redux/actions/statsActions';
import ContinentFilter from './ContinentFilter';
import CountryLists from './CountryLists';

const StatsPage = () => {
  const [continent, setContinent] = useState('');

  const handleContinent = (childData) => {
    setContinent(childData);
  };

  const statsByContinent = useSelector((state) => state.countryStats);

  const { todayDeaths, todayCases, todayRecovered } = statsByContinent;

  const dispatch = useDispatch();
  const fetchContinentStats = async (continent) => {
    const response = await axios
      .get(`https://corona.lmao.ninja/v2/continents/${continent}?yesterday&strict`)
      .catch((err) => err);

    dispatch(selectCountryStats(response.data));
  };

  useEffect(() => {
    if (continent && continent !== '') fetchContinentStats(continent);
  }, [continent]);

  return (
    <div>
      <ContinentFilter chosenContinent={handleContinent} />
      <div className="myContainer continent_container">
        {Object.keys(statsByContinent).length === 0 || continent === 'Please Choose Your Continent' ? (<></>)
          : (
            <div className="ui items ">
              <div className="item">
                <div className="image">
                  {/* eslint-disable global-require */}
                  {/* eslint-disable import/no-dynamic-require */}
                  {continent === 'Please Choose Your Continent' || continent === '' ? (<></>) : (<img src={require(`../images/${continent}.jpg`).default} alt={continent} />)}
                  {/* eslint-enable  global-require */}
                  {/* eslint-enable import/no-dynamic-require */}
                </div>
                <div className="content">
                  <h2>
                    {continent}
                    {' '}
                    Today Stats
                  </h2>
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
                  <CountryLists continent={continent} />
                </div>
              </div>
            </div>
          )}
      </div>
    </div>
  );
};
export default StatsPage;
