import { useEffect, useState } from "react";
import './metar.css';

function Footer() {
    const [jumpruns, setJumpruns] = useState([])
    const [newSpot, setNewSpot] = useState('')
    const [newOffset, setNewOffset] = useState('')

    useEffect(() => {
        const getJumprun = async () => {
            const res = await fetch('https://csc-login.onrender.com/api/jumpruns/')
            const data = await res.json()

            if (data.jumpruns) {
                setJumpruns(data.jumpruns)
            } else {
                setJumpruns([])
            }
        }
        getJumprun()

        const intervalId = setInterval(() => {
            getJumprun();
        }, 30000);

        return function () {
            setJumpruns([])
            clearInterval(intervalId)
        }
    }, [])


    useEffect(() => {
        if (jumpruns[0]) {

            if (jumpruns[0].spot > 0 && jumpruns[0].spot < 10) {
                setNewSpot(`.${jumpruns[0].spot}`)
            }
            if (jumpruns[0].spot > 10) {
                const numStr = jumpruns[0].spot.toString();
                const beforeDecimal = numStr.slice(0, -1);
                const afterDecimal = numStr.slice(-1);
                setNewSpot(`${beforeDecimal}.${afterDecimal}`)
            }
            if (jumpruns[0].offset > 0 && jumpruns[0].offset < 10) {
                setNewOffset(`.${jumpruns[0].offset}`)
            }
            if (jumpruns[0].offset > 10) {
                const numStr = jumpruns[0].offset.toString();
                const beforeDecimal = numStr.slice(0, -1);
                const afterDecimal = numStr.slice(-1);
                setNewOffset(`${beforeDecimal}.${afterDecimal}`)
            }



        }
    }, [jumpruns])

    return (
        <div className="metar-container">
            <p><a href='https://ryanerickson.netlify.app/' target="_blank" rel='noreferrer'>Created by: Ryan Erickson</a></p>

            {jumpruns[0] ?
                <div className="footer-jumprun">
                    Jump Run: {jumpruns[0]?.heading}º | {newSpot} {jumpruns[0].selectedSpot} {jumpruns[0].selectedOffset === 'None' ? null : `| ${newOffset} ${jumpruns[0].selectedOffset}`}
                </div>
                : null}

            <p><a href='https://github.com/RyanFullStack' target="_blank" rel='noreferrer'>Github</a></p>
        </div>
    )
}

export default Footer;
