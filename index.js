let number = ""
const units = {
    "meter": 0.3048,
    "feet" : 3.28084,
    "gallon": 0.2641729,
    "liter": 3.7854,
    "kilo": 2.204623,
    "pound": 0.4535924
}
let conversions = {}
let inputEl = document.getElementById("input-el")
let convertBtn = document.getElementById("convert-btn")
let resetBtn = document.getElementById("reset-btn")
let lengthEl = document.getElementById("lenght-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

convertBtn.addEventListener("click", function(){
    let val = inputEl.value
    number = Number(val)    
    inputEl.value = ''
        function convert() {
            for (const result in units) {
                conversions[result] = units[result] * number;
            }    
         }               
        convert()    
            
            function toDOM() {
            lengthEl.innerHTML = `<strong>${number} meters</strong> = ${conversions.feet.toFixed(3)} feet  |  <strong>${number} feet</strong> = ${conversions.meter.toFixed(3)} meters`
            volumeEl.innerHTML = `<strong>${number} liters</strong> = ${conversions.gallon.toFixed(3)} gallons  |  <strong>${number} gallons</strong> = ${conversions.liter.toFixed(3)} liters`
            massEl.innerHTML = `<strong>${number} kilos</strong> = ${conversions.pound.toFixed(3)} pounds  |  <strong>${number} punds</strong> = ${conversions.kilo.toFixed(3)} kilos`  
            }
        toDOM()
})

resetBtn.addEventListener("click", function(){
    number = 0
    const zeros = new Array(6).fill(0);
    lengthEl.innerHTML = `<strong>${number} meters</strong> = ${zeros[1].toFixed(3)} feet  |  <strong>${number} feet</strong> = ${zeros[0].toFixed(3)} meters`
    volumeEl.innerHTML = `<strong>${number} liters</strong> = ${zeros[2].toFixed(3)} gallons  |  <strong>${number} gallons</strong> = ${zeros[3].toFixed(3)} liters`
    massEl.innerHTML = `<strong>${number} kilos</strong> = ${zeros[4].toFixed(3)} pounds  |  <strong>${number} punds</strong> = ${zeros[5].toFixed(3)} kilos`    
       
})

