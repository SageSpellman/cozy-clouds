import { useState, useEffect, useCallback } from "react";
import { get5DayForecast } from "../../utilities/weather-api";

export default function WeeklyPage() {
    const [location, setlocation] = useState('');
    const [forecast, setForecast] = useState(null);
    const [error, setError] = useState('');

    const fetchForecast = useCallback(async () => {
        try {
            const forecastData = await get5DayForecast(location);
            setForecast(forecastData);
            setError('');
        } catch (err) {
            setError('Error fetching forecast');
        }
    }, [location]);

    useEffect(() => {
        if (location) {
            fetchForecast();
        }
    }, [location, fetchForecast]);

    return (
        <div>
            <h2>5-Day Weather Forecast</h2>
            <input 
                type="text"
                placeholder="Enter location"
                value={location}
                onChange={(e) => setlocation(e.target.value)}
            />
            <button onClick={fetchForecast}>Get Forecast</button>
            {error && <p>{error}</p>}
            {forecast && (
                <div>
                    <h3>5-Day Weather Forecast for {location}</h3>
                    {Object.keys(forecast).map((date, index) => (
                        <div key={index}>
                            <h4>{date}</h4>
                            {forecast[date].map((entry, subIndex) => (
                                <div key={subIndex}>
                                    <p>{new Date(entry.dt * 1000).toLocaleTimeString()}</p>
                                    <p>Temperature: {entry.main.temp}°F</p>
                                    <p>Condition: {entry.weather[0].description}</p>
                                </div>
                             ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}