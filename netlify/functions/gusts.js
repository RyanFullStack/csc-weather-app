import fetch from "node-fetch"

export const handler = async () => {
    const response = await fetch('https://lifeatterminalvelocity.com/csc_awos/data.php')
    let data = await response.json()

    if (!data.length) {
        data = [{'error': 'no gusts found'}]
    }

    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }
}
