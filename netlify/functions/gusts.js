import fetch from "node-fetch"

export const handler = async () => {
    const response = await fetch('https://lifeatterminalvelocity.com/csc_awos/data.php')
    const data = await response.json()

    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }
}
