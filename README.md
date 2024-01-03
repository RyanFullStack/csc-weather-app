# CSC Weather APP

CSC WX APP is a commercial app developed for Chicagoland Skydiving Center. This app is currently being used live heavily by both employees and customers to make important safety decisions.

## Technologies Used

![](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)![](https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue)![](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)![](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)![](https://img.shields.io/badge/Socket.io-010101?&style=for-the-badge&logo=Socket.io&logoColor=white)![](https://img.shields.io/badge/GraphQl-E10098?style=for-the-badge&logo=graphql&logoColor=white)

## Getting Started

View this app live at [http://app.skydivecsc.com](http://app.skydivecsc.com)

Change from dark to light mode at the top left.

Click the temperature in top right to switch from ºF to ºC

## Features

### Home Page

![home](https://csc-wx-app.netlify.app/readme/Home.png)

Home Page displays the current up-to-the-second real-time wind speed and gust as well as direction. It also meaures the sky condition and will report Clear, Scattered, Broken, and Overcast as well as the Altitude indicated by laser. The Vector arrow is a representation of the real life arrow that shows landing direction. These values will change with your settings.

### Gusts

![gusts](https://csc-wx-app.netlify.app/readme/Gusts.png)

The Gusts Chart displays live wind data for the previous 30 minutes in kts or mph depending on your setting. The teal portion represents wind speed and the red portion represents max gust. This information is crucial for safety planning.

### Aloft

![aloft](https://csc-wx-app.netlify.app/readme/Aloft.png)

The Aloft section displays wind conditions aloft up to 18,000', the max used by CSC, according to NOAA forecasts. This information is updated once per hour at the top of every hour.

### Detailed

![detailed](https://csc-wx-app.netlify.app/readme/Detailed.png)

The Detailed section displays a collection of information of weather info displayed in a table. Also has a live Student Wind Indicator at the top. If the winds go outside student range it will display "STUDENT WIND HOLD". If winds go over DZ limit, it will display "DZ WIND LIMIT HIT"

If a custom jumprun is set in the staff only back-end, you will see it displayed here along with the footer.

The detailed section contains the only live link to view the loading area display. This is a desktop mode, made specifically for jumpers to view prior to boarding the aircraft via a monitor in the loading area.

### ME
![me](https://csc-wx-app.netlify.app/readme/Me.png)

The Me tab lets users set custom values to get current recommendations based on dropzone safety criteria. These are defined values. An A license recommended max is 17kts, B is 19kts, C is 21kts and D is 25kts. The other feilds are calculated based on current condition, previous 30 min values, and the criteria you select.

### Webcams
![webcams](https://csc-wx-app.netlify.app/readme/Webcams.png)

The Webcams tab will allow you view live footage of CSC.

The Hangar and Pro tabs are live from security cams which are a static image updated every second.

The Yard tab is a live streaming view of outside on a 30 second delay.

### Aircraft
![aircraft](https://csc-wx-app.netlify.app/readme/Aircraft.png)

The Aircraft section is a live traffic adsb-exchange map of CSC allowing jumpers to track our aircraft as well as any other aircraft in the area.

### Radar
![radar](https://csc-wx-app.netlify.app/readme/Radar.png)

The Radar section displays an embed of the Windy App showing current weather condition for the greater CSC area.

### Manifest

This will open an external link displaying the live manifest activity at the dropzone.

#### Small Features:

    Click the top left icon for Options
    Click the top right temp for quick F/C conversion
    Click the audio icon in the header to open CSC live audio in a new tab
