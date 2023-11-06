import { WeatherContext } from '../context/WeatherContext';
import { useContext } from 'react';
import { calculateTemperatureColor } from './utils';

function WindsAloftLoading() {
    const { directions, speeds, temps, darkTheme, tempSetting } =
        useContext(WeatherContext);

    if (Object.keys(directions).length === 0 ||
        Object.keys(speeds).length === 0 ||
        Object.keys(temps).length === 0) {
        return <div className="loading">Winds Aloft Loading!</div>;
    }


    return (
        <div className="wind-aloft-table">
            <div className="aloft-contents" id='aloft-loading'>
                <table>
                    <thead>
                        <tr>
                            <th>Altitude</th>
                            <th>Direction</th>
                            <th>Speed</th>
                            <th>Temp</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 7 }, (_, index) => {
                            const altitude = (index + 1) * 2000;
                            const altitudeKey = `${altitude}`;

                            return (
                                <tr className={darkTheme === 'true' ? 'table' : 'table-light'} key={altitudeKey}>
                                    <td>{altitude}'</td>
                                    <td>
                                        {directions[altitudeKey]}º{' '}
                                        <i
                                            className="fas fa-chevron-up"
                                            style={{ transform: `rotate(${directions[altitudeKey] + 180}deg)` }}
                                        ></i>
                                    </td>
                                    <td>{speeds[altitudeKey]} kts</td>
                                    <td style={{
                                        color: calculateTemperatureColor(temps[altitudeKey] * (9 / 5) + 32),
                                        fontWeight: 'bold',
                                        textShadow: '2px 2px 1px black',
                                    }}>
                                        {tempSetting === 'false'
                                            ? `${temps[altitudeKey]}º C`
                                            : `${Math.round(temps[altitudeKey] * (9 / 5) + 32)}º F`}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default WindsAloftLoading
