console.log('PT Planner attempt 2')

var trainLines = [
    {
        lineName: 'Alamein',
        stations: 'Flinders Street, Richmond, East Richmond, Burnley, Hawthorn, Glenferrie'.split(', ')
    },
    {
        lineName: 'Glen Waverley',
        stations: 'Flagstaff, Melbourne Central, Parliament, Richmond, Kooyong, Tooronga'.split(', ')
    },
    {
        lineName: 'Sandringham',
        stations: 'Southern Cross, Richmond, South Yarra, Prahran, Windsor'.split(', ')
    }
]


var isValidStation = function(input){
    for (var i=0; i<trainLines.length;i++){
        if (trainLines[i].stations.includes(input)){
            return true;
        }
    }
    return false;
}

var promptForValidStation = function(message, errorMessage) {
    var counter = 0
    do {
        if (counter === 0){
            var input = prompt(message) 
        } else {
            var input = prompt(errorMessage)
        }
        counter++
    } while (!isValidStation(input))
    return input;
}

//var origin = 'Windsor'
var origin = promptForValidStation("Enter origin", "SORRRRRYYY TRY AGAIN - ORIGIN")

//var destination = 'Richmond'
var destination =  promptForValidStation("Enter destination", "SORRRRRYYY TRY AGAIN - DESTINATION")


var originLine
var destinationLine

for (var a=0; a<trainLines.length; a++){
    if (trainLines[a].stations.indexOf(origin)>=0){
        originLine = trainLines[a]
    }
}

for (var b=0; b<trainLines.length; b++){
    if (trainLines[b].stations.indexOf(destination)>=0){
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
    
    if (line.stations.indexOf(origin)>line.stations.indexOf(destination)){
        line = line.stations.reverse()
    }

    var originIndex = line.indexOf(origin)
    var destinationIndex = line.indexOf(destination)
    var newJourney = line.slice(originIndex,destinationIndex+1)

    printDeets(newJourney)
    
} else {

    var toRichmond = originLine.stations
    var fromRichmond = destinationLine.stations

    if (toRichmond.indexOf(origin)>toRichmond.indexOf('Richmond')) {
        toRichmond = originLine.stations.reverse()

    }

    var originIndex = toRichmond.indexOf(origin)
    var firstLeg = toRichmond.slice(originIndex,toRichmond.indexOf('Richmond'))

        
    if (fromRichmond.indexOf(destination)<fromRichmond.indexOf('Richmond')){
        fromRichmond = destinationLine.stations.reverse()
       
    }
    
    var destinationIndex = fromRichmond.indexOf(destination)
    var secondLeg = fromRichmond.slice(fromRichmond.indexOf('Richmond'),destinationIndex+1)
    
    var newJourney = firstLeg.concat(secondLeg)
    
    printDeets(newJourney)
} 

// how to add additional stations. push.
// create addStation function
// specify line
// and then station
var findLine = function (lineToFind){
    for (var x=0; x<trainLines.length; x++){
        if(trainLines[x].lineName === lineToFind){
            return trainLines[x]
        }
    }
}

var addStation = function(lineToFind, stationToAdd){
    findLine(lineToFind).stations.push(stationToAdd)
    console.log(findLine(lineToFind))
}

