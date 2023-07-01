import { useEffect } from "react";

const GustChart = () => {

    useEffect(() => {
        const data = async () => {
            const res = await fetch('https://lifeatterminalvelocity.com/csc_awos/data.php', {method: 'GET'})
            const result = await res
            console.log(result)
        }
        data()
    }, [])

    return (
        <>
        </>
    )
}

export default GustChart;
