import { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import './aloft.css'

function WindsAloft() {

    const {directions, speeds, temps, received, darkTheme} = useContext(WeatherContext)

    return (
        <div className="wind-aloft-table"><div className="aloft-title">Winds Received at {received}Z, valid now</div>
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
                <tr className={darkTheme === 'true' ? 'table' : 'table-light'}>
                    <td>1000</td>
                    <td>{directions['1000']}º</td>
                    <td>{speeds['1000']} kts</td>
                    <td>{temps['1000']}º C</td>
                </tr>
                <tr className={darkTheme === 'true' ? 'table' : 'table-light'}>
                    <td>2000</td>
                    <td>{directions['2000']}º</td>
                    <td>{speeds['2000']} kts</td>
                    <td>{temps['2000']}º C</td>
                </tr>
                <tr className={darkTheme === 'true' ? 'table' : 'table-light'}>
                    <td>3000</td>
                    <td>{directions['3000']}º</td>
                    <td>{speeds['3000']} kts</td>
                    <td>{temps['3000']}º C</td>
                </tr>
                <tr className={darkTheme === 'true' ? 'table' : 'table-light'}>
                    <td>4000</td>
                    <td>{directions['4000']}º</td>
                    <td>{speeds['4000']} kts</td>
                    <td>{temps['4000']}º C</td>
                </tr>
                <tr className={darkTheme === 'true' ? 'table' : 'table-light'}>
                    <td>5000</td>
                    <td>{directions['5000']}º</td>
                    <td>{speeds['5000']} kts</td>
                    <td>{temps['5000']}º C</td>
                </tr>
                <tr className={darkTheme === 'true' ? 'table' : 'table-light'}>
                    <td>6000</td>
                    <td>{directions['6000']}º</td>
                    <td>{speeds['6000']} kts</td>
                    <td>{temps['6000']}º C</td>
                </tr>
                <tr className={darkTheme === 'true' ? 'table' : 'table-light'}>
                    <td>7000</td>
                    <td>{directions['7000']}º</td>
                    <td>{speeds['7000']} kts</td>
                    <td>{temps['7000']}º C</td>
                </tr>
                <tr className={darkTheme === 'true' ? 'table' : 'table-light'}>
                    <td>8000</td>
                    <td>{directions['8000']}º</td>
                    <td>{speeds['8000']} kts</td>
                    <td>{temps['8000']}º C</td>
                </tr>
                <tr className={darkTheme === 'true' ? 'table' : 'table-light'}>
                    <td>9000</td>
                    <td>{directions['9000']}º</td>
                    <td>{speeds['9000']} kts</td>
                    <td>{temps['9000']}º C</td>
                </tr>
                <tr className={darkTheme === 'true' ? 'table' : 'table-light'}>
                    <td>10000</td>
                    <td>{directions['10000']}º</td>
                    <td>{speeds['10000']} kts</td>
                    <td>{temps['10000']}º C</td>
                </tr>
                <tr className={darkTheme === 'true' ? 'table' : 'table-light'}>
                    <td>11000</td>
                    <td>{directions['11000']}º</td>
                    <td>{speeds['11000']} kts</td>
                    <td>{temps['11000']}º C</td>
                </tr>
                <tr className={darkTheme === 'true' ? 'table' : 'table-light'}>
                    <td>12000</td>
                    <td>{directions['12000']}º</td>
                    <td>{speeds['12000']} kts</td>
                    <td>{temps['12000']}º C</td>
                </tr>
                <tr className={darkTheme === 'true' ? 'table' : 'table-light'}>
                    <td>13000</td>
                    <td>{directions['13000']}º</td>
                    <td>{speeds['13000']} kts</td>
                    <td>{temps['13000']}º C</td>
                </tr>
                <tr className={darkTheme === 'true' ? 'table' : 'table-light'}>
                    <td>14000</td>
                    <td>{directions['14000']}º</td>
                    <td>{speeds['14000']} kts</td>
                    <td>{temps['14000']}º C</td>
                </tr>
                <tr className={darkTheme === 'true' ? 'table' : 'table-light'}>
                    <td>15000</td>
                    <td>{directions['15000']}º</td>
                    <td>{speeds['15000']} kts</td>
                    <td>{temps['15000']}º C</td>
                </tr>
                <tr className={darkTheme === 'true' ? 'table' : 'table-light'}>
                    <td>16000</td>
                    <td>{directions['16000']}º</td>
                    <td>{speeds['16000']} kts</td>
                    <td>{temps['16000']}º C</td>
                </tr>
                <tr className={darkTheme === 'true' ? 'table' : 'table-light'}>
                    <td>17000</td>
                    <td>{directions['17000']}º</td>
                    <td>{speeds['17000']} kts</td>
                    <td>{temps['17000']}º C</td>
                </tr>
                <tr className={darkTheme === 'true' ? 'table' : 'table-light'}>
                    <td>18000</td>
                    <td>{directions['18000']}º</td>
                    <td>{speeds['18000']} kts</td>
                    <td>{temps['18000']}º C</td>
                </tr>
            </tbody>
        </table>
        </div>
    )
}

export default WindsAloft;
