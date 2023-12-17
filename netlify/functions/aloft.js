import fetch from "node-fetch"

export const handler = async () => {
    const response = await fetch('https://windsaloft.us/winds.php?lat=41.8930014&lon=-89.07829&hourOffset=0&referrer=MSWA')
    const data = await response.json()

    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }
}
