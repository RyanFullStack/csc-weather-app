import axios from 'axios';

export const handler = async function (event, context) {
  try {
    if (event.queryStringParameters && event.queryStringParameters.url === 'aloft') {
      const response1 = await axios.get("https://windsaloft.us/winds.php?lat=41.8930014&lon=-89.07829&hourOffset=0&referrer=MSWA");
      const data1 = response1.data;

      return {
        statusCode: 200,
        body: JSON.stringify(data1),
      };
    } else if (event.queryStringParameters && event.queryStringParameters.url === 'gusts') {
      const response2 = await axios.get("https://lifeatterminalvelocity.com/csc_awos/data.php");
      const data2 = response2.data;

      return {
        statusCode: 200,
        body: JSON.stringify(data2),
      };
    } else {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Invalid URL parameter" }),
      };
    }
  } catch (error) {
    console.error('Error fetching data:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
