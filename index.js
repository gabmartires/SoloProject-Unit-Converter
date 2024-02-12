let unit = []
const meter = 0.3048
const feet = 3.28084
const gallon = 0.2641729
const liters = 3.7854
const kilo = 2.204623
const pound = 0.4535924
let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input-el")
let lengthEl = document.getElementById("lenght-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")
let toNumber = JSON.parse(localStorage.getItem("unit"))

console.log(toNumber[0])
console.log(typeof toNumber)

convertBtn.addEventListener("click", function(){
    unit.push(inputEl.value)
    inputEl.value = '';      
    localStorage.setItem("keyVal", JSON.stringify(unit))    
    toDOM()    
})



function convert() {     
     let feetToMeters = ""
     let meterToFeet = ""
     let litersToGallons = ""
     let galToLiters = ""
     let kiloToPounds = ""
     let poundToKilos = ""
     feetToMeters = toNumber[0] * meter
     meterToFeet = toNumber[0]* feet
     litersToGallons = toNumber[0]* gallon
     galToLiters = toNumber[0]* liters
     kiloToPounds = toNumber[0] * kilo
     poundToKilos = toNumber[0] * pound
     return [feetToMeters, meterToFeet, litersToGallons, galToLiters, kiloToPounds, poundToKilos]
}

let result = convert()

function toDOM() {
    lengthEl.innerHTML = `<strong>${unit[0]} meters</strong> = ${result[1].toFixed(3)} feet  |  <strong>${unit[0]} feet</strong> = ${result[0].toFixed(3)} meters`
    volumeEl.innerHTML = `<strong>${unit[0]} liters</strong> = ${result[2].toFixed(3)} gallons  |  <strong>${unit[0]} gallons</strong> = ${result[3].toFixed(3)} liters`
    massEl.innerHTML = `<strong>${unit[0]} kilos</strong> = ${result[4].toFixed(3)} pounds  |  <strong>${unit[0]} punds</strong> = ${result[5].toFixed(3)} kilos`  
}

function clear() {
    if(unit.length === 2) {
        toNumber = localStorage.removeItem("keyVal")
    }
}

clear()