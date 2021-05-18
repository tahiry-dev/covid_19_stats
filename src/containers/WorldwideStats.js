import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setWorldStats } from "../redux/actions/statsActions";
import StatsComponent from './StatsComponent';

const StatsPage = () => {
    const stats = useSelector(state => state.wordStats.stats);
    console.log('stats is', stats)
    const dispatch = useDispatch();
    const fetchStats = async () => {
        const response = await axios
            .get("https://corona.lmao.ninja/v2/continents?yesterday=true&sort")
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(setWorldStats(response.data));
    };

    useEffect(() => {
        fetchStats();
    }, []);

    return (
        <div>
            {<StatsComponent />}
        </div>
    );
};

export default StatsPage;