console.log('PT Planner fun yay')

var alamein = 'Flinders Street, Richmond, East Richmond, Burnley, Hawthorn, Glenferrie'.split(', ')
var glenWaverley = 'Flagstaff, Melbourne Central, Parliament, Richmond, Kooyong, Tooronga'.split(', ')
var sandringham = 'Southern Cross, Richmond, South Yarra, Prahran, Windsor'.split(', ')
var trainLines = [alamein,glenWaverley,sandringham]

// WHAT TO DO
// Find which line origin station belongs to. Record it. 
// Find which line destination station belongs to. Record it.
// If they belong to the same line, run printDeets function.
// If not, somehow slice and join the two lines(arrays) and then run printDeets function?

// Input validation. Need two loops. 
// One to keep bringing up the prompt.
//One to check if userInput belongs in one of the train lines. 

//how do i combine these two into one function......
var isValid = function(){
    if (trainLines[0].includes(origin) === false){
        if (trainLines[1].includes(origin) === false){
            if (trainLines[2].includes(origin) === false){
                origin = prompt('SORRY TRY AGAIN - ORIGIN')
                isValid()
            }
        }
    }
}

var isValid2 = function(){
    if (trainLines[0].includes(destination) === false){
        if (trainLines[1].includes(destination) === false){
            if (trainLines[2].includes(destination) === false){
                destination = prompt('SORRY TRY AGAIN - DESTINATION')
                isValid2()
            }
        }
    }
}

//var origin = 'Windsor'
var origin = prompt('please enter your station of origin')
isValid()
 
//var destination = 'Richmond'
var destination = prompt('please enter your destination station')
isValid2()



var originLine
var destinationLine

for (var a=0; a<trainLines.length; a++){
    if (trainLines[a].indexOf(origin)>=0){
        originLine = trainLines[a]
    }
}

for (var b=0; b<trainLines.length; b++){
    if (trainLines[b].indexOf(destination)>=0){
        destinationLine = trainLines[b]
    } 
}

var printDeets = function(journey){
    console.log('origin: ' + journey[0])
    console.log('destination: ' + journey[journey.length-1] + '\n')
    console.log(journey.join(' -----> ') + '\n')
    console.log(journey.length-1 + ' stops total')
}

if (originLine === destinationLine){
    var line = originLine
    
    if (line.indexOf(origin)>line.indexOf(destination)){
        line = line.reverse()
    }

    var originIndex = line.indexOf(origin)
    var destinationIndex = line.indexOf(destination)
    var newJourney = line.slice(originIndex,destinationIndex+1)

    printDeets(newJourney)
    
} else {

    // origin to richmond
    // if origin > richmond, reverse
    // slice
    // richmond to destination
    // if destination < richmond, reverse
    // slice
    // concat
    var toRichmond = originLine
    var fromRichmond = destinationLine

    if (toRichmond.indexOf(origin)>toRichmond.indexOf('Richmond')) {
        toRichmond = originLine.reverse()
        //console.log('reversing the originLine')
    }
        
    var originIndex = toRichmond.indexOf(origin)
    var firstLeg = toRichmond.slice(originIndex,toRichmond.indexOf('Richmond'))
    //console.log('normal originLine')
        
    if (fromRichmond.indexOf(destination)<fromRichmond.indexOf('Richmond')){
        fromRichmond = destinationLine.reverse()
        //console.log('reversing destinationLine')
    }
    
    var destinationIndex = fromRichmond.indexOf(destination)
    var secondLeg = fromRichmond.slice(fromRichmond.indexOf('Richmond'),fromRichmond.indexOf(destination)+1)
    
    var newJourney = firstLeg.concat(secondLeg)
    //console.log('normal destinationLine')
    printDeets(newJourney)
} 

// OK fine.. how to add additional stations. push.
// create addStation function
// specify line
// and then station

// ^ See attempt 2 (ptPlanner-attempt2.js)
