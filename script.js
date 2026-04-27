const search_button = document.getElementById("search-button");
const enter_city = document.getElementById("enter-city");
const history_container = document.getElementById("search-history");
const clear_btn = document.getElementById("clear-history");
const welcome_message = document.getElementById("welcome-message");
const outcome = document.getElementById("outcome");
const city_name = document.getElementById("city-name");
const temp = document.getElementById("temp");
const description = document.getElementById("description");
const humid = document.getElementById("humid");
const wind = document.getElementById("wind");

async function getWeather(city) {
    try {
        search_button.innerText = "Loading...";
        const url = `https://wttr.in/${city}?format=j1`;
        const answer = await fetch(url);

        if(!answer.ok) throw new Error("City not found!");

        const data = await answer.json();

        welcome_message.style.display = "none";
        outcome.style.display = "block";

        city_name.innerText = city;
        temp.innerText = `${data.current_condition[0].temp_C}°C`;
        description.innerText = `${data.current_condition[0].weatherDesc[0].value}`;
        humid.innerHTML = `Humid: <span style="color: #007BFF; font-weight: bold;">${data.current_condition[0].humidity}%</span>`;
        wind.innerHTML = `Wind: <span style="color: #007BFF; font-weight: bold;">${data.current_condition[0].windspeedKmph} km/h</span>`;

        saveSearch(city);
    } catch(error) {
        alert("Something went wrong or the city was not found!");
        console.error(error);
    } finally {
        search_button.innerText = "Show the weather"
        enter_city.value = "";
    }
}

function saveSearch(city) {
    let history = JSON.parse(localStorage.getItem("weatherHistory")) || [];

    history = history.filter(item => item.toLowerCase() !== city.toLowerCase());

    history.unshift(city);

    if (history.length > 5) history.pop();

    localStorage.setItem("weatherHistory", JSON.stringify(history));
    display_history();
}

function display_history(){
    const history = JSON.parse(localStorage.getItem("weatherHistory")) || [];
    history_container.innerHTML = "";

    clear_btn.style.display = history.length > 0 ? "block": "none";

    history.forEach(city => {
        const btn = document.createElement("button");
        btn.innerText = city;
        btn.className = "history-btn";
        btn.onclick = () => getWeather(city);
        history_container.appendChild(btn);
    });
}

search_button.addEventListener("click", event=>{
    const new_city = enter_city.value;

    if (new_city === "") {
            alert("Please enter a city!");
        } else {
            getWeather(new_city);
        }
})

enter_city.addEventListener("keydown", event =>{
    if (event.key === "Enter") {
        search_button.click();
    }
})

clear_btn.addEventListener("click", ()=>{
    localStorage.removeItem("weatherHistory");
    display_history();
})    


display_history();

