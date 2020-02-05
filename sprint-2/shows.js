let showData = [
  {
    DATE: "Mon Dec 17 2018",
    VENUE: "Roland Lane",
    LOCATION: "SanFrancisco, CA"
  },
  {
    DATE: "Tues July 18 2019",
    VENUE: "Pier 3 East",
    LOCATION: "SanFrancisco, CA"
  },
  {
    DATE: "Fri July 22 2019",
    VENUE: "View Loungue",
    LOCATION: "SanFrancisco, CA"
  },
  {
    DATE: "Fri Sept 05 2019",
    VENUE: "Moscow Center",
    LOCATION: "SanFrancisco, CA"
  },
  { DATE: "Aug 11 2019", VENUE: "Pres Club", LOCATION: "SanFrancisco, CA" }
];
console.log(showData);

const shows = document.getElementById;

for (var i = 0, len = showData.length; i < len; i++) {
  var wrapper = document.createElement("div");
  wrapper.className = "showrapper";

  var header = document.createElement("h4");
  header.className = "showrapper__title";
  header.innerText = "DATE";

  var dates = document.createElement("h4");
  dates.className = "showrapper__dates";
  dates.innerText = showData[i].DATE;

  var places = document.createElement("h4");
  places.className = "showrapper__places";
  places.innerText = "VENUE";

  var placez = document.createElement("p");
  placez.className = "showrapper__placez";
  placez.innerText = showData[i].VENUE;

  var spots = document.createElement("h4");
  spots.className = "showrapper__spots";
  spots.innerText = "LOCATION";

  var spotz = document.createElement("p");
  spotz.className = "showrapper__spotz";
  spotz.innerText = showData[i].LOCATION;

  var btn = document.createElement("BUTTON");
  btn.className = "showrapper__btn";
  btn.innerText = "BUY TICKETS";

  wrapper.appendChild(header);
  wrapper.appendChild(dates);
  wrapper.appendChild(places);
  wrapper.appendChild(placez);
  wrapper.appendChild(spots);
  wrapper.appendChild(spotz);
  wrapper.appendChild(btn);

  document.getElementById("shows").appendChild(wrapper);
}
