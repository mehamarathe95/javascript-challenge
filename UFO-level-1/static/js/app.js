// from data.js
var tableData = data;

// Reference the table body
var tbody = d3.select("tbody");

// Write function to show UFO sightings 
data.forEach(function(sightings) {
    var tbody = d3.select("tbody");
    // Appending one row for each UFO sighting
    var row = tbody.append("tr");
    Object.entries(sightings).forEach(function([key, value]) {
        // Append one cell for each UFO sighting
        var cell = row.append("td");
        cell.text(value);
    });
});

// Select the form and button
var form = d3.select("#form");
var button = d3.select("filter-btn");

// Create the event handlers
button.on("click", function() {
    // Clear table rows 
    tbody.html("");

    // Prevent the page from refreshing on click
    d3.event.preventDefault();

    // Select the correct input element and get the raw HTML nodes
    var inputElement = d3.select("#.form-control");

    // Get the value property 
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    // Filter above with datetime equal to input value
    var filteredData = data.filter(UFO => UFO.datetime === inputValue);

    console.log(filteredData);

    filteredData.forEach(function(sightings) {
        // Append table row for UFO sighting 
        var row = tbody.append("tr");
        // Use Object.entries to print each UFO sighting
        Object.entries(sightings).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });
});