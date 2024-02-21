//let num = ""
let number = ""
const units = {
    "meter": 0.3048,
    "feet" : 3.28084,
    "gallon": 0.2641729,
    "liter": 3.7854,
    "kilo": 2.204623,
    "pound": 0.4535924
}
let inputEl = document.getElementById("input-el")
let convertBtn = document.getElementById("convert-btn")
let resetBtn = document.getElementById("reset-btn")
let lengthEl = document.getElementById("lenght-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

 

convertBtn.addEventListener("click", function(){
    let val = inputEl.value
    number = Number(val)
    
/* if (inputEl.value == 0){
        lengthEl = ""
        volumeEl = ""
        massEl = ""
    } else {    
               
    }
    inputEl.value = '';   
    */ 
    function convert() {   
    let feetToMeters = ""
    let meterToFeet = ""
    let litersToGallons = ""
    let galToLiters = ""
    let kiloToPounds = ""
    let poundToKilos = ""
    feetToMeters = number * units.meter
    meterToFeet = number * units.feet
    litersToGallons = number * units.gallon
    galToLiters = number * units.gallon
    kiloToPounds = number * units.kilo
    poundToKilos = number * units.pound
    return [feetToMeters, meterToFeet, litersToGallons, galToLiters, kiloToPounds, poundToKilos]
   }
   let result = convert()
   toDOM() 
  

    function toDOM() {
    lengthEl.innerHTML = `<strong>${number} meters</strong> = ${result[1].toFixed(3)} feet  |  <strong>${number} feet</strong> = ${result[0].toFixed(3)} meters`
    volumeEl.innerHTML = `<strong>${number} liters</strong> = ${result[2].toFixed(3)} gallons  |  <strong>${number} gallons</strong> = ${result[3].toFixed(3)} liters`
    massEl.innerHTML = `<strong>${number} kilos</strong> = ${result[4].toFixed(3)} pounds  |  <strong>${number} punds</strong> = ${result[5].toFixed(3)} kilos`  
}
inputEl.value = ''
})

resetBtn.addEventListener("click", function(){
    console.log("clicked")   
       
})