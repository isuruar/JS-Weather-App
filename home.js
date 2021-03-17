let weather = {
    apiKey: "fcc30ddacdccfd4a75ea7530b2daf8d1",
    //Weather by Location
    fetchWeatherByLocation: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=metric&appid=" +
            this.apiKey
        )
            .then((response) => {
                if (!response.ok) {
                    alert("No weather found.");
                    throw new Error("No weather found.");
                }
                return response.json();
            })
            .then((data) => this.displayWeatherByLocation(data));
    },
    displayWeatherByLocation: function (data) {
        const {
            name
        } = data;
        const {
            icon,
            description
        } = data.weather[0];
        const {
            temp,
            humidity
        } = data.main;
        const {
            speed
        } = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src =
            "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText =
            "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText =
            "Wind speed: " + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage =
            "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    searchByLocation: function () {
        this.fetchWeatherByLocation(document.querySelector(".search-bar").value);
    },

    //Weather by Coordinates
    fetchWeatherByCoordinates: function (lat, lon) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?lat=" +
            lat +
            "&lon=" +
            lon +
            "&units=metric&appid=" +
            this.apiKey
        )
            .then((response) => {
                if (!response.ok) {
                    alert("No weather found.");
                    throw new Error("No weather found.");
                }
                return response.json();
            })
            .then((data) => this.displayWeatherByCoordinates(data));
    },
    displayWeatherByCoordinates: function (data) {
        const {
            name
        } = data;
        const {
            icon,
            description
        } = data.weather[0];
        const {
            temp,
            humidity
        } = data.main;
        const {
            speed
        } = data.wind;
        document.querySelector(".city1").innerText = "Weather in " + name;
        document.querySelector(".icon1").src =
            "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description1").innerText = description;
        document.querySelector(".temp1").innerText = temp + "°C";
        document.querySelector(".humidity1").innerText =
            "Humidity: " + humidity + "%";
        document.querySelector(".wind1").innerText =
            "Wind speed: " + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading1");
        document.body.style.backgroundImage =
            "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    searchByCoordinates: function () {
        this.fetchWeatherByCoordinates(document.querySelector(".search-bar1").value, document.querySelector(".search-bar2").value);
        this.fetchWeatherThreeDayForecast(document.querySelector(".search-bar1").value, document.querySelector(".search-bar2").value);
    },

    //Weather by Three Day Forecast
    fetchWeatherThreeDayForecast: function (lat, lon) {
        fetch(
            "https://api.openweathermap.org/data/2.5/onecall?lat=" +
            lat +
            "&lon=" +
            lon +
            "&exclude=current,minutely,hourly&appid=" +
            this.apiKey
        )
            .then((response) => {
                if (!response.ok) {
                    alert("No weather found.");
                    throw new Error("No weather found.");
                }
                return response.json();
            })
            .then((data) => this.displayThreeDayForecast(data));
    },
    displayThreeDayForecast: function (data) {

        const {
            dt
        } = data.daily;
        const {
            icon,
            description
        } = data.weather[0];
        const {
            temp,
            humidity
        } = data.main;
        const {
            speed
        } = data.wind;


        daily.forEach(myFunction);

        function myFunction(dt, icon, description, temp, humidity, speed) {
            //monday
            document.querySelector(".monday").innerText = dt;
            document.querySelector(".iconMon").src =
                "https://openweathermap.org/img/wn/" + icon + ".png";
            document.querySelector(".descriptionMon").innerText = description;
            document.querySelector(".tempMon").innerText = temp + "°C";
            document.querySelector(".humidityMon").innerText =
                "Humidity: " + humidity + "%";
            document.querySelector(".windMon").innerText =
                "Wind speed: " + speed + " km/h";
            document.querySelector(".weatherMon").classList.remove("loading1");
            document.body.style.backgroundImage =
                "url('https://source.unsplash.com/1600x900/?" + name + "')";

            //tuesday
            document.querySelector(".tuesday").innerText = dt;
            document.querySelector(".iconTue").src =
                "https://openweathermap.org/img/wn/" + icon + ".png";
            document.querySelector(".descriptionTue").innerText = description;
            document.querySelector(".tempTue").innerText = temp + "°C";
            document.querySelector(".humidityTue").innerText =
                "Humidity: " + humidity + "%";
            document.querySelector(".windTue").innerText =
                "Wind speed: " + speed + " km/h";
            document.querySelector(".weatherTue").classList.remove("loading1");
            document.body.style.backgroundImage =
                "url('https://source.unsplash.com/1600x900/?" + name + "')";

            //wednesday
            document.querySelector(".wednesday").innerText = dt;
            document.querySelector(".iconWed").src =
                "https://openweathermap.org/img/wn/" + icon + ".png";
            document.querySelector(".descriptionWed").innerText = description;
            document.querySelector(".tempWed").innerText = temp + "°C";
            document.querySelector(".humidityWed").innerText =
                "Humidity: " + humidity + "%";
            document.querySelector(".windWed").innerText =
                "Wind speed: " + speed + " km/h";
            document.querySelector(".weatherWed").classList.remove("loading1");
            document.body.style.backgroundImage =
                "url('https://source.unsplash.com/1600x900/?" + name + "')";
        
            //Thursday
            document.querySelector(".thursday").innerText = dt;
            document.querySelector(".iconThu").src =
                "https://openweathermap.org/img/wn/" + icon + ".png";
            document.querySelector(".descriptionThu").innerText = description;
            document.querySelector(".tempThu").innerText = temp + "°C";
            document.querySelector(".humidityThu").innerText =
                "Humidity: " + humidity + "%";
            document.querySelector(".windThu").innerText =
                "Wind speed: " + speed + " km/h";
            document.querySelector(".weatherThu").classList.remove("loading1");
            document.body.style.backgroundImage =
                "url('https://source.unsplash.com/1600x900/?" + name + "')";

            //Friday
            document.querySelector(".friday").innerText = dt;
            document.querySelector(".iconFri").src =
                "https://openweathermap.org/img/wn/" + icon + ".png";
            document.querySelector(".descriptionFri").innerText = description;
            document.querySelector(".tempFri").innerText = temp + "°C";
            document.querySelector(".humidityFri").innerText =
                "Humidity: " + humidity + "%";
            document.querySelector(".windFri").innerText =
                "Wind speed: " + speed + " km/h";
            document.querySelector(".weatherFri").classList.remove("loading1");
            document.body.style.backgroundImage =
                "url('https://source.unsplash.com/1600x900/?" + name + "')";

            //Saturday
            document.querySelector(".saturday").innerText = dt;
            document.querySelector(".iconSat").src =
                "https://openweathermap.org/img/wn/" + icon + ".png";
            document.querySelector(".descriptionSat").innerText = description;
            document.querySelector(".tempSat").innerText = temp + "°C";
            document.querySelector(".humiditySat").innerText =
                "Humidity: " + humidity + "%";
            document.querySelector(".windSat").innerText =
                "Wind speed: " + speed + " km/h";
            document.querySelector(".weatherSat").classList.remove("loading1");
            document.body.style.backgroundImage =
                "url('https://source.unsplash.com/1600x900/?" + name + "')";

            //Sunday

            document.querySelector(".sunday").innerText = dt;
            document.querySelector(".iconSun").src =
                "https://openweathermap.org/img/wn/" + icon + ".png";
            document.querySelector(".descriptionSun").innerText = description;
            document.querySelector(".tempSun").innerText = temp + "°C";
            document.querySelector(".humiditySun").innerText =
                "Humidity: " + humidity + "%";
            document.querySelector(".windSun").innerText =
                "Wind speed: " + speed + " km/h";
            document.querySelector(".weatherSun").classList.remove("loading1");
            document.body.style.backgroundImage =
                "url('https://source.unsplash.com/1600x900/?" + name + "')";

        }
    }
};

//Default API Calls on Page Load
weather.fetchWeatherByLocation("Colombo");
weather.fetchWeatherByCoordinates(6.9, 79);
weather.fetchWeatherThreeDayForecast(6.9, 79);

document.querySelector(".search .button1").addEventListener("click", function () {
    weather.searchByLocation();
});

document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
            weather.searchByLocation();
        }
    });

document.querySelector(".search .button2").addEventListener("click", function () {
    weather.searchByCoordinates();
});

document
    .querySelector(".search-bar1")
    .addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
            weather.searchByCoordinates();
        }
    });

document
    .querySelector(".search-bar2")
    .addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
            weather.searchByCoordinates();
        }
    });

document.querySelector("#btnShowMore").addEventListener("click", function () {
    setDisplay("show-less", "block");
    this.style.display = 'none';
    document.querySelector("#btnShowLess").style.display = 'block';
});

document.querySelector("#btnShowLess").addEventListener("click", function () {
    setDisplay("show-less", "none");
    this.style.display = 'none';
    document.querySelector("#btnShowMore").style.display = 'block';
});

function setDisplay(className, displayValue) {
    var items = document.getElementsByClassName(className);
    for (var i = 0; i < items.length; i++) {
        items[i].style.display = displayValue;
    }
}