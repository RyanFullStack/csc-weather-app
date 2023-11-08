# CSC Weather APP

CSC WX APP is a commercial app developed for Chicagoland Skydiving Center. This app is currently being used live heavily by both employees and customers to make important safety decisions.

## Technologies Used
![](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)![](https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue)![](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)![](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)![](https://img.shields.io/badge/Socket.io-010101?&style=for-the-badge&logo=Socket.io&logoColor=white)![](https://img.shields.io/badge/GraphQl-E10098?style=for-the-badge&logo=graphql&logoColor=white)

## Landing

![home](https://ryanerickson.netlify.app/images/CSCwx.png)

## Getting Started

View this app live at [http://app.skydivecsc.com](http://app.skydivecsc.com)

Change from dark to light mode at the top left.

Click the temperature in top right to switch from ºF to ºC

## Features

### Home Page

Home Page displays the current up-to-the-second real-time wind speed and max gust as well as direction. It also meaures the sky condition and will report Clear, Scattered, Broken, and Overcast as well as the Altitude indicated by laser.

### Gusts

The Gusts Chart displays wind data for the previous 30 minutes. The blue portion represents wind speed and the red portion represents max gust. This information is crucial for safety planning.

### Aloft

The Aloft section displays wind conditions aloft according to NOAA forecasts. This information is updated once per hour at the top of every hour.

### Detailed

The Detailed section displays a collection of information of weather info displayed in a table. Also has a live Student Wind Indicator.

    The detailed section contains the only live link to view the loading area display. This is a desktop mode only, made specifically for jumpers to view prior to boarding the aircraft.

    Within this view is a custom backend with Python and Flask for secure login for verified users. Only staff has access to this custom portal which is used for updating day to day changing values.

    A PostGreSQL database is kept alive from 5am-12am with an auto delete at 12am for old data.

### ME

The Me tab lets users set custom values to get current recommendations based on dropzone safety criteria.

### Webcam

This is a live view of the hangar at Chicagoland Skydiving Center.

### Aircraft

The Aircraft section is a live traffic adsb-exchange map.

### Radar

The Radar section displays an embed of the Windy App.

### Manifest

This will open an external link displaying the live manifest activity at the dropzone.

#### Small Features:
    Click the top left icon for Options
    Click the top right temp for quick F/C conversion
