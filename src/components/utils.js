export const calculateTemperatureColor = (temperature) => {
    const minTemperature = 25;
    const maxTemperature = 70;
    const midTemperature = (minTemperature + maxTemperature) / 2;

    temperature = Math.max(minTemperature, Math.min(maxTemperature, temperature));

    let r, g, b;

    if (temperature <= midTemperature) {
        const normalizedValue = (temperature - minTemperature) / (midTemperature - minTemperature);
        r = Math.round(255 * normalizedValue);
        b = Math.round(255 + (255 - 255 * normalizedValue));
        g = Math.round(0.5 * (255 - 255 * normalizedValue));
    } else {
        const normalizedValue = (temperature - midTemperature) / (maxTemperature - midTemperature);
        r = Math.round(255 + (255 - 255 * normalizedValue));
        b = Math.round(255 * (1 - normalizedValue));
        g = 0;
    }

    return `rgb(${r}, ${g}, ${b})`;
};

export const formatLocalTime = (received) => {
    const receivedDate = new Date();
    receivedDate.setUTCHours(parseInt(received), 0, 0, 0);
    return receivedDate.toLocaleTimeString("en-US", {
        timeZone: "America/Chicago",
        timeZoneName: "short",
        hour: "numeric",
    });
}

export const getCurrentLocalTime = () => {
    return new Date().toLocaleTimeString("en-US", {
        timeZone: "America/Chicago",
        timeZoneName: "short",
        hour: "numeric",
    });
}
