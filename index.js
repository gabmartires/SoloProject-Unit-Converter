let unit = 20
const meter = 0.3048
const feet = 3.28084
const gallon = 0.2641729
const liters = 3.7854
const kilo = 2.204623
const pound = 0.4535924

let unitEl = document.getElementById("unit-el")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

function convert() {
     let feetToMeters = ""
     let meterToFeet = ""
     let litersToGallons = ""
     let galToLiters = ""
     let kiloToPounds = ""
     let poundToKilos = ""
     feetToMeters = unit * meter
     meterToFeet = unit * feet
     litersToGallons = unit * gallon
     galToLiters = unit * liters
     kiloToPounds = unit * kilo
     poundToKilos = unit * pound
     return [feetToMeters, meterToFeet, litersToGallons, galToLiters, kiloToPounds, poundToKilos]
}

let result = convert()
console.log(result)

function toDOM() {
    lengthEl.innerHTML = `<strong>${unit} meters</strong> = ${result[1].toFixed(3)} feet  |  <strong>${unit} feet</strong> = ${result[0].toFixed(3)} meters`
    volumeEl.innerHTML = `<strong>${unit} liters</strong> = ${result[2].toFixed(3)} Gallons  |  <strong>${unit} Gallons</strong> = ${result[3].toFixed(3)} liters`
    massEl.innerHTML = `<strong>${unit} Kilos</strong> = ${result[4].toFixed(3)} Pounds  |  <strong>${unit} Punds</strong> = ${result[5].toFixed(3)} Kilos`
}

toDOM()