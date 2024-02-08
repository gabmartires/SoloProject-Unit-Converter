let unit = 20
const meter = 0.3048
const feet = 3.28084

let unitEl = document.getElementById("unit-el")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

function convert() {
     let imperial = ""
     let metric = ""
     imperial = unit * meter
     metric = unit * feet
     return [imperial, metric]
}

let result = convert()
console.log(result)

function toDOM() {
    lengthEl.innerHTML = `${unit} meter = ${result[1]} feet | ${unit} feet = ${result[0]} meters`
}

toDOM()