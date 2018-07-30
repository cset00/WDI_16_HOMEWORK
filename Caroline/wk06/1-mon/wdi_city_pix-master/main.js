console.log('it works')

// classes: nyc, sf, la, austin, sydney
// Update the drop down box to show the five cities NYC, SF, LA, SYD, ATX. Note: You might need to research how to add DOM objects 
// to a web page to be able to add option tags to the select tag.

// When you select a city in the drop-down box, the background image should change to show that city. 
// The images for the five cities are in the images folder. 
// We have already provided the css code for changing the background image in the style.css file (at the bottom). 

// add dom element
// apend to parent id city-type

cities = ["nyc", "sf", "la", "austin", "sydney"]

var cityType = document.querySelector('#city-type')



for (i=0; i<cities.length;i++) {
    var city = document.createElement("option")
    city.textContent = cities[i]
    city.value = cities[i]
    
    cityType.appendChild(city) 
}


cityType.addEventListener('change',function(event){
    // console.log('blah')
    var selectedCity = event.target.value
    
    document.querySelector('body').classList.add(selectedCity)
})



