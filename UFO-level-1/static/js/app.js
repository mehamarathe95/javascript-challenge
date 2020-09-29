// from data.js
var tableData = data;

// YOUR CODE HERE!
// Reference the table body
var tbody = d3.select("tbody");

// Write function to show UFO sightings 
function UFOdata(Sightings) {
    var tbody = d3.select("tbody");
    Sightings.forEach(UFOInfo => {
        var row = tbody.append("tr");
        Object.entries(UFOInfo).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.html(value);
        });
    });
};

UFOdata(tableData)

