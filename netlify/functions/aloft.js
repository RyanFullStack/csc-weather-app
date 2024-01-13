import fetch from "node-fetch"

export const handler = async () => {
    const response = await fetch('https://windsaloft.us/winds.php?lat=41.8930014&lon=-89.07829&hourOffset=0&referrer=MSWA')
    let data = await response.json()

    if (!data.direction) {
        data = {'error': 'no winds aloft found'}
    }

    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }
}
