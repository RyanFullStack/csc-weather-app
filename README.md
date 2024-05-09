# CSC Weather APP

CSC WX APP is a commercial app developed for Chicagoland Skydiving Center. This app is currently being used live heavily by both employees and customers to make important safety decisions.

## Technologies Used

![](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)![](https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue)![](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)![](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)![](https://img.shields.io/badge/Socket.io-010101?&style=for-the-badge&logo=Socket.io&logoColor=white)![](https://img.shields.io/badge/GraphQl-E10098?style=for-the-badge&logo=graphql&logoColor=white)

## Getting Started

View this app live at [http://app.skydivecsc.com](http://app.skydivecsc.com)

## Features

### Home Page

![home](/src/images/readme/Home.png)

Home Page displays the current up-to-the-second real-time wind speed and gust as well as direction. It also meaures the sky condition and will report Clear, Scattered, Broken, and Overcast as well as the Altitude indicated by laser. The Vector arrow is a representation of the real life arrow that shows approximate **landing direction**, not *wind direction*. This may differ from the live arrow based on conditions or other factors set by the S&TA. These values will change with your settings.

### Gusts

![gusts](/src/images/readme/Gusts.png)

The Gusts Chart displays live wind data for the previous 30 minutes in kts or mph depending on your setting. The teal portion represents wind speed and the red portion represents max gust. This information is crucial for safety planning.

### Aloft

![aloft](/src/images/readme/Aloft.png)

The Aloft section displays wind conditions aloft up to 18,000', the max used by CSC, according to NOAA forecasts. This information is updated once per hour at the top of every hour. These values will change with your settings.

### Detailed

![detailed](/src/images/readme/Detailed.png)

The Detailed section displays a collection of weather info displayed in a table. It also has a live Student Wind Indicator at the top. If the winds go outside student range it will display "STUDENT WIND HOLD". If winds go over DZ limit, it will display "DZ WIND LIMIT HIT".

If a custom jumprun is set in the staff only back-end, you will see it displayed in this table along with the footer.

The detailed section contains the only link to view the loading area display. This is a desktop mode, made specifically for jumpers to view prior to boarding the aircraft via a monitor in the loading area.

The detailed section contains the only link to view the safety card. This is a card given in person, along with the safety briefing, to visiting jumpers. Ask manifest for a copy if you haven't received one.

These values will change with your settings.

### ME
![me](/src/images/readme/Me.png)

The Me tab lets users set custom values to get current recommendations based on dropzone safety criteria. These are defined values. An A license recommended max is 17kts, B is 19kts, C is 21kts and D is 25kts. The other fields are calculated based on current conditions, previous 30 min values, and the criteria you select.

The Max Speed value only looks at the max sustained speed in the previous 30 minutes and ignores gusts.

The Max Gust value only looks at the max gust in the previous 30 minutes, which there may be none.

The Max Differential will look at the highest speed in the previous 30 minutes, whether it's a gust or steady and subtract the lowest speed, also gust or steady, in the previous 30 minutes. This is especially useful if you correctly set it!

Let's walk through an example to clarify how these values are different.

You may think setting Max Speed to 15kts, Max Gust to 20kts and Max Differential to 5kts would be redundant since you've custom set both the Max Speed and Max Gust to match your differential, and you'd be mostly right! This is not the proper usage! However, this will alert you if the winds drop to something like 12 gusting 18. You would then get the warning that your limits have been reached, althought this may not be the behavior you were expecting.

You should use Max Differential if you want to set a hard wind limit or have no wind limit, but still want to track the difference. Let's say you don't like any wind over 20kts regardless if it's a gust or sustained but you're not comfortable jumping when it's 10kts gusting 20kts. This is perfect! Set both your Max Speed and Max Gust to your hard limit, 20kts in this example, and set your differential for 10kts. Then you will always have a quick reference if it's over 20kts, or if the wind does something weird like 9 gusting 20 or even something less like 5kts gusting 18kts. If you're an instructor or experienced skydiver and have no personal limit above the dz standards, you may choose to set only the Max Differential property and leave speeds blank. Remember, you can select as many or as few options as you desire!

### Webcams
![webcams](/src/images/readme/Webcams.png)

The Webcams tab will allow you view live footage of CSC.

The Hangar and Pro tabs are live from security cams which are a static image updated every second.

The Yard tab is a live streaming view of outside on a 30 second delay.

### Aircraft
![aircraft](/src/images/readme/Aircraft.png)

The Aircraft section is a live traffic adsb-exchange map of CSC allowing jumpers to track our aircraft as well as any other aircraft in the area.

### Radar
![radar](/src/images/readme/Radar.png)

The Radar section displays an embed of the Windy App showing current weather condition for the greater CSC area.

### Manifest
![manifest](/src/images/readme/Manifest.png)

The manifest tab lets you view live manifest activity from Burble at the DZ.
At the top is a search bar that allows you to search current loads by jumper or team name to quickly find yourself, your friends or group.
You also have the option to filter jumpers by type.
As with the rest of the app it updates automatically, no refreshing necessary.
Tandems are yellow, students are green, and all other jumps are not colored.

### Header and Footer

The Header displays the option button on the far left, an indicator whether the data you are viewing is live or forecast, the current time, the live audio link, and the live temperature.

Most importantly, during jump hours, the header will display a stoplight that reflects the stoplight in the hangar. It will be red if there is an active weather hold, yellow if the day is done and the beer light is on, or green if we are actively jumping. If there is no stoplight visible, staff has not set a jumprun for that day.

The Footer displays important info in the center. It will either display a weather hold, beer light, or active jumprun if set by staff. It will otherwise display the live METAR from KRPJ or have a custom message set.

### Loading Area Display
![loadingarea](/src/images/readme/LoadingArea.png)

This is a custom desktop made view for the loading area. This is a collection of all data in a compressed view for jumpers to view prior to boarding the aircraft. These values do not change with your settings and are forced to display how the dropzone has set.

#### Small Features:

    Click the top left icon for Options
    Click the top right temp for quick F/C conversion
    Click the audio icon in the header to open CSC live audio in a new tab
