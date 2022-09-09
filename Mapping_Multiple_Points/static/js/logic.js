// Add console.log to check to see if our code is working.
console.log("working");

// Coordinates for each point to be used in the line.
let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790]
  ];  

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "red"
  }).addTo(map);  