import fetch from "node-fetch"

export const handler = async () => {
    const response = await fetch('https://api.sunrise-sunset.org/json?lat=41.892&lng=-89.071&date=today&formatted=0')
    const data = await response.json()

    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }
}
